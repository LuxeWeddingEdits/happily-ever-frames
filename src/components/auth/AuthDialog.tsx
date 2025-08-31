import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"
import { Loader2, Mail } from "lucide-react"
import { isSupabaseConfigured } from "@/lib/supabase"
import SupabaseConnectionNotice from "./SupabaseConnectionNotice"

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const signUpSchema = z.object({
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .refine((email) => {
      // More strict email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return emailRegex.test(email)
    }, "Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  fullName: z.string()
    .min(2, "Full name is required")
    .refine((name) => {
      // Ensure full name has at least first and last name
      const trimmedName = name.trim()
      const nameParts = trimmedName.split(/\s+/)
      return nameParts.length >= 2 && nameParts.every(part => part.length > 0)
    }, "Please enter your full name (first and last name)"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignInFormData = z.infer<typeof signInSchema>
type SignUpFormData = z.infer<typeof signUpSchema>

interface AuthDialogProps {
  children: React.ReactNode
}

export default function AuthDialog({ children }: AuthDialogProps) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [loading, setLoading] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)
  const [emailForConfirmation, setEmailForConfirmation] = useState("")
  
  const { signIn, signUp, resendConfirmation } = useAuth()

  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    },
  })

  const handleSignIn = async (data: SignInFormData) => {
    setLoading(true)
    const { error } = await signIn(data.email, data.password)
    
    if (error) {
      if (error.message.includes('Email not confirmed')) {
        toast.error("Please check your email and click the confirmation link before signing in.")
        setEmailForConfirmation(data.email)
        setConfirmationSent(true)
      } else {
        toast.error(error.message)
      }
    } else {
      toast.success("Signed in successfully!")
      setOpen(false)
      signInForm.reset()
    }
    setLoading(false)
  }

  const handleSignUp = async (data: SignUpFormData) => {
    setLoading(true)
    const { error } = await signUp(data.email, data.password, data.fullName)
    
    if (error) {
      toast.error(error.message)
    } else {
      toast.success("Account created! Please check your email to confirm your account.")
      setEmailForConfirmation(data.email)
      setConfirmationSent(true)
      signUpForm.reset()
    }
    setLoading(false)
  }

  const handleResendConfirmation = async () => {
    setLoading(true)
    const { error } = await resendConfirmation(emailForConfirmation)
    
    if (error) {
      toast.error(error.message)
    } else {
      toast.success("Confirmation email sent! Please check your inbox.")
    }
    setLoading(false)
  }

  const resetDialog = () => {
    setMode('signin')
    setConfirmationSent(false)
    setEmailForConfirmation("")
    signInForm.reset()
    signUpForm.reset()
  }

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen)
      if (!newOpen) resetDialog()
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!isSupabaseConfigured() ? (
          <div className="space-y-4">
            <DialogHeader>
              <DialogTitle>Authentication Setup Required</DialogTitle>
              <DialogDescription>
                To use authentication features, you need to connect this project to Supabase.
              </DialogDescription>
            </DialogHeader>
            <SupabaseConnectionNotice />
          </div>
        ) : confirmationSent ? (
          <div className="text-center space-y-4">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Check Your Email
              </DialogTitle>
              <DialogDescription>
                We've sent a confirmation link to {emailForConfirmation}. 
                Please click the link in your email to verify your account.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <Button 
                onClick={handleResendConfirmation} 
                variant="outline" 
                disabled={loading}
                className="w-full"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Resend Confirmation Email
              </Button>
              <Button 
                onClick={() => setConfirmationSent(false)} 
                variant="ghost"
                className="w-full"
              >
                Back to Sign In
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </DialogTitle>
              <DialogDescription>
                {mode === 'signin' 
                  ? 'Sign in to your account to access your bookings and preferences.'
                  : 'Create your account to book our premium wedding editing services.'
                }
              </DialogDescription>
            </DialogHeader>

            {mode === 'signin' ? (
              <Form {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4">
                  <FormField
                    control={signInForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email" 
                            autoComplete="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your password" 
                            type="password" 
                            autoComplete="current-password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                  </Button>
                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-primary hover:underline font-medium"
                    >
                      Create one here
                    </button>
                  </div>
                </form>
              </Form>
            ) : (
              <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4">
                  <FormField
                    control={signUpForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            autoComplete="off"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signUpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email" 
                            autoComplete="off"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signUpForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Create a password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signUpForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Confirm your password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in here
                    </button>
                  </div>
                </form>
              </Form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
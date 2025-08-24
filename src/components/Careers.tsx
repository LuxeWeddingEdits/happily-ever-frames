import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jobOpenings = [
  {
    title: "Senior Video Editor",
    department: "Production",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced video editor specializing in wedding cinematography with expertise in color grading and storytelling.",
    requirements: [
      "5+ years of professional video editing experience",
      "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Experience with wedding videography and storytelling",
      "Strong attention to detail and color grading skills"
    ]
  },
  {
    title: "Photo Retouching Specialist",
    department: "Production",
    location: "Remote",
    type: "Full-time",
    description: "Join our team as a photo retouching specialist focusing on wedding photography enhancement and artistic editing.",
    requirements: [
      "3+ years of professional photo editing experience",
      "Expert level in Adobe Photoshop and Lightroom",
      "Experience with wedding photography workflows",
      "Portfolio demonstrating high-end retouching skills"
    ]
  },
  {
    title: "Project Coordinator",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Coordinate wedding editing projects, manage client communications, and ensure timely delivery of all services.",
    requirements: [
      "2+ years of project management experience",
      "Excellent communication and organizational skills",
      "Experience in creative industries preferred",
      "Proficiency in project management tools"
    ]
  }
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Join Our <span className="text-gradient">Creative Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of a passionate team dedicated to creating extraordinary wedding memories. 
            We offer competitive compensation, flexible remote work, and the opportunity to work on beautiful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-heading">{job.title}</CardTitle>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {job.department} • {job.location}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{job.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your portfolio and let us know how you'd like to contribute to our mission.
            </p>
            <Button variant="elegant">Send Your Portfolio</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;
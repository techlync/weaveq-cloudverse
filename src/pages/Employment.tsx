import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Employment = () => {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Developer to help build and scale our cloud management platform.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Join us as a Product Manager to shape the future of cloud infrastructure management.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build and maintain robust cloud infrastructure and deployment pipelines.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Help us revolutionize cloud infrastructure management
            </p>
          </div>

          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow animate-fade-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{position.title}</CardTitle>
                      <CardDescription>
                        {position.department} · {position.location} · {position.type}
                      </CardDescription>
                    </div>
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-semibold">Don't see a perfect match?</h2>
            <p className="text-muted-foreground">
              We're always looking for talented individuals to join our team. Send your resume to{" "}
              <a href="mailto:careers@waveq.com" className="text-primary hover:underline">
                careers@waveq.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employment;
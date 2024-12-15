import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Preview = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    toast({
      title: "Thank you for joining our waitlist!",
      description: "We'll notify you when your trial is ready.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Experience the Future of Cloud Computing
            </h1>
            <p className="text-lg text-gray-300">
              Join our exclusive waitlist to be among the first to try WaveQ's
              revolutionary multi-cloud platform.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trial Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-weaveq-purple" />
                    <p>30-day full platform access</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-weaveq-purple" />
                    <p>Priority support and onboarding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-weaveq-purple" />
                    <p>Early access to new features</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-fade-up delay-200">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Join the Waitlist</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-weaveq-purple hover:bg-weaveq-purple/90">
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
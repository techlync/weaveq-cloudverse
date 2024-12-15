import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-weaveq-purple to-weaveq-blue">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      <div className="container relative mx-auto px-4 py-24 sm:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unify Your Cloud Infrastructure
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            WeaveQ seamlessly integrates multi-cloud services and AI applications,
            helping you build, deploy, and scale with confidence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-white text-weaveq-purple hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button
              variant="link"
              size="lg"
              className="text-white hover:text-gray-200"
            >
              Learn more →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
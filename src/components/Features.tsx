import { Cloud, Cpu, Lock, Zap } from "lucide-react";

const features = [
  {
    name: "Multi-Cloud Management",
    description: "Seamlessly manage resources across AWS, Google Cloud, and Azure.",
    icon: Cloud,
  },
  {
    name: "AI Integration",
    description: "Deploy and scale AI applications with ease using our specialized tools.",
    icon: Cpu,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance.",
    icon: Lock,
  },
  {
    name: "High Performance",
    description: "Optimized infrastructure for maximum speed and reliability.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-weaveq-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built for modern teams and enterprises, WeaveQ provides the tools you need
            to succeed in the cloud.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-weaveq-purple">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
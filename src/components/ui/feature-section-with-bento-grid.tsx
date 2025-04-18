import { User, Zap, Code, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import lp1 from "@/assets/lp1.jpg";

// Define a type for feature items
type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  colSpan?: boolean;
};

function Feature() {
  // Sample feature items
  const features: FeatureItem[] = [
    {
      icon: <Zap className="w-8 h-8 stroke-1" />,
      title: "Premium Digital Assets",
      description: "High-quality resources designed to elevate your creative projects with professional-grade quality.",
      image: lp1.src,
      colSpan: true,
    },
    {
      icon: <Code className="w-8 h-8 stroke-1" />,
      title: "Developer Tools",
      description: "Powerful solutions to streamline your workflow and boost productivity.",
      image: lp1.src,
    },
    {
      icon: <Palette className="w-8 h-8 stroke-1" />,
      title: "Design Resources",
      description: "Creative assets to help you bring your vision to life with stunning visuals.",
      image: lp1.src,
    },
    {
      icon: <User className="w-8 h-8 stroke-1" />,
      title: "Community Support",
      description: "Join our community of creators and get help when you need it most.",
      image: lp1.src,
      colSpan: true,
    },
  ];

  return (
    <div className="w-full py-20 font-manrope">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Features</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                Everything you need
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Discover our comprehensive suite of tools and resources designed for creative professionals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-muted rounded-md p-6 flex justify-between flex-col overflow-hidden relative
                  ${feature.colSpan ? 'lg:col-span-2' : ''} 
                  h-[300px] lg:h-[350px]
                `}
              >
                {feature.image && (
                  <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="relative z-10">
                  {feature.icon}
                </div>
                
                <div className="flex flex-col relative z-10">
                  <h3 className="text-xl tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-xs text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export { Feature };

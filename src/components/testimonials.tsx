
"use client";

import { Container } from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Creative Director",
    company: "DesignCraft",
    avatar: "/testimonials/avatar-1.png",
    content: "The assets from Synt Studios have completely transformed our design workflow. The quality and attention to detail is unmatched in the industry.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Frontend Developer",
    company: "TechInnovate",
    avatar: "/testimonials/avatar-2.png",
    content: "I've used many UI kits before, but Synt Studios' components are by far the most well-documented and easiest to implement. Saved me countless hours of work.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    company: "LaunchPad",
    avatar: "/testimonials/avatar-3.png",
    content: "Our team has been using Synt Studios' resources for the past year, and it has significantly improved our product's visual appeal and user experience.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "VisualEdge",
    avatar: "/testimonials/avatar-4.png",
    content: "The icon pack from Synt Studios is incredibly versatile and beautifully crafted. It's become an essential part of our design system.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30 font-manrope">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what creative professionals have to say about our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <QuoteIcon className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground pl-4 relative">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
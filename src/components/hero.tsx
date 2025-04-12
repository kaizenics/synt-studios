import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Spotlight, GridBackground } from "@/components/spotlight-new";

export function Hero() {
  return (
    <div className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent -z-0" />
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="font-manrope flex flex-col justify-center text-center gap-4">
          <h1 className="text-6xl font-bold text-center">The Ultimate Source for Professional Creative Assets and Software Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto text-center">Discover premium digital assets, tools, and software solutions designed to elevate your creative projects. From templates to plugins, find everything you need in one place.</p>
          <Button variant={"default"} className="py-5 px-4 mx-auto text-base rounded-lg mt-3 z-1 cursor-pointer">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  )
}
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FooterSection } from "@/components/footer";
import { Featured } from "@/components/featured";
import { ProductsSection } from "@/components/products";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <ProductsSection />
      <Testimonials />
      <FooterSection />
    </>
  )
}

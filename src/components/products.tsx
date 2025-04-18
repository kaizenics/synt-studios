"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, CreditCard } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import lp1 from "@/assets/lp1.jpg";
import { useState } from "react";
import { RequiredAuthModal } from "@/components/required-auth-modal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium UI Kit",
    price: "$49.99",
    description: "A comprehensive UI kit with over 300 components, perfect for modern web applications. Includes dark mode and responsive layouts.",
    image: lp1.src,
    badge: { type: 'new', label: 'New' }
  },
  {
    id: 2,
    name: "Icon Pack Pro",
    price: "$29.99",
    description: "Over 2000 customizable vector icons in multiple formats. Perfect for websites, apps, and presentations.",
    image: lp1.src,
    badge: { type: 'hot', label: 'Hot' }
  },
  {
    id: 3,
    name: "Website Template Bundle",
    price: "$79.99",
    description: "10 premium website templates for various industries. Fully responsive and built with modern frameworks.",
    image: lp1.src,
    badge: { type: 'free', label: 'Free' }
  },
  {
    id: 4,
    name: "Photo Editing Presets",
    price: "$19.99",
    description: "50 professional photo editing presets compatible with Lightroom and Photoshop. Perfect for photographers and content creators.",
    image: lp1.src,
  },
  {
    id: 5,
    name: "3D Model Collection",
    price: "$59.99",
    description: "High-quality 3D models for game development, animation, and VR/AR applications. Includes source files and textures.",
    image: lp1.src,
  },
  {
    id: 6,
    name: "Font Family Pack",
    price: "$39.99",
    description: "A collection of 20 premium font families with various weights and styles. Perfect for branding and typography projects.",
    image: lp1.src,
  },
  {
    id: 7,
    name: "Motion Graphics Templates",
    price: "$69.99",
    description: "After Effects and Premiere Pro templates for intros, transitions, and animations. Easy to customize and use in your projects.",
    image: lp1.src,
  },
  {
    id: 8,
    name: "Social Media Kit",
    price: "$24.99",
    description: "Templates and graphics for all major social media platforms. Includes post templates, story templates, and profile assets.",
    image: lp1.src,
  },
];

export function ProductsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // This would typically come from your auth context/provider
  const isLoggedIn = false; // Set to false for testing, would be dynamic in real app

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const handleProductAction = () => {
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
    } else {
      // Handle the actual cart/purchase action
      console.log("Product action performed");
    }
  };

  return (
    <section className="py-16 font-manrope">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium digital assets and tools designed to elevate your creative projects.
          </p>
        </div>

        <div className="lg:h-[900px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <div className="absolute top-2 right-2">
                      <Badge
                        className={
                          product.badge.type === 'new' ? 'bg-blue-500 hover:bg-blue-600' :
                            product.badge.type === 'hot' ? 'bg-red-500 hover:bg-red-600' :
                              product.badge.type === 'free' ? 'bg-green-500 hover:bg-green-600' : ''
                        }
                      >
                        {product.badge.label}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 gap-1"
                    onClick={handleProductAction}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button 
                    className="flex-1 gap-1"
                    onClick={handleProductAction}
                  >
                    <CreditCard className="h-4 w-4" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, current page, last page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        isActive={pageNumber === currentPage}
                        onClick={() => paginate(pageNumber)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }

                // Show ellipsis for gaps
                if (
                  (pageNumber === 2 && currentPage > 3) ||
                  (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                return null;
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Container>
      
      <RequiredAuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
}
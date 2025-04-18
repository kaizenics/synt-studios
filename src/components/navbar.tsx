"use client";

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserIcon, ShoppingCart, Search, X, ChevronDown, LogOut, Settings, User } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  // This would typically come from your auth context/provider
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // For demo purposes - toggle login state
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <header className="font-manrope fixed top-0 z-50 w-full border-b border-border/40 bg-background/30 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-background/10">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-manrope font-bold text-lg">
              Synt Studios
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  Shop <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/shop/new-arrivals">New Arrivals</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/shop/clothing">Clothing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/shop/accessories">Accessories</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/sale" className="hover:text-primary">
                On Sale
              </Link>
            </nav>
          
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[300px] pl-8 pr-8 [&::-webkit-search-cancel-button]:hidden"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 p-1 hover:bg-muted rounded-full"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            
            {isLoggedIn && (
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            )}
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <UserIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-2 focus:bg-transparent cursor-default">
                    <div className="flex flex-col w-full gap-1">
                      <span className="text-xs text-muted-foreground mb-1">Theme</span>
                      <ModeToggle />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
            
          </div>
        </div>
      </Container>
    </header>
  )
}
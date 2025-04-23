"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

interface RequiredAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequiredAuthModal({ isOpen, onClose }: RequiredAuthModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error("GitHub login error:", error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle>Login to Continue</DialogTitle>
          <DialogDescription>
            Sign in to your account to continue.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <Button 
              variant="default"
              className="w-full cursor-pointer" 
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Mail className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
            <Button 
              variant="default" 
              className="w-full cursor-pointer" 
              onClick={handleGithubLogin}
              disabled={isLoading}
            >
              <Github className="mr-2 h-5 w-5" />
              Continue with GitHub
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
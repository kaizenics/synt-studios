"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface RequiredAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequiredAuthModal({ isOpen, onClose }: RequiredAuthModalProps) {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Authentication Required</DialogTitle>
          <DialogDescription>
            You need to be logged in to perform this action.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center py-4">
          <div className="rounded-full bg-muted p-6">
            <LogIn className="h-10 w-10 text-primary" />
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
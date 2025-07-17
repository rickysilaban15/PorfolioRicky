"use client";

import { ReactNode } from "react";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BackgroundMusic />
      {children}
    </>
  );
}

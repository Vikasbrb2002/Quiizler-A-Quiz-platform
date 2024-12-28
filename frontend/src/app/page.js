// pages/index.jsx

"use client"; // Ensure client-side rendering

import React from "react";
import { LampDemo } from "@/components/ui/lamp"; // Import the LampDemo component
import Link from "next/link";

export default function Home() {
  return (
   <div>   

      {/* LampDemo Component */}
      <LampDemo /> {/* This will render the LampDemo with LampContainer */}
      
    </div>
  );
}

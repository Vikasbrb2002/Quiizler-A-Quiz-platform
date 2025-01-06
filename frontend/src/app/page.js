// pages/index.jsx

"use client"; // Ensure client-side rendering

import React from "react";
import { LampDemo } from "@/components/ui/lamp"; // Import the LampDemo component
import StudentComponent from "../components/ui/student";

import  Footer  from "@/components/ui/footer"
import AboutPage from "./about/page";
export default function Home() {
  return (
   <div>
      <LampDemo /> {/* This will render the LampDemo with LampContainer */}
      <StudentComponent />
      <AboutPage/>
      
    </div>
  );
}

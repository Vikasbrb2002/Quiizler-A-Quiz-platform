"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Assuming cn utility is used for merging class names
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

// Main LampDemo Component
export function LampDemo() {
  return (
    <>
      {/* Logo and App Name */}
      <div className="absolute top-4 left-8 flex items-center gap-2 z-50">
        <img src="/quiizler.png" alt="Quiizler Logo" className="w-12 h-12" />
        <span className="text-white text-xl font-semibold">Quiizler Quiz App</span>
      </div>

      {/* Sign Up and Login Buttons */}
      <div className="fixed top-4 right-4 flex gap-4 z-50">
        <Link href="/Signup">
          <button className="bg-black text-white hover:bg-black-100 border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 rounded-lg font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
          </button>
        </Link>
        <Link href="/Login">
          <button className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 rounded-lg font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </Link>
      </div>

      {/* LampContainer */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-40"
        >
          <img
            src="/online test.svg"
            alt="Inspirational Pathway"
            className="w-72 rounded-lg shadow-lg md:w-90"
          />
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-10"
        >
          <TypewriterEffectSmoothDemo />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-10 text-center space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-100 md:text-5xl">
            "Test Your Knowledge"
          </h2>
          <p className="text-lg text-slate-300 md:text-xl pb-6">
            Unlock your potential with our interactive quizzes and challenges.
          </p>
        </motion.div>

        {/* TabsDemo Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full mt-12"
        >
         
        </motion.div>
      </LampContainer>
    </>
  );
}

// LampContainer Component
export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-slate-950 w-full rounded-md z-0 pt-10",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Animated Backgrounds */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-20 right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-20 left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative z-50 flex flex-col items-center px-5 mt-8">
        {children}
      </div>
    </div>
  );
};

// TypewriterEffectSmoothDemo Component
export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "the" },
    { text: "Platform" },
    { text: "Quiizler", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth
        words={words} // Pass each word with its styling directly
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <button className="bg-black text-white hover:bg-black-100 border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 rounded-lg font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Explore now
        </button>
      </div>
    </div>
  );
}


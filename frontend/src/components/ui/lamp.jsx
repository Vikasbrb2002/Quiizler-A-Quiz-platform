"use client"; // Ensure client-side rendering

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Assuming cn utility is used for merging class names
import Link from "next/link";

// Main LampDemo Component
export function LampDemo() {
  return (
    <>
      {/* Sign Up and Login Buttons at the top-right corner of the screen */}
      <div className="fixed top-4 right-4 flex gap-4 z-50">
        {/* Sign Up Button */}
        <Link href="/Signup">
          <button className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 rounded-lg font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
          </button>
        </Link>

        {/* Login Button */}
        <Link href="/Login">
          <button className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 rounded-lg font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </Link>
      </div>

      {/* LampContainer Component */}
      <LampContainer>
        {/* Image Below Heading */}
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-5"
        >
          <img
            src="/online test.svg" // Replace with your image path
            alt="Inspirational Pathway"
            className="w-72 rounded-lg shadow-lg md:w-90"
          />
        </motion.div>

        {/* Text Messages Below the Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-100 md:text-5xl">
            "Test Your Knowledge"
          </h2>
          <p className="text-lg text-slate-300 md:text-xl">
            Unlock your potential with our interactive quizzes and challenges.
          </p>
          <p className="text-base text-slate-400 md:text-lg">
            Whether you're preparing for exams, brushing up on general knowledge, 
            or simply having fun, we have a quiz for you!
          </p>
          <p className="text-sm text-slate-500">
            Explore categories like Science, Math, History, and more!
          </p>
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
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
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

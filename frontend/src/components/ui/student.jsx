"use client";

import React, { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles"; // Assuming the SparklesCore component is correctly imported.

export function SparklesPreview() {
    return (
      <div
        className="h-[20rem] w-full bg-blue flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          className="md:text-5xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
          Here We Go
        </h1>
        <div className="w-[50rem] h-40 relative">
          {/* Gradients */}
          <div
            className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-[90%] blur-sm" />
          <div
            className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[90%]" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[px] w-[60%] blur-sm" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-[60%]" />
  
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF" />
  
          {/* Radial Gradient to prevent sharp edges */}
          <div
            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    );
  }
  

export default function StudentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateOtp = () => {
    alert("OTP has been generated and sent to your phone!");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-2">
      {/* Sparkles Component */}
      <SparklesPreview />

      {/* Image */}
      <img
        src="/online-test.svg" // Replace with the actual image path
        alt="Welcome Student"
        // className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-2 mb-6 rounded-lg object-cover"
      />

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold mb-6">Welcome, Student!</h1>
      <p className="text-lg mb-8">We are excited to have you attempt the quiz.</p>
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Attempt Quiz
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-blue-950 text-white p-8 rounded-xl shadow-lg w-11/12 max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Quiz Registration</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={handleGenerateOtp}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg transition duration-300"
              >
                Generate OTP
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full px-6 py-3 bg-gray-500 hover:bg-gray-600 rounded-lg text-lg transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

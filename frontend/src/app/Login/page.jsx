"use client";

import React from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleGoogleLogin = () => {
    window.location.href = "/accounts/google/login/";
  };

  const handleGithubLogin = () => {
    window.location.href = "/accounts/github/login/";
  };

  const handleSignupRedirect = () => {
    window.location.href = "/Signup"; // Replace with your actual signup page route
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Login
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        Enter your credentials to access your account
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 items-center">
          <SocialButton
            icon={<IconBrandGoogle />}
            label="Continue with Google"
            onClick={handleGoogleLogin}
          />
          <SocialButton
            icon={<IconBrandGithub />}
            label="Continue with GitHub"
            onClick={handleGithubLogin}
          />
        </div>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            type="button"
            onClick={handleSignupRedirect}
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);

const SocialButton = ({ icon, label, onClick }) => (
  <button
    className="relative group/btn flex items-center justify-center px-6 w-72 h-14 rounded-full font-semibold shadow-lg bg-gray-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_2px_1px_var(--neutral-800)] hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
    type="button"
    onClick={onClick}
  >
    {icon}
    <span className="ml-3 text-neutral-700 dark:text-neutral-300 text-base">{label}</span>
  </button>
);

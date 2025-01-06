"use client";

import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBrandTabler, IconSettings, IconUserBolt, IconArrowLeft } from "@tabler/icons-react";

const links = [
  { label: "Dashboard", href: "/dashboard", icon: <IconBrandTabler className="h-5 w-5" /> },
  { label: "Profile", href: "/profile", icon: <IconUserBolt className="h-5 w-5" /> },
  { label: "Settings", href: "/settings", icon: <IconSettings className="h-5 w-5" /> },
  { label: "Logout", href: "/logout", icon: <IconArrowLeft className="h-5 w-5" /> },
];

export default function SidebarLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody>
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <SidebarLink key={index} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-1 p-6 bg-gray-100 dark:bg-neutral-900">{children}</main>
    </div>
  );
}

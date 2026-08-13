// src/components/ui/ConsoleEasterEgg.tsx
"use client";

import { useEffect } from "react";
import { profileData } from "@/data/profile";

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c> whoami",
      "color:#00ff9d; font-family: monospace; font-size: 12px;"
    );
    console.log(
      `%c${profileData.name}%c — ${profileData.role}`,
      "color:#00ff9d; font-family: monospace; font-size: 20px; font-weight: bold;",
      "color:#ffb000; font-family: monospace; font-size: 12px;"
    );
    console.log(
      "%c> curioso pra ver como o código por trás disso funciona?",
      "color:#d7f5e6; font-family: monospace; font-size: 12px;"
    );
    console.log(
      `%c[ github.com/${new URL(profileData.github).pathname.replace(/\//g, "")} ]  [ ${profileData.email} ]`,
      "color:#00ff9d; font-family: monospace; font-size: 12px;"
    );
  }, []);

  return null;
}

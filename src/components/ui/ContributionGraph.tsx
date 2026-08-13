// src/components/ui/ContributionGraph.tsx
"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

function getGithubUsername(url: string) {
  try {
    return new URL(url).pathname.replace(/\//g, "");
  } catch {
    return "";
  }
}

export function ContributionGraph() {
  const [failed, setFailed] = useState(false);
  const username = getGithubUsername(profileData.github);

  if (!username) return null;

  return (
    <TerminalWindow path="~/gabriel/github" title="contributions --last-year">
      {failed ? (
        <p className="font-mono text-sm text-foreground/50">
          [ gráfico indisponível no momento — veja direto em{" "}
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:text-phosphor-amber">
            github.com/{username}
          </a>{" "}
          ]
        </p>
      ) : (
        <div className="overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/00ff9d/${username}`}
            alt={`Gráfico de contribuições de ${username} no GitHub`}
            className="min-w-[640px]"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </TerminalWindow>
  );
}

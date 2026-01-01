"use client";

import { globalStyles } from "@/styles/globals";
import { ReactNode } from "react";

// Aplica os estilos globais imediatamente
globalStyles();

export function StitchesRegistry({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

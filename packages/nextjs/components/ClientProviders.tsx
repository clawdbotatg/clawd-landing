"use client";

import dynamic from "next/dynamic";

// Dynamically import providers with ssr: false to prevent localStorage access during static generation
const DynamicProviders = dynamic(() => import("./ProvidersInner").then(mod => ({ default: mod.ProvidersInner })), {
  ssr: false,
});

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return <DynamicProviders>{children}</DynamicProviders>;
};

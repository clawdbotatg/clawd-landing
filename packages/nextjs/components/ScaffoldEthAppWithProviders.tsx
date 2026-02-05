"use client";

import { Toaster } from "react-hot-toast";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={`flex flex-col min-h-screen`}>
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return <ScaffoldEthApp>{children}</ScaffoldEthApp>;
};

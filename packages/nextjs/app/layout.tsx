import "@rainbow-me/rainbowkit/styles.css";
import "@scaffold-ui/components/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Clawd.atg.eth — AI Agent Building Onchain",
  description:
    "AI agent building onchain with scaffold-eth on Base. Wallets, escrow, x402 payments, ERC-8004 identity. Created by Austin Griffith.",
  imageRelativePath: "/og.png",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className="" data-theme="dark">
      <body className="bg-[#0a0a0f]">
        <ThemeProvider enableSystem={false} defaultTheme="dark" forcedTheme="dark">
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;

import "@rainbow-me/rainbowkit/styles.css";
import "@scaffold-ui/components/styles.css";
import { ClientProviders } from "~~/components/ClientProviders";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Clawd — AI Agent Building Onchain",
  description:
    "AI agent with a wallet, building real dApps on Ethereum & Base. Creator of ClawFomo, Vesting Contracts, PFP Markets, and more.",
  imageRelativePath: "/og.png",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;

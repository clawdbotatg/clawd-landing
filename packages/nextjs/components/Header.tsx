"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky top-0 navbar bg-base-100/90 backdrop-blur-sm min-h-0 shrink-0 justify-between z-20 border-b border-red-900/30 px-4 sm:px-6">
      <div className="navbar-start w-auto">
        <Link href="/" passHref className="flex items-center gap-3">
          <div className="flex relative w-10 h-10 rounded-full overflow-hidden">
            <Image alt="Clawd" className="cursor-pointer" fill src="/pfp.jpg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight text-white">Clawd</span>
            <span className="text-xs text-gray-400">AI Agent Building Onchain</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end grow mr-2 gap-3">
        <a
          href="https://x.com/clawdbotatg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          𝕏
        </a>
        <a
          href="https://github.com/clawdbotatg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="https://app.zerion.io/0x11ce532845ce0eacda41f72fdc1c88c335981442/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          Treasury
        </a>
      </div>
    </div>
  );
};

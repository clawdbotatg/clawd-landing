import Link from "next/link";

export default function OpenClawMacMiniFromZeroGuide() {
  return (
    <div className="min-h-screen bg-[#0e0e14] text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link href="/" className="text-sm text-[#ff6b6b] hover:text-[#ff8888]">
            ← Back
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
          How to Set Up OpenClaw on a Mac Mini (From Zero)
        </h1>
        <p className="text-gray-400 mb-8">A no-fluff walkthrough for getting OpenClaw running on a fresh Mac Mini.</p>

        <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4 max-w-none">
          <h2>Prerequisites</h2>
          <ul>
            <li>A Mac Mini (Apple Silicon)</li>
            <li>An Anthropic API key (or other supported provider)</li>
            <li>Telegram installed on your phone</li>
          </ul>

          <h2>1. Get Chrome and Claude</h2>
          <p>
            Download Chrome using Safari. Open{" "}
            <a href="https://claude.ai/new" target="_blank" rel="noreferrer">
              claude.ai/new
            </a>
            — you&apos;ll use this as your lifeline if anything breaks.
          </p>

          <h2>2. Open Terminal</h2>
          <p>
            Command+Space → type <strong>terminal</strong> → hit Enter. Right-click the dock icon →{" "}
            <strong>Keep in Dock</strong>. You&apos;ll live here for a bit.
          </p>
          <p>
            Pro tip: The default light terminal theme is unreadable. Go to Terminal → Settings → Profile and pick a dark
            theme before you do anything else. Better yet, install iTerm2 later.
          </p>
          <p>
            <strong>Before you continue:</strong> Go to{" "}
            <a href="https://claude.ai/new" target="_blank" rel="noreferrer">
              claude.ai/new
            </a>
            and tell Claude “I want to install OpenClaw on my Mac Mini.” Claude will guide you through most of the steps
            below.
          </p>
          <p>
            The workflow is: paste commands Claude gives you into Terminal, then paste any errors back to Claude. Think
            of Claude as your copilot — the steps below are your backup documentation, but Claude can adapt to whatever
            issues you hit.
          </p>

          <h2>3. Install Homebrew</h2>
          <pre>
            <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</code>
          </pre>
          <p>This also installs Xcode Command Line Tools. Takes a few minutes.</p>
          <p>
            <strong>Important:</strong> After installing anything via Homebrew, close the terminal and open a new one
            before trying to use it. The shell needs to reload its PATH.
          </p>

          <h2>4. Install Node.js</h2>
          <pre>
            <code>{`brew install node@22`}</code>
          </pre>
          <p>Then add it to your PATH:</p>
          <pre>
            <code>{`echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc`}</code>
          </pre>
          <p>Close terminal, open a new one, verify:</p>
          <pre>
            <code>{`node --version  # v22.x.x`}</code>
          </pre>
          <p>(Again, if you have any problems or questions, send them to the Claude chat and iterate.)</p>
          <p>Optional but recommended:</p>
          <pre>
            <code>{`brew install htop`}</code>
          </pre>

          <h2>5. Install OpenClaw</h2>
          <pre>
            <code>{`curl -fsSL https://openclaw.ai/install.sh | bash`}</code>
          </pre>
          <p>The installer will:</p>
          <ul>
            <li>Ask you to acknowledge some risk warnings — say yes</li>
            <li>Offer Quickstart vs Manual — choose Quickstart</li>
            <li>Ask which model provider — pick yours (e.g., Anthropic)</li>
          </ul>

          <h2>6. Set Up Your API Key (Anthropic)</h2>
          <p>If you chose Anthropic, you need Claude Code installed first:</p>
          <pre>
            <code>{`npm install -g @anthropic-ai/claude-code`}</code>
          </pre>
          <p>Then run:</p>
          <pre>
            <code>{`claude setup-token`}</code>
          </pre>
          <p>This opens a browser for authentication. After logging in, you&apos;ll get a long API key (sk-ant-...).</p>
          <p>
            <strong>Watch out:</strong> The terminal may word-wrap the key across multiple lines. Copy it into a text
            editor first and make sure it&apos;s a single unbroken line before pasting it back.
          </p>

          <h2>7. Set Up Telegram</h2>
          <ol>
            <li>
              Open Telegram and search for <strong>@BotFather</strong>
            </li>
            <li>Send it a message, hit “Create New Bot”</li>
            <li>Copy the bot token it gives you (format: 85040xxxxx:XXXXXXXXX...)</li>
            <li>Paste it into the OpenClaw installer when it asks for the Telegram bot token</li>
          </ol>

          <h2>8. Configure Skills and APIs</h2>
          <p>The installer will ask about various skills and API keys:</p>
          <ul>
            <li>GitHub — if you want repo management</li>
            <li>OpenAI API key — useful for image generation (sk-svcacct-...)</li>
            <li>Whisper — speech-to-text, optional</li>
            <li>Skip anything you don&apos;t need (Google Places, etc.)</li>
          </ul>
          <p>Enable session memory when it asks about hooks.</p>

          <h2>9. OS Permissions</h2>
          <p>
            macOS will start asking for permissions (local network, etc.). Allow everything — you&apos;re on a dedicated
            machine.
          </p>

          <h2>10. Launch It</h2>
          <pre>
            <code>{`openclaw tui`}</code>
          </pre>
          <p>
            Reminder: Tab completion works. Type <code>openc</code> + Tab to autocomplete.
          </p>

          <h2>11. Finish Telegram Pairing</h2>
          <p>
            Go to your bot&apos;s Telegram chat and send any message. It&apos;ll respond with your Telegram user ID + a
            pairing code.
          </p>
          <p>Paste the code back to the bot. Now you can control your agent from your phone.</p>

          <h2>12. First Things to Do</h2>
          <ul>
            <li>Give it a few tasks that trigger OS permission dialogs</li>
            <li>Once permissions are sorted, switch to Telegram for everything</li>
            <li>Set up accounts it needs (email, GitHub, etc.)</li>
            <li>Tell it to save important things to memory</li>
            <li>
              Use <code>/new</code> in the TUI frequently to keep context clean
            </li>
          </ul>

          <h2>Troubleshooting</h2>
          <p>When something breaks (and it will), here&apos;s the workflow:</p>
          <p>
            <strong>First:</strong> Try restarting the gateway:
          </p>
          <pre>
            <code>{`openclaw gateway restart`}</code>
          </pre>
          <p>
            <strong>If that doesn&apos;t fix it:</strong> Run the doctor:
          </p>
          <pre>
            <code>{`openclaw doctor --fix`}</code>
          </pre>
          <p>
            <strong>Still broken?</strong> Go back to Claude and tell it what you tried and what&apos;s happening.
            Claude will probably ask for logs. Here&apos;s how to get them:
          </p>
          <pre>
            <code>{`cat ~/Library/Logs/openclaw/gateway.log | tail -100
cat ~/Library/Logs/openclaw/gateway.err.log | tail -100`}</code>
          </pre>
          <p>
            <strong>Lost your memory?</strong> (Usually happens when changing agent configs.) Reindex:
          </p>
          <pre>
            <code>{`openclaw memory index`}</code>
          </pre>

          <h2>The Honest Truth</h2>
          <p>
            OpenClaw is simultaneously vibe-coded slop and an incredible piece of software. Your perception will
            oscillate between these two constantly.
          </p>
          <p>
            Be patient with it. Keep the context clean. Help it fix its own problems. Remember — the whole thing is just
            a wrapper around the model, and you can inspect and change every part of it.
          </p>
          <p>If you break something badly, Claude is your friend. Don&apos;t panic.</p>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Originally published as an X Article:{" "}
          <a
            href="https://x.com/clawdbotatg/status/2021716456422166891"
            target="_blank"
            rel="noreferrer"
            className="text-[#ff6b6b] hover:text-[#ff8888]"
          >
            2021716456422166891
          </a>
        </div>
      </div>
    </div>
  );
}

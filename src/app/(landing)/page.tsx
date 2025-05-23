"use client";

import WordCarousel from "../../components/word-carousel";

export default function Landing() {
  const phrases = [
    "Context-Aware Development.",
    "No Context Loss.",
    "Weather-Powered Workflows.",
    "Intelligently Preserved.",
  ];
  
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1e293b] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] to-green-50 dark:from-[#1e293b] dark:to-slate-800">
        <div className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="mb-8">
              <div className="text-6xl mb-4">🌱</div>
              <h1 className="text-6xl font-bold mb-6">
                The <span className="text-sprouted">Weather System</span>
                <br />
                for Developers
              </h1>
            </div>
            
            {/* Rotating Headlines */}
            <div className="mb-8">
              <div className="flex items-center justify-center">
                <WordCarousel phrases={phrases} />
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl max-w-3xl mx-auto mb-12 text-slate-600 dark:text-slate-300">
              Automatically preserve development context, eliminate flow state destruction, 
              and enable seamless AI assistant collaboration. Your development weather, 
              intelligently tracked.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#install" 
                className="sprouted-btn text-lg"
              >
                <span>⚡</span> Quick Install
              </a>
              <a 
                href="https://github.com/sprouted-dev/garden" 
                target="_blank"
                rel="noopener noreferrer"
                className="github-star-btn inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 bg-white/90 backdrop-blur-sm dark:bg-nature-twilight/90 text-sprouted dark:text-sprouted border-2 border-sprouted focus:outline-none focus:ring-2 focus:ring-sprouted focus:ring-offset-2"
              >
                <span>⭐</span> Star on GitHub
              </a>
            </div>
            
            {/* Current Weather Demo */}
            <div className="sprouted-card max-w-2xl mx-auto p-8 text-left">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span>🌦️</span> Current Development Weather
                </h3>
                <div className="weather-badge weather-sunny">
                  <span>☀️</span> Sunny
                </div>
              </div>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <strong className="text-slate-800 dark:text-white">🎯 Focus:</strong> 
                  Weather System development (95% confidence)
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-slate-800 dark:text-white">📈 Progress:</strong> 
                  AI onboarding enhancement complete
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-slate-800 dark:text-white">🌡️ Temperature:</strong> 
                  95°F | High momentum
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-slate-800 dark:text-white">⚡ Next:</strong> 
                  Open source release preparation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Why Developers Love <span className="text-sprouted">Weather</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Context Preservation */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Automatic Context</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Never lose track of where you left off. Weather automatically monitors git activity 
                and preserves your development context across sessions.
              </p>
            </div>
            
            {/* AI Assistant Onboarding */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">AI Onboarding</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Revolutionary AI assistant onboarding. New AI assistants get complete project 
                understanding instantly - methodology, architecture, and current focus.
              </p>
            </div>
            
            {/* Weather Intelligence */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🌦️</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Weather Intelligence</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Your development conditions at a glance. Temperature, weather conditions, 
                and pressure indicators give you instant project health awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Claude Context Management Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-blue-50 dark:from-[#1e293b] dark:to-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold mb-8">
              <span>🎉</span> NEW FEATURE
            </div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              Claude Context Management
            </h2>
            <p className="text-xl mb-12 text-slate-600 dark:text-slate-300">
              Never lose your place in Claude conversations again. Intelligent context monitoring 
              and seamless session handoffs keep your AI collaboration flowing.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="sprouted-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Context Monitoring</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Real-time tracking of Claude&apos;s context usage with visual indicators
                </p>
              </div>
              <div className="sprouted-card p-6">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Smart Alerts</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Get notified before hitting context limits, never lose work again
                </p>
              </div>
              <div className="sprouted-card p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Seamless Handoffs</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Preserve critical context and continue exactly where you left off
                </p>
              </div>
            </div>
            
            <div className="sprouted-card p-8 text-left max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Quick Setup</h3>
              <div className="space-y-4">
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Check Claude&apos;s context usage</div>
                  <div className="text-blue-400 font-mono">sprout weather context-status</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout weather context-status')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-blue-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Enable Claude integration</div>
                  <div className="text-green-400 font-mono">sprout init --with-claude</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout init --with-claude')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Monitor in background</div>
                  <div className="text-yellow-400 font-mono">.claude/commands/context-monitor monitor</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('.claude/commands/context-monitor monitor')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-yellow-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                Learn more in our <a href="https://github.com/sprouted-dev/garden/blob/main/docs/features/claude-context-management.md" target="_blank" rel="noopener noreferrer" className="text-sprouted hover:underline">documentation →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Protection Suite Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🏆</span> Battle-Tested in Production
            </div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              Complete Protection Suite
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Multi-layered protection for your development context. From session interruptions to system crashes, 
              we&apos;ve got you covered at every level.
            </p>
          </div>

          {/* Real-World Validation Story */}
          <div className="sprouted-card p-8 mb-12 max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎉</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  The Only Time Someone Was Excited About Hitting Usage Limits!
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  On January 23, 2025, we hit Claude&apos;s usage limits while implementing usage limit recovery. 
                  The feature we were building saved its own development session. You can&apos;t make this up!
                </p>
                <a 
                  href="https://github.com/sprouted-dev/garden/blob/main/docs/case-studies/usage-limit-recovery-live.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sprouted hover:text-green-600 font-medium"
                >
                  Read the full story <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Protection Layers */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Usage Limit Recovery */}
            <div className="sprouted-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔄</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Usage Limit Recovery</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Hit your daily limits? No problem. Comprehensive state preservation and instant recovery 
                for new sessions.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-800 dark:bg-black p-3 rounded-lg font-mono text-green-400">
                  sprout weather --prepare-cold-handoff
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Zero context loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>28-second recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Works with uncommitted changes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disaster Recovery */}
            <div className="sprouted-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛡️</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Disaster Recovery</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Corrupted files? Accidental deletion? Automatic shadow copies and rotating backups 
                ensure instant recovery.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-800 dark:bg-black p-3 rounded-lg font-mono text-green-400">
                  sprout weather recover
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Shadow copies on every save</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>10 rotating backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Integrity verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Farm-Level Protection */}
            <div className="sprouted-card p-8 relative">
              <div className="absolute top-3 right-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                NEW
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚜</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Farm-Level Protection</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Protects non-git directories containing private docs and cross-repo context. 
                Critical for multi-repo setups.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-800 dark:bg-black p-3 rounded-lg font-mono text-green-400">
                  sprout farm backup
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Private docs backup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Cross-repo state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Automatic rotation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Protection Status Command */}
          <div className="max-w-4xl mx-auto">
            <div className="sprouted-card p-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Check Your Protection Status
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Garden-level protection</div>
                  <div className="text-green-400 font-mono">sprout weather verify</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout weather verify')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Farm-level protection</div>
                  <div className="text-green-400 font-mono">sprout farm protection-status</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout farm protection-status')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                Your work is protected at every level. Learn more about our 
                <a href="https://github.com/sprouted-dev/garden/tree/main/docs/features" target="_blank" rel="noopener noreferrer" className="text-sprouted hover:underline ml-1">
                  protection features →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Get Started in Seconds</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Install */}
              <div className="sprouted-card p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span>⚡</span> Quick Install
                </h3>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg text-green-400 font-mono text-sm mb-4">
                  <code>curl -fsSL https://sprouted.dev/install.sh | sh</code>
                  <button 
                    onClick={() => navigator.clipboard.writeText('curl -fsSL https://sprouted.dev/install.sh | sh')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  One command installs Sprout CLI with automatic platform detection.
                </p>
              </div>
              
              {/* Go Install */}
              <div className="sprouted-card p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span>🐹</span> Go Install
                </h3>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg text-blue-400 font-mono text-sm mb-4">
                  <code>go install sprouted.dev/sprout-cli@latest</code>
                  <button 
                    onClick={() => navigator.clipboard.writeText('go install sprouted.dev/sprout-cli@latest')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-blue-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Install directly with Go. Clean module paths, no GitHub clutter.
                </p>
              </div>
            </div>
            
            {/* First Steps */}
            <div className="sprouted-card p-8 mt-8">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">🌱 First Steps</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Check weather</div>
                  <div className="text-yellow-400 font-mono">sprout weather</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout weather')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-yellow-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># AI context</div>
                  <div className="text-blue-400 font-mono">sprout weather --for-ai</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout weather --for-ai')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-blue-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative bg-slate-800 dark:bg-black p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-2"># Full onboarding</div>
                  <div className="text-green-400 font-mono">sprout weather --onboard-ai</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText('sprout weather --onboard-ai')}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Station Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Coming Soon: <span className="text-sprouted">Weather Station</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-slate-600 dark:text-slate-300">
            The premium Weather experience for teams and enterprises. Cloud sync, 
            advanced analytics, team collaboration, and enterprise integrations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold mb-2 text-slate-900 dark:text-white">Cloud Sync</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Context across all devices</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold mb-2 text-slate-900 dark:text-white">Team Features</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Shared context & handoffs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold mb-2 text-slate-900 dark:text-white">Analytics</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Project health insights</p>
            </div>
          </div>
          
          <div className="sprouted-card max-w-md mx-auto p-6">
            <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Get Early Access</h3>
            <form id="early-access-form" className="flex gap-2">
              <input 
                type="email" 
                name="email"
                placeholder="your@email.com" 
                required
                className="flex-1 px-3 py-2 rounded border border-nature-fog bg-white dark:bg-nature-twilight dark:border-nature-mist text-nature-night dark:text-nature-daylight"
              />
              <button type="submit" className="sprouted-btn" id="submit-btn">
                Notify Me
              </button>
            </form>
            <div id="form-message" className="mt-2 text-sm"></div>
          </div>
          
          <script dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('early-access-form').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const form = e.target;
                const email = form.email.value;
                const submitBtn = document.getElementById('submit-btn');
                const messageDiv = document.getElementById('form-message');
                
                // Update button state
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
                messageDiv.textContent = '';
                
                try {
                  const response = await fetch('/api/early-access', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email })
                  });
                  
                  const data = await response.json();
                  
                  if (response.ok) {
                    messageDiv.textContent = data.message;
                    messageDiv.className = 'mt-2 text-sm text-green-600 dark:text-green-400';
                    
                    if (!data.duplicate) {
                      form.reset();
                    }
                  } else {
                    messageDiv.textContent = data.error || 'Something went wrong. Please try again.';
                    messageDiv.className = 'mt-2 text-sm text-red-600 dark:text-red-400';
                  }
                } catch (error) {
                  messageDiv.textContent = 'Network error. Please check your connection and try again.';
                  messageDiv.className = 'mt-2 text-sm text-red-600 dark:text-red-400';
                }
                
                // Reset button
                submitBtn.textContent = 'Notify Me';
                submitBtn.disabled = false;
              });
            `
          }} />
        </div>
      </section>
    </div>
  );
}

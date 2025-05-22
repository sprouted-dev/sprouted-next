"use client";

import WordCarousel from "../../components/word-carousel";

export default function Landing() {
  const phrases = [
    "Context-Aware Development.",
    "No Context Loss.",
    "Weather-Powered Workflows.",
    "Intelligently Preserved.",
    "Context-Aware Development.",
  ];
  
  return (
    <div className="min-h-screen bg-nature-daylight dark:bg-nature-night text-nature-night dark:text-nature-daylight">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nature-daylight to-green-50 dark:from-nature-night dark:to-slate-800">
        <div className="container mx-auto px-6 py-20">
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
            <p className="text-xl max-w-3xl mx-auto mb-12 text-nature-mist dark:text-nature-fog">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 bg-white/90 backdrop-blur-sm dark:bg-nature-twilight/90 text-sprouted dark:text-sprouted border-2 border-sprouted hover:bg-sprouted hover:text-white dark:hover:bg-sprouted dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-sprouted focus:ring-offset-2"
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
              <div className="space-y-3 text-nature-mist dark:text-nature-fog">
                <div className="flex items-center gap-2">
                  <strong className="text-nature-night dark:text-nature-daylight">🎯 Focus:</strong> 
                  Weather System development (95% confidence)
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-nature-night dark:text-nature-daylight">📈 Progress:</strong> 
                  AI onboarding enhancement complete
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-nature-night dark:text-nature-daylight">🌡️ Temperature:</strong> 
                  95°F | High momentum
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-nature-night dark:text-nature-daylight">⚡ Next:</strong> 
                  Open source release preparation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Developers Love <span className="text-sprouted">Weather</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Context Preservation */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-xl font-bold mb-4">Automatic Context</h3>
              <p className="text-nature-mist dark:text-nature-fog">
                Never lose track of where you left off. Weather automatically monitors git activity 
                and preserves your development context across sessions.
              </p>
            </div>
            
            {/* AI Assistant Onboarding */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-bold mb-4">AI Onboarding</h3>
              <p className="text-nature-mist dark:text-nature-fog">
                Revolutionary AI assistant onboarding. New AI assistants get complete project 
                understanding instantly - methodology, architecture, and current focus.
              </p>
            </div>
            
            {/* Weather Intelligence */}
            <div className="sprouted-card p-8 text-center">
              <div className="text-5xl mb-6">🌦️</div>
              <h3 className="text-xl font-bold mb-4">Weather Intelligence</h3>
              <p className="text-nature-mist dark:text-nature-fog">
                Your development conditions at a glance. Temperature, weather conditions, 
                and pressure indicators give you instant project health awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 bg-gradient-to-br from-nature-daylight to-green-50 dark:from-nature-night dark:to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get Started in Seconds</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Install */}
              <div className="sprouted-card p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>⚡</span> Quick Install
                </h3>
                <div className="relative bg-nature-night dark:bg-black p-4 rounded-lg text-green-400 font-mono text-sm mb-4">
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
                <p className="text-nature-mist dark:text-nature-fog">
                  One command installs Sprout CLI with automatic platform detection.
                </p>
              </div>
              
              {/* Go Install */}
              <div className="sprouted-card p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🐹</span> Go Install
                </h3>
                <div className="relative bg-nature-night dark:bg-black p-4 rounded-lg text-blue-400 font-mono text-sm mb-4">
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
                <p className="text-nature-mist dark:text-nature-fog">
                  Install directly with Go. Clean module paths, no GitHub clutter.
                </p>
              </div>
            </div>
            
            {/* First Steps */}
            <div className="sprouted-card p-8 mt-8">
              <h3 className="text-xl font-bold mb-6">🌱 First Steps</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative bg-nature-night dark:bg-black p-4 rounded-lg">
                  <div className="text-nature-mist text-sm mb-2"># Check weather</div>
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
                <div className="relative bg-nature-night dark:bg-black p-4 rounded-lg">
                  <div className="text-nature-mist text-sm mb-2"># AI context</div>
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
                <div className="relative bg-nature-night dark:bg-black p-4 rounded-lg">
                  <div className="text-nature-mist text-sm mb-2"># Full onboarding</div>
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
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Coming Soon: <span className="text-sprouted">Weather Station</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-nature-mist dark:text-nature-fog">
            The premium Weather experience for teams and enterprises. Cloud sync, 
            advanced analytics, team collaboration, and enterprise integrations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold mb-2">Cloud Sync</h3>
              <p className="text-sm text-nature-mist dark:text-nature-fog">Context across all devices</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold mb-2">Team Features</h3>
              <p className="text-sm text-nature-mist dark:text-nature-fog">Shared context & handoffs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Analytics</h3>
              <p className="text-sm text-nature-mist dark:text-nature-fog">Project health insights</p>
            </div>
          </div>
          
          <div className="sprouted-card max-w-md mx-auto p-6">
            <h3 className="font-bold mb-4">Get Early Access</h3>
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

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sprouted Seed Case Study | Storm-Driven Development',
  description: 'How one developer achieved 168x velocity in 4 days using Storm-Driven Development, creating an entire methodology during a philosophy tornado.',
}

export default function SproutedSeedCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌱</div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Sprouted Seed
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
              How Storm-Driven Development was discovered while being used
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600">168x</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Enterprise Velocity</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">4 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Total Timeline</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600">147</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Features Shipped</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Methodologies Born</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/case-studies"
            className="text-green-600 hover:text-green-700 flex items-center"
          >
            ← Back to Case Studies
          </Link>
        </div>

        {/* The Story */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Origin Story</h2>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
            <h3 className="text-green-800 dark:text-green-300 mt-0">The Developer</h3>
            <p className="mb-0">
              Someone who spent years feeling like &ldquo;bamboo in an oak tree interview&rdquo; - 
              broad pattern recognition over memorization, systems thinking over syntax recall. 
              Finally found their moment with AI partnership.
            </p>
          </div>

          <h3>The Trigger</h3>
          <p>
            A laptop crash. Lost context. Hours spent reconstructing development state. 
            The frustration led to a simple question: &ldquo;What if development had weather?&rdquo;
          </p>

          <h3>The Journey: Day by Day</h3>
          
          <div className="space-y-8 my-12">
            <div className="border-l-4 border-green-400 pl-6">
              <h4 className="text-green-600 dark:text-green-400">Day 1-2: Underground Roots 🌱</h4>
              <p>
                Building the Weather System core, implementing context preservation, 
                adding git monitoring. No visible philosophy yet - just deep foundational work.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Key moment:</strong> &ldquo;This could help everyone, not just me&rdquo;
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-blue-600 dark:text-blue-400">Day 3: First Emergence 🌿</h4>
              <p>
                Open sourced with MIT license, added community docs, implemented protection suite. 
                Something bigger emerging from the technical foundation.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Discovery:</strong> AI temporal hallucination - the perfect case study!
              </p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-6">
              <h4 className="text-orange-600 dark:text-orange-400">Day 4: The Philosophy Tornado 🌪️</h4>
              <p>
                <strong>6:00 AM:</strong> Shower thought - &ldquo;Move fast and break things is OK if you&apos;re methodical about it&rdquo;<br/>
                <strong>10:00 AM:</strong> Tornado branch created<br/>
                <strong>2:00 PM:</strong> Storm-Driven Development emerges<br/>
                <strong>6:00 PM:</strong> First WEMA activation complete
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Result:</strong> Entire methodology documented while being discovered
              </p>
            </div>
          </div>

          <h2>The Methodology That Emerged</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-blue-800 dark:text-blue-300 mt-0 mb-3">Storm Chaser</h3>
              <p className="text-sm">
                Friendly observer that learns natural development patterns, 
                celebrates velocity, and prepares amazing retrospectives.
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">🌪️</div>
              <h3 className="text-orange-800 dark:text-orange-300 mt-0 mb-3">Storm-Driven Development</h3>
              <p className="text-sm">
                Channel creative chaos safely in tornado branches. 
                Complete freedom with systematic recovery.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <div className="text-3xl mb-3">🚑</div>
              <h3 className="text-green-800 dark:text-green-300 mt-0 mb-3">WEMA Recovery</h3>
              <p className="text-sm">
                Weather Emergency Management Agency - systematic tornado recovery 
                that extracts value while protecting sensitive content.
              </p>
            </div>
          </div>

          <h2>The Numbers</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg my-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">Velocity Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Peak velocity:</span>
                    <span className="font-bold">12 features/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sustained rate:</span>
                    <span className="font-bold">6.8 features/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>vs Enterprise baseline:</span>
                    <span className="font-bold text-green-600">168x faster</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">Quality Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>WEMA recovery rate:</span>
                    <span className="font-bold">95% value preserved</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sensitive content leaks:</span>
                    <span className="font-bold text-green-600">0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tornado debris:</span>
                    <span className="font-bold text-green-600">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Key Innovations</h2>
          
          <h3>1. Weather/Seed Architecture</h3>
          <p>
            The breakthrough realization: separate universal infrastructure (Weather System) 
            from specific methodologies (Seeds). Any team can use Weather with their own approach.
          </p>

          <h3>2. Tornado Branches</h3>
          <p>
            Safe spaces for creative chaos. Mix anything - business logic, philosophy, experiments. 
            WEMA recovery extracts value systematically while protecting sensitive content.
          </p>

          <h3>3. Partner Model</h3>
          <p>
            Human insight + AI capability = 168x velocity. Not command/execute, but true collaboration. 
            AI partners contribute ideas, not just implementation.
          </p>

          <h3>4. Natural Patterns</h3>
          <p>
            The bamboo growth pattern: years of preparation (learning, pattern recognition) 
            suddenly expressing in explosive creative periods. Work with nature, not against it.
          </p>

          <h2>The Perfect Irony</h2>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
            <h3 className="text-purple-800 dark:text-purple-300 mt-0">Meta-Validation</h3>
            <ul className="space-y-2 mb-0">
              <li>Built context preservation while AI lost context</li>
              <li>Documented temporal issues with temporal issues</li>
              <li>Created Storm-Driven Development IN a storm</li>
              <li>First WEMA activation was ON the tornado that created WEMA</li>
              <li>Eating our own dog food while cooking it</li>
            </ul>
          </div>

          <h2>Lessons Learned</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div>
              <h3>For Developers</h3>
              <ul>
                <li>Trust your shower thoughts</li>
                <li>Tornado branches enable fearless experimentation</li>
                <li>Document during the storm, not after</li>
                <li>Your natural patterns are your methodology</li>
              </ul>
            </div>
            
            <div>
              <h3>For Teams</h3>
              <ul>
                <li>Methodology emerges from practice, not planning</li>
                <li>Recovery systems unlock creative freedom</li>
                <li>Partner model multiplies capability</li>
                <li>Velocity without burnout is possible</li>
              </ul>
            </div>
          </div>

          <h2>Try It Yourself</h2>
          
          <p>
            The Sprouted Seed is now open source and ready for your team to adapt. 
            Remember: don&apos;t copy our exact approach - discover your own patterns and create your own Seed.
          </p>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
            <h3 className="text-green-800 dark:text-green-300 mt-0">Getting Started</h3>
            <ol className="mb-0">
              <li>Install the Weather System (universal infrastructure)</li>
              <li>Study the Sprouted Seed as a reference implementation</li>
              <li>Create your own Seed based on how your team naturally works</li>
              <li>Have your first tornado and document what you discover</li>
            </ol>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Storm?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Every great methodology begins with a single storm. What will you discover?
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold"
            >
              Get Started
            </Link>
            <Link 
              href="/case-studies"
              className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-semibold"
            >
              More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
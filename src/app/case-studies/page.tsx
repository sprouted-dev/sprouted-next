import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Sprouted - Real Storm-Driven Development Stories',
  description: 'See how teams use Storm-Driven Development to achieve 168x velocity while maintaining quality and creativity.',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Storm-Driven Development
            <span className="text-green-600"> Case Studies</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories of creative chaos channeled into systematic value. 
            See how teams achieve extraordinary velocity while maintaining quality.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🌱</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                The Sprouted Seed
              </h2>
              <p className="text-green-600 dark:text-green-400 font-semibold">
                Featured Case Study • 4 Days • 168x Velocity
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                The Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Context loss after laptop crash led to hours of reconstruction. 
                What if development could preserve context like weather systems track atmospheric conditions?
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                The Storm
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A 4-hour philosophy tornado on May 24, 2025 that created an entire development methodology. 
                Storm-Driven Development literally documented itself while being discovered.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                The Results
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Velocity</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">168x Enterprise Speed</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Features Shipped</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">147 in 4 Days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Methodologies Born</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3 Complete Systems</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Recovery Time</span>
                  <span className="text-orange-600 dark:text-orange-400 font-bold">30 Minutes (WEMA)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                🌪️ Storm-Driven Development
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                🚑 WEMA Protocol
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                🔍 Storm Chaser
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                🎋 Bamboo Philosophy
              </span>
            </div>
            
            <Link 
              href="/case-studies/sprouted-seed"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold"
            >
              Read Full Case Study →
            </Link>
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            The Storm-Driven Development Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Storm Chaser
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Observes natural development patterns, celebrates velocity, 
                and prepares amazing retrospectives without surveillance
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🌪️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Storm-Driven Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Channel creative chaos safely in tornado branches. 
                Move fast and break things - methodically
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🚑</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                WEMA Recovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Systematic tornado recovery extracting maximum value 
                while protecting sensitive content
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            More Case Studies Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're working with teams to document their Storm-Driven Development journeys. 
            Each storm teaches us something new about channeling creative chaos.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Enterprise Storm</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Large team coordination</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Startup Tornado</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">MVP in weekend storm</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Research Seed</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Academic methodology</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Your Story</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Share your storm</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold text-lg"
          >
            Start Your Storm-Driven Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
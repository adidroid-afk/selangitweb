import { useState } from 'react'

// Navigation Component
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const categories = ['AI Data Center', 'AI Projects', 'Agentic AI', 'LLM Coder', 'Self-Driving']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Selangit.Com
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {cat}
              </a>
            ))}
            <a href="#newsletter" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-3">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-cyan-400 text-sm font-medium">AI Ecosystem News Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Your Gateway to the</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI Universe
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Stay ahead with real-time intelligence on AI Data Centers, Agentic Systems, 
          LLM Applications, Self-Driving Technology, and groundbreaking AI Projects 
          shaping tomorrow's world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#ai-data-center" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
            Explore News
          </a>
          <a href="#newsletter" className="px-8 py-4 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all">
            Get Daily Briefing
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'AI Data Centers', value: '2,400+', icon: '🏢' },
            { label: 'AI Projects Tracked', value: '15K+', icon: '🚀' },
            { label: 'Agentic Systems', value: '800+', icon: '🤖' },
            { label: 'Daily Updates', value: '500+', icon: '📡' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Category Card Component
function CategoryCard({ icon, title, description, articles, color, id }: {
  icon: string
  title: string
  description: string
  articles: { title: string; time: string; tag: string }[]
  color: string
  id: string
}) {
  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-4xl">{icon}</span>
          <div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className="text-gray-400 mt-1">{description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer"
            >
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${color}`}>
                {article.tag}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-3">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Newsletter Section
function Newsletter() {
  return (
    <section id="newsletter" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get curated AI ecosystem news delivered to your inbox. From data center breakthroughs 
              to autonomous driving milestones — never miss a development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-gray-950 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4">Join 50,000+ AI professionals. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Selangit.Com
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Your comprehensive source for AI ecosystem news, covering data centers, agentic systems, LLM applications, and autonomous vehicles.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#ai-data-center" className="hover:text-cyan-400 transition-colors">AI Data Center</a></li>
              <li><a href="#ai-projects" className="hover:text-cyan-400 transition-colors">AI Projects</a></li>
              <li><a href="#agentic-ai" className="hover:text-cyan-400 transition-colors">Agentic AI</a></li>
              <li><a href="#llm-coder" className="hover:text-cyan-400 transition-colors">LLM Coder</a></li>
              <li><a href="#self-driving" className="hover:text-cyan-400 transition-colors">Self-Driving</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">© 2026 Selangit.Com. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  const categories = [
    {
      id: 'ai-data-center',
      icon: '🏢',
      title: 'AI Data Center',
      description: 'Infrastructure powering the AI revolution — from GPU clusters to liquid cooling innovations.',
      color: 'bg-cyan-500/10 text-cyan-400',
      articles: [
        { title: 'NVIDIA Unveils Next-Gen GB300 NVL72 Rack for AI Data Centers', time: '2 hours ago', tag: 'Infrastructure' },
        { title: 'Microsoft Invests $10B in New AI Data Center Across Southeast Asia', time: '4 hours ago', tag: 'Investment' },
        { title: 'Liquid Cooling Becomes Standard in Hyperscale AI Facilities', time: '6 hours ago', tag: 'Technology' },
        { title: 'TSMC Reports Record Chip Demand Driven by AI Data Center Build-Out', time: '8 hours ago', tag: 'Supply Chain' },
        { title: 'Google Deploys Custom TPU v6 Pods in New Iowa Data Center', time: '12 hours ago', tag: 'Deployment' },
        { title: 'Energy Consumption of AI Data Centers: New Efficiency Breakthroughs', time: '1 day ago', tag: 'Sustainability' },
      ]
    },
    {
      id: 'ai-projects',
      icon: '🚀',
      title: 'AI Projects',
      description: 'Groundbreaking AI initiatives transforming industries from healthcare to climate science.',
      color: 'bg-purple-500/10 text-purple-400',
      articles: [
        { title: 'DeepMind Launches Project Astra: Universal AI Assistant for Real World', time: '1 hour ago', tag: 'Research' },
        { title: 'OpenAI Announces GPT-5 with Multimodal Reasoning Capabilities', time: '3 hours ago', tag: 'Launch' },
        { title: 'EU AI Act Compliance: Major Projects Reshaping Development Pipelines', time: '5 hours ago', tag: 'Regulation' },
        { title: 'Anthropic Claude 4 Achieves PhD-Level Scientific Reasoning', time: '7 hours ago', tag: 'Benchmark' },
        { title: 'Meta Open-Sources LLaMA 4 with 400B Parameters', time: '10 hours ago', tag: 'Open Source' },
        { title: 'AI-Powered Drug Discovery Project Reaches Phase 3 Trials', time: '1 day ago', tag: 'Healthcare' },
      ]
    },
    {
      id: 'agentic-ai',
      icon: '🤖',
      title: 'Agentic AI',
      description: 'Autonomous AI agents that plan, reason, and execute complex tasks independently.',
      color: 'bg-blue-500/10 text-blue-400',
      articles: [
        { title: 'AutoGPT v2.0: Fully Autonomous Agent Now Handles Enterprise Workflows', time: '30 min ago', tag: 'Release' },
        { title: 'Microsoft Copilot Agents: Building Multi-Agent Orchestration Systems', time: '2 hours ago', tag: 'Enterprise' },
        { title: 'LangChain Launches Agent Protocol Standard for Interoperability', time: '4 hours ago', tag: 'Standards' },
        { title: 'AI Agents Now Write, Test, and Deploy Code Without Human Oversight', time: '6 hours ago', tag: 'Automation' },
        { title: 'CrewAI Framework Enables Complex Multi-Agent Collaboration Patterns', time: '9 hours ago', tag: 'Framework' },
        { title: 'Safety Concerns Rise as Agentic AI Systems Gain More Autonomy', time: '1 day ago', tag: 'Safety' },
      ]
    },
    {
      id: 'llm-coder',
      icon: '💻',
      title: 'LLM Application Coder',
      description: 'AI coding assistants and LLM-powered development tools revolutionizing software engineering.',
      color: 'bg-green-500/10 text-green-400',
      articles: [
        { title: 'GitHub Copilot X: Full-Stack Development with Natural Language', time: '45 min ago', tag: 'DevTools' },
        { title: 'Cursor IDE Reaches $1B Valuation as AI-First Development Goes Mainstream', time: '3 hours ago', tag: 'Startup' },
        { title: 'Claude Code: Anthropic\'s Agentic Coding Tool Handles Entire Codebases', time: '5 hours ago', tag: 'Product' },
        { title: 'Devin AI: First Fully Autonomous Software Engineering Agent', time: '7 hours ago', tag: 'Autonomous' },
        { title: 'LLM Code Generation Benchmarks: GPT-5 vs Claude 4 vs Gemini Ultra', time: '10 hours ago', tag: 'Comparison' },
        { title: 'How AI Coding Assistants Are Reshaping Developer Productivity by 40%', time: '1 day ago', tag: 'Research' },
      ]
    },
    {
      id: 'self-driving',
      icon: '🚗',
      title: 'Self-Driving',
      description: 'Autonomous vehicles and the AI systems navigating the road to full self-driving.',
      color: 'bg-orange-500/10 text-orange-400',
      articles: [
        { title: 'Waymo Expands Fully Driverless Service to 10 New US Cities', time: '1 hour ago', tag: 'Expansion' },
        { title: 'Tesla FSD v13 Achieves Level 4 Autonomy on Highways', time: '3 hours ago', tag: 'Milestone' },
        { title: 'Baidu Apollo: 100 Million Autonomous Miles Without Incident', time: '5 hours ago', tag: 'Safety' },
        { title: 'NVIDIA DRIVE Thor: Next-Gen Self-Driving Computer Ships to OEMs', time: '8 hours ago', tag: 'Hardware' },
        { title: 'EU Approves Level 3 Autonomous Driving for All Member States', time: '12 hours ago', tag: 'Regulation' },
        { title: 'Autonomous Trucking: Aurora Begins Commercial Freight Operations', time: '1 day ago', tag: 'Logistics' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      
      {categories.map((cat) => (
        <CategoryCard key={cat.id} {...cat} />
      ))}
      
      <Newsletter />
      <Footer />
    </div>
  )
}

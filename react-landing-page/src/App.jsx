import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: 'Blazing Fast Performance',
      description: 'Built on next-gen architecture optimized for lightning response times and zero bloat.'
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, strict compliance standards, and automated vulnerability scanning.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: 'Real-time Analytics',
      description: 'Gain immediate actionable insights into system operations and user conversion dynamics.'
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: 'Global Edge Network',
      description: 'Deploy workloads effortlessly to dozens of edge locations around the globe.'
    }
  ];

  const metrics = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '10M+', label: 'Daily Requests' },
    { value: '< 20ms', label: 'Global Latency' },
    { value: '24/7', label: 'Support Coverage' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 text-white p-2 rounded-xl">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                SaaSify
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</a>
              <a href="#stats" className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Metrics</a>
              <a href="#newsletter" className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">Newsletter</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-3">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Features</a>
            <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Metrics</a>
            <a href="#newsletter" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Newsletter</a>
            <button className="w-full py-2.5 text-center font-medium text-white bg-indigo-600 rounded-lg shadow-sm">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 mb-6 border border-indigo-200 dark:border-indigo-800">
            ✨ Introducing Version 2.0
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Build modern web apps <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
              faster than ever before.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal">
            A production-ready React starter kit loaded with modular layouts, responsive UI patterns, dark mode support, and smooth interactivity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 transition flex items-center justify-center gap-2"
            >
              Explore Features <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 font-medium rounded-xl transition flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" /> View Source
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">Engineered for peak output</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Everything you need to launch scalable web applications out of the box.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-indigo-500/50 transition duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="stats" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {metrics.map((stat, idx) => (
              <div key={idx} className="p-6">
                <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Stay in the loop</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Subscribe to receive development updates, tips, and feature announcements.</p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow transition"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-sm flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" /> Thank you for subscribing!
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SaaSify Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-600"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-600"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-600"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

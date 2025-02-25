import React from 'react';
import { Cpu, Cloud, DollarSign, Zap } from 'lucide-react';

interface LandingPageProps {
  onAuthClick: () => void;
}

export function LandingPage({ onAuthClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-transparent z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-2xl font-bold text-white">DecentralAI</span>
            </div>
            <button
              onClick={onAuthClick}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
            >
              Login / Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Revolutionizing AI Training</span>
              <span className="block text-indigo-400">Through Decentralization</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join the future of distributed computing. Leverage the power of decentralized GPUs
              for cost-effective, efficient AI model training.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  onClick={onAuthClick}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose DecentralAI?
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Experience the next generation of distributed computing
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Cpu className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Distributed Power</h3>
                    <p className="mt-5 text-base text-gray-400">
                      Harness the collective computing power of a global network of GPUs
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <DollarSign className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Cost Effective</h3>
                    <p className="mt-5 text-base text-gray-400">
                      Significantly reduce your AI training costs through our decentralized network
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Lightning Fast</h3>
                    <p className="mt-5 text-base text-gray-400">
                      Experience rapid training times with our optimized network architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
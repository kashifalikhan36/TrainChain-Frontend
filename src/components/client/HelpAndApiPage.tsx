import React, { useState } from 'react';
import { ArrowLeft, Search, Code, MessageCircle, Book, ExternalLink } from 'lucide-react';

interface HelpAndApiPageProps {
  onNavigate: (page: 'dashboard' | 'download' | 'help' | 'docs') => void;
}

export function HelpAndApiPage({ onNavigate }: HelpAndApiPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 pb-32">
        <nav className="border-b border-indigo-500 border-opacity-25 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center">
              <button
                onClick={() => onNavigate('dashboard')}
                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Dashboard
              </button>
            </div>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow">
            <div className="px-5 py-6 sm:px-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900">Help Center & API Documentation</h1>
              <div className="mt-4 max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Code className="h-8 w-8 text-indigo-600 mb-4" />
                <h2 className="text-xl font-semibold mb-4">API Reference</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      REST API Documentation
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      WebSocket API Guide
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      Authentication
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MessageCircle className="h-8 w-8 text-indigo-600 mb-4" />
                <h2 className="text-xl font-semibold mb-4">Support</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">Contact Support Team</a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">Report an Issue</a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Book className="h-8 w-8 text-indigo-600 mb-4" />
                <h2 className="text-xl font-semibold mb-4">Guides</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">Getting Started</a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">Best Practices</a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">Troubleshooting</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 py-8 bg-gray-50 mt-6 rounded-lg mx-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Getting Started with TrainChain</h4>
                  <p className="text-gray-600 text-sm">Learn how to set up your environment and start contributing...</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Understanding Earnings</h4>
                  <p className="text-gray-600 text-sm">Detailed guide on how earnings are calculated and distributed...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
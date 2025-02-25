import React, { useState } from 'react';
import { ArrowLeft, Book, Code, FileText, Terminal } from 'lucide-react';

interface DocumentationPageProps {
  onNavigate: (page: 'dashboard' | 'download' | 'help' | 'docs') => void;
}

export function DocumentationPage({ onNavigate }: DocumentationPageProps) {
  const [activeSection, setActiveSection] = useState('getting-started');

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
            <div className="grid grid-cols-12 min-h-[800px]">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-gray-200 p-6">
                <div className="space-y-4">
                  <button
                    onClick={() => setActiveSection('getting-started')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeSection === 'getting-started' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Book size={18} className="mr-2" />
                    Getting Started
                  </button>
                  <button
                    onClick={() => setActiveSection('api-reference')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeSection === 'api-reference' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Code size={18} className="mr-2" />
                    API Reference
                  </button>
                  <button
                    onClick={() => setActiveSection('cli-commands')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeSection === 'cli-commands' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Terminal size={18} className="mr-2" />
                    CLI Commands
                  </button>
                  <button
                    onClick={() => setActiveSection('examples')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeSection === 'examples' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <FileText size={18} className="mr-2" />
                    Examples
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-9 p-8">
                {activeSection === 'getting-started' && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">Getting Started with TrainChain</h1>
                    <p className="text-gray-600">
                      Welcome to TrainChain! This guide will help you get started with our platform
                      and show you how to make the most of your computing resources.
                    </p>
                    
                    <div className="prose max-w-none">
                      <h2 className="text-xl font-semibold mt-8 mb-4">Quick Start Guide</h2>
                      <ol className="list-decimal list-inside space-y-4">
                        <li className="text-gray-800">Download and install the TrainChain client</li>
                        <li className="text-gray-800">Configure your system settings</li>
                        <li className="text-gray-800">Connect your GPU resources</li>
                        <li className="text-gray-800">Start earning rewards</li>
                      </ol>

                      <h2 className="text-xl font-semibold mt-8 mb-4">System Requirements</h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-800">Windows 10/11 or Linux</li>
                        <li className="text-gray-800">NVIDIA GPU with CUDA support</li>
                        <li className="text-gray-800">8GB RAM minimum</li>
                        <li className="text-gray-800">Stable internet connection</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mt-6">
                      <h3 className="text-lg font-medium mb-2">Pro Tips</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Configure power settings for optimal performance</li>
                        <li>Keep your GPU drivers updated</li>
                        <li>Monitor your earnings regularly</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === 'api-reference' && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">API Reference</h1>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <pre className="overflow-x-auto">
                        <code>{`
// Example API Usage
const client = new TrainChain({
  apiKey: 'your-api-key',
  endpoint: 'https://api.decentral.ai'
});

// Start a training session
await client.startTraining({
  modelId: 'gpt-3',
  gpuCount: 2
});`}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Add other section content similarly */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import React from 'react';
import { ArrowLeft, Download, Monitor, Shield, Zap } from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (page: 'dashboard' | 'download' | 'help' | 'docs') => void;
}

export function DownloadPage({ onNavigate }: DownloadPageProps) {
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
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Download TrainChain Client</h1>
              <p className="text-lg text-gray-600">Start earning by contributing your computing power to AI training</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Monitor className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">System Requirements</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Windows 10/11 64-bit</li>
                  <li>8GB RAM minimum</li>
                  <li>NVIDIA GPU (GTX 1060+)</li>
                  <li>10GB free space</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <Shield className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security Features</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>Secure sandboxing</li>
                  <li>Resource limiting</li>
                  <li>Auto-updates</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <Zap className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Low CPU usage</li>
                  <li>Optimized GPU utilization</li>
                  <li>Bandwidth control</li>
                  <li>Smart power management</li>
                </ul>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  <Download size={24} className="mr-2" />
                  Download for Windows (64-bit)
                </button>
                <button className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                  <Download size={24} className="mr-2" />
                  Download for Linux (x64)
                </button>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                By downloading, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
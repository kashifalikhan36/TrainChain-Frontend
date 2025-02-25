import React, { useState } from 'react';
import { Monitor, Activity, DollarSign, Cpu, Settings, CreditCard, Wallet, History, Download, HelpCircle, BookOpen } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { ProfileForm } from './ProfileForm';
import type { TrainingSession } from '../types';

interface ClientDashboardProps {
  onNavigate: (page: 'dashboard' | 'download' | 'help' | 'docs') => void;
}

const mockClientData = {
  totalPCs: 5,
  activePCs: 3,
  activeTrainingSessions: 2,
  totalEarnings: 1250.50,
  paymentHistory: [
    { id: '1', amount: 450.75, status: 'completed', date: '2024-03-08T10:30:00Z' },
    { id: '2', amount: 325.25, status: 'pending', date: '2024-03-10T15:45:00Z' }
  ],
  trainingSessions: [
    {
      id: '1',
      modelName: 'GPT-3',
      status: 'running',
      progress: 75,
      startTime: '2024-03-10T14:30:00Z',
      earnings: 45.20,
      gpuUtilization: 85,
      memoryUsage: 62
    },
    {
      id: '2',
      modelName: 'BERT',
      status: 'running',
      progress: 30,
      startTime: '2024-03-10T15:15:00Z',
      earnings: 12.80,
      gpuUtilization: 78,
      memoryUsage: 55
    }
  ] as TrainingSession[]
};

export function ClientDashboard({ onNavigate }: ClientDashboardProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [airtmId, setAirtmId] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleProfileSubmit = (data: any) => {
    console.log('Profile data:', data);
    setShowProfile(false);
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Withdrawal requested:', { airtmId, amount: withdrawAmount });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 pb-32">
        <nav className="border-b border-indigo-500 border-opacity-25 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="text-white text-xl font-bold">DecentralAI Client</div>
                <div className="hidden md:flex space-x-4">
                  <button
                    onClick={() => onNavigate('download')}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <Download size={18} className="mr-2" />
                    Download Client App
                  </button>
                  <button
                    onClick={() => onNavigate('help')}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <HelpCircle size={18} className="mr-2" />
                    Help & API
                  </button>
                  <button
                    onClick={() => onNavigate('docs')}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <BookOpen size={18} className="mr-2" />
                    Documentation
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setShowProfile(true);
                    setShowPayments(false);
                  }}
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Settings size={20} className="inline mr-2" />
                  Profile
                </button>
                <button
                  onClick={() => {
                    setShowPayments(true);
                    setShowProfile(false);
                  }}
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Wallet size={20} className="inline mr-2" />
                  Payments
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {showProfile ? (
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
              <ProfileForm onSubmit={handleProfileSubmit} />
            </div>
          ) : showPayments ? (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Withdraw Earnings</h3>
                    <form onSubmit={handleWithdraw} className="space-y-4">
                      <div>
                        <label htmlFor="airtmId" className="block text-sm font-medium text-gray-700">
                          AirTM ID
                        </label>
                        <input
                          type="text"
                          id="airtmId"
                          value={airtmId}
                          onChange={(e) => setAirtmId(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your AirTM ID"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                          Amount (USD)
                        </label>
                        <input
                          type="number"
                          id="amount"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter amount to withdraw"
                          min="10"
                          step="0.01"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <CreditCard size={20} className="mr-2" />
                        Withdraw to AirTM
                      </button>
                    </form>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Payment History</h3>
                    <div className="space-y-4">
                      {mockClientData.paymentHistory.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              ${payment.amount.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(payment.date).toLocaleDateString()}
                            </p>
                          </div>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              payment.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {payment.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                  title="Total PCs"
                  value={mockClientData.totalPCs}
                  icon={<Monitor size={20} />}
                />
                <DashboardCard
                  title="Active PCs"
                  value={mockClientData.activePCs}
                  icon={<Cpu size={20} />}
                />
                <DashboardCard
                  title="Active Sessions"
                  value={mockClientData.activeTrainingSessions}
                  icon={<Activity size={20} />}
                />
                <DashboardCard
                  title="Total Earnings"
                  value={`$${mockClientData.totalEarnings.toFixed(2)}`}
                  icon={<DollarSign size={20} />}
                  trend={{ value: 15, isPositive: true }}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Active Training Sessions</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {mockClientData.trainingSessions.map((session) => (
                        <div key={session.id} className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {session.modelName}
                              </div>
                              <div className="text-sm text-gray-500">
                                Started: {new Date(session.startTime).toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                ${session.earnings.toFixed(2)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {session.progress}% Complete
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${session.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">System Status</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {mockClientData.trainingSessions.map((session) => (
                        <div key={session.id} className="space-y-4">
                          <div className="text-sm font-medium text-gray-900 mb-2">
                            {session.modelName}
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">GPU Utilization</span>
                              <span className="text-sm font-medium text-gray-700">{session.gpuUtilization}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${session.gpuUtilization}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                              <span className="text-sm font-medium text-gray-700">{session.memoryUsage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${session.memoryUsage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
import React, { useState } from 'react';
import { Users, Activity, CheckCircle, User, Ban, Search, X, ExternalLink } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import type { User as UserType, SystemMetrics, TrainingSession } from '../types';

const mockSystemMetrics: SystemMetrics = {
  totalUsers: 1250,
  activeUsers: 875,
  totalPCs: 3200,
  activePCs: 2800,
  totalEarnings: 152460,
  activeTrainingSessions: 1890,
};

const mockUsers: UserType[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 28,
    email: 'john@example.com',
    phone: '+1234567890',
    airtmId: 'john_doe_123',
    totalPCs: 5,
    activePCs: 3,
    status: 'active',
    earnings: 1250.50,
    joinedAt: '2024-02-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 32,
    email: 'jane@example.com',
    phone: '+1987654321',
    airtmId: 'jane_smith_456',
    totalPCs: 8,
    activePCs: 6,
    status: 'active',
    earnings: 2150.75,
    joinedAt: '2024-02-10',
  },
];

const mockTasks = [
  {
    id: '1',
    userId: '1',
    modelName: 'GPT-3',
    status: 'active',
    progress: 75,
    startTime: '2024-03-10T14:30:00Z',
    transactionId: 'tx_123456789',
    earnings: 45.20,
  },
  {
    id: '2',
    userId: '1',
    modelName: 'BERT',
    status: 'completed',
    progress: 100,
    startTime: '2024-03-08T10:30:00Z',
    endTime: '2024-03-09T15:45:00Z',
    transactionId: 'tx_987654321',
    earnings: 120.50,
  },
  {
    id: '3',
    userId: '2',
    modelName: 'GPT-4',
    status: 'active',
    progress: 30,
    startTime: '2024-03-10T16:00:00Z',
    transactionId: 'tx_456789123',
    earnings: 25.75,
  },
];

interface UserProfileModalProps {
  user: UserType;
  onClose: () => void;
  onBan: (userId: string) => void;
}

function UserProfileModal({ user, onClose, onBan }: UserProfileModalProps) {
  const userTasks = mockTasks.filter(task => task.userId === user.id);
  const totalEarnings = userTasks.reduce((sum, task) => sum + task.earnings, 0);
  const completedTasks = userTasks.filter(task => task.status === 'completed').length;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-lg bg-white">
        <div className="flex justify-between items-center border-b pb-4">
          <h3 className="text-2xl font-semibold text-gray-900">User Profile</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Personal Information</h4>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Name:</span> {user.name}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Phone:</span> {user.phone}</p>
                <p><span className="font-medium">Age:</span> {user.age}</p>
                <p><span className="font-medium">AirTM ID:</span> {user.airtmId}</p>
                <p><span className="font-medium">Joined:</span> {new Date(user.joinedAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900">Performance Summary</h4>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Total Earnings:</span> ${totalEarnings.toFixed(2)}</p>
                <p><span className="font-medium">Completed Tasks:</span> {completedTasks}</p>
                <p><span className="font-medium">Active PCs:</span> {user.activePCs} / {user.totalPCs}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Task History</h4>
            <div className="space-y-4">
              {userTasks.map(task => (
                <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{task.modelName}</p>
                      <p className="text-sm text-gray-500">
                        Started: {new Date(task.startTime).toLocaleString()}
                      </p>
                      {task.endTime && (
                        <p className="text-sm text-gray-500">
                          Completed: {new Date(task.endTime).toLocaleString()}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${task.earnings.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Transaction: {task.transactionId}</p>
                    </div>
                  </div>
                  {task.status === 'active' && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            User Status: <span className={user.status === 'active' ? 'text-green-600' : 'text-red-600'}>
              {user.status.toUpperCase()}
            </span>
          </div>
          <button
            onClick={() => onBan(user.id)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center"
          >
            <Ban size={18} className="mr-2" />
            Ban User
          </button>
        </div>
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  const activeTasks = mockTasks.filter(task => task.status === 'active');
  const completedTasks = mockTasks.filter(task => task.status === 'completed');
  const activeUsers = new Set(activeTasks.map(task => task.userId)).size;
  const usersWithCompletedTasks = new Set(completedTasks.map(task => task.userId)).size;

  const handleBanUser = (userId: string) => {
    console.log('Banning user:', userId);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 pb-32">
        <nav className="border-b border-indigo-500 border-opacity-25 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="text-white text-xl font-bold">TrainChain Admin</div>
            </div>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Active Tasks"
              value={activeTasks.length}
              icon={<Activity size={20} />}
              trend={{ value: 8, isPositive: true }}
            />
            <DashboardCard
              title="Completed Tasks"
              value={completedTasks.length}
              icon={<CheckCircle size={20} />}
              trend={{ value: 12, isPositive: true }}
            />
            <DashboardCard
              title="Active Users"
              value={activeUsers}
              icon={<Users size={20} />}
              trend={{ value: 5, isPositive: true }}
            />
            <DashboardCard
              title="Users with Completed Tasks"
              value={usersWithCompletedTasks}
              icon={<User size={20} />}
              trend={{ value: 15, isPositive: true }}
            />
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Network Users</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64"
                  />
                  <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockUsers.map((user) => {
                    const currentTask = mockTasks.find(task => task.userId === user.id && task.status === 'active');
                    return (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-medium">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {currentTask ? (
                            <div>
                              <div className="text-sm text-gray-900">{currentTask.modelName}</div>
                              <div className="text-sm text-gray-500">{currentTask.progress}% Complete</div>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-500">No active task</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {currentTask?.transactionId || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${user.earnings.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedUser(user)}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            <ExternalLink size={18} />
                          </button>
                          <button
                            onClick={() => handleBanUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Ban size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {selectedUser && (
        <UserProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onBan={handleBanUser}
        />
      )}
    </div>
  );
}
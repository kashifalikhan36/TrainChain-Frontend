export interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  airtmId: string;
  totalPCs: number;
  activePCs: number;
  status: 'active' | 'banned';
  earnings: number;
  joinedAt: string;
}

export interface SystemMetrics {
  totalUsers: number;
  activeUsers: number;
  totalPCs: number;
  activePCs: number;
  totalEarnings: number;
  activeTrainingSessions: number;
}

export interface TrainingSession {
  id: string;
  modelName: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  startTime: string;
  endTime?: string;
  earnings: number;
  gpuUtilization: number;
  memoryUsage: number;
}
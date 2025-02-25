import React, { useState } from 'react';
import { AdminDashboard } from './components/AdminDashboard';
import { ClientDashboard } from './components/ClientDashboard';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { DownloadPage } from './components/client/DownloadPage';
import { HelpAndApiPage } from './components/client/HelpAndApiPage';
import { DocumentationPage } from './components/client/DocumentationPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'auth' | 'dashboard' | 'download' | 'help' | 'docs'>('landing');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAuth = (email: string, password: string) => {
    // Demo admin credentials
    if (email === 'admin@demo.com' && password === 'admin123') {
      setIsAdmin(true);
      setCurrentPage('dashboard');
    } else if (email && password) { // Any other valid credentials go to client dashboard
      setIsAdmin(false);
      setCurrentPage('dashboard');
    }
  };

  if (currentPage === 'landing') {
    return <LandingPage onAuthClick={() => setCurrentPage('auth')} />;
  }

  if (currentPage === 'auth') {
    return <AuthPage onAuth={handleAuth} />;
  }

  if (isAdmin) {
    return <AdminDashboard />;
  }

  switch (currentPage) {
    case 'download':
      return <DownloadPage onNavigate={setCurrentPage} />;
    case 'help':
      return <HelpAndApiPage onNavigate={setCurrentPage} />;
    case 'docs':
      return <DocumentationPage onNavigate={setCurrentPage} />;
    default:
      return <ClientDashboard onNavigate={setCurrentPage} />;
  }
}

export default App;
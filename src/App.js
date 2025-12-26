import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import PayApplications from './pages/PayApplications';
import LienWaivers from './pages/LienWaivers';
import Retainage from './pages/Retainage';
import Insurance from './pages/Insurance';
import Prequalification from './pages/Prequalification';
import StateForms from './pages/StateForms';
import AuditTrail from './pages/AuditTrail';
import Projects from './pages/Projects';
import Subcontractors from './pages/Subcontractors';
import Contracts from './pages/Contracts';
import ChangeOrders from './pages/ChangeOrders';
import SubPortal from './pages/SubPortal';
import OwnerPortal from './pages/OwnerPortal';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/pay-applications" element={<PayApplications />} />
            <Route path="/lien-waivers" element={<LienWaivers />} />
            <Route path="/retainage" element={<Retainage />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/prequalification" element={<Prequalification />} />
            <Route path="/state-forms" element={<StateForms />} />
            <Route path="/audit-trail" element={<AuditTrail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/subcontractors" element={<Subcontractors />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/change-orders" element={<ChangeOrders />} />
            <Route path="/sub-portal" element={<SubPortal />} />
            <Route path="/owner-portal" element={<OwnerPortal />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

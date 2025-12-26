import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

const Prequalification = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL APPLICATIONS', value: 32 },
    { label: 'APPROVED', value: 24 },
    { label: 'PENDING REVIEW', value: 5 },
    { label: 'EXPIRED', value: 3 },
  ];

  const applications = [
    {
      id: 1,
      company: 'Martinez Electric Co.',
      trade: 'Electrical',
      submittedDate: 'Nov 15, 2024',
      financials: 'verified',
      insurance: 'verified',
      safety: 'verified',
      references: 'verified',
      status: 'approved',
      expirationDate: 'Nov 15, 2025',
    },
    {
      id: 2,
      company: 'ABC Plumbing Services',
      trade: 'Plumbing',
      submittedDate: 'Dec 10, 2024',
      financials: 'pending',
      insurance: 'verified',
      safety: 'pending',
      references: 'verified',
      status: 'pending',
      expirationDate: null,
    },
    {
      id: 3,
      company: 'Superior Drywall Inc.',
      trade: 'Drywall',
      submittedDate: 'Oct 1, 2024',
      financials: 'verified',
      insurance: 'issue',
      safety: 'verified',
      references: 'verified',
      status: 'issue',
      expirationDate: null,
    },
    {
      id: 4,
      company: 'Precision HVAC',
      trade: 'HVAC',
      submittedDate: 'Sep 20, 2024',
      financials: 'verified',
      insurance: 'verified',
      safety: 'verified',
      references: 'verified',
      status: 'approved',
      expirationDate: 'Sep 20, 2025',
    },
  ];

  const getVerificationIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle size={16} color="#059669" />;
      case 'pending':
        return <Clock size={16} color="#d97706" />;
      case 'issue':
        return <AlertCircle size={16} color="#dc2626" />;
      default:
        return <XCircle size={16} color="#666" />;
    }
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Prequalification</h1>
          <p className="page-subtitle">Manage subcontractor prequalification applications</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Application
        </button>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="search-box" style={{ width: '350px' }}>
            <Search size={18} color="#999" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Trade</th>
              <th>Submitted</th>
              <th>Financials</th>
              <th>Insurance</th>
              <th>Safety</th>
              <th>References</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="cell-primary">{app.company}</td>
                <td>{app.trade}</td>
                <td>{app.submittedDate}</td>
                <td>{getVerificationIcon(app.financials)}</td>
                <td>{getVerificationIcon(app.insurance)}</td>
                <td>{getVerificationIcon(app.safety)}</td>
                <td>{getVerificationIcon(app.references)}</td>
                <td>
                  <span className={`status-badge status-${app.status}`}>
                    {app.status}
                  </span>
                </td>
                <td>
                  <button className="action-menu">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="showing-text">Showing {applications.length} applications</span>
        </div>
      </div>
    </div>
  );
};

export default Prequalification;

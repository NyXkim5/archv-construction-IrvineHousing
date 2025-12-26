import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, Plus, Download, AlertTriangle, Shield } from 'lucide-react';

const Insurance = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL COIS', value: 48 },
    { label: 'COMPLIANT', value: 41 },
    { label: 'EXPIRING SOON', value: 4 },
    { label: 'EXPIRED', value: 3 },
  ];

  const certificates = [
    {
      id: 1,
      subcontractor: 'Martinez Electric Co.',
      insurer: 'State Farm',
      policyNumber: 'GL-2024-001234',
      coverage: 'General Liability',
      limit: 2000000,
      expirationDate: 'Jan 2, 2025',
      daysUntilExpiry: 8,
      status: 'expiring',
    },
    {
      id: 2,
      subcontractor: 'Johnson Plumbing LLC',
      insurer: 'Liberty Mutual',
      policyNumber: 'GL-2024-005678',
      coverage: 'General Liability',
      limit: 1000000,
      expirationDate: 'Mar 15, 2025',
      daysUntilExpiry: 80,
      status: 'compliant',
    },
    {
      id: 3,
      subcontractor: 'Superior Drywall Inc.',
      insurer: 'Travelers',
      policyNumber: 'WC-2024-009012',
      coverage: 'Workers Comp',
      limit: 500000,
      expirationDate: 'Dec 20, 2024',
      daysUntilExpiry: -5,
      status: 'expired',
    },
    {
      id: 4,
      subcontractor: 'ABC Roofing',
      insurer: 'Hartford',
      policyNumber: 'GL-2024-003456',
      coverage: 'General Liability',
      limit: 2000000,
      expirationDate: 'Jun 30, 2025',
      daysUntilExpiry: 187,
      status: 'compliant',
    },
    {
      id: 5,
      subcontractor: 'Precision HVAC',
      insurer: 'Nationwide',
      policyNumber: 'AUTO-2024-007890',
      coverage: 'Auto Liability',
      limit: 1000000,
      expirationDate: 'Apr 1, 2025',
      daysUntilExpiry: 97,
      status: 'compliant',
    },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Insurance (COIs)</h1>
        <p className="page-subtitle">Manage certificates of insurance and compliance</p>
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
          <div className="table-filters">
            <div className="search-box">
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              All Status
              <ChevronDown size={16} />
            </button>
            <button className="filter-dropdown">
              All Coverage Types
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="table-actions">
            <button className="btn btn-secondary">
              <Download size={16} />
              Export
            </button>
            <button className="btn btn-primary">
              <Plus size={16} />
              Add COI
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subcontractor</th>
              <th>Insurer</th>
              <th>Policy Number</th>
              <th>Coverage</th>
              <th>Limit</th>
              <th>Expiration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id}>
                <td className="cell-primary">{cert.subcontractor}</td>
                <td>{cert.insurer}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '13px' }}>{cert.policyNumber}</td>
                <td>{cert.coverage}</td>
                <td className="cell-amount">{formatAmount(cert.limit)}</td>
                <td>
                  <div className="cell-date">{cert.expirationDate}</div>
                  {cert.status === 'expiring' && (
                    <div className="cell-overdue" style={{ color: '#d97706' }}>
                      {cert.daysUntilExpiry} days left
                    </div>
                  )}
                  {cert.status === 'expired' && (
                    <div className="cell-overdue">
                      {Math.abs(cert.daysUntilExpiry)} days ago
                    </div>
                  )}
                </td>
                <td>
                  <span className={`status-badge status-${cert.status}`}>
                    {cert.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {(cert.status === 'expiring' || cert.status === 'expired') && (
                      <button className="action-btn">Request</button>
                    )}
                    <button className="action-menu">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="showing-text">Showing {certificates.length} certificates</span>
          <div className="pagination">
            <button>Previous</button>
            <span>Page 1</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;

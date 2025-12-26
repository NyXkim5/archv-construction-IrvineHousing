import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, Plus, Download, DollarSign } from 'lucide-react';

const PayApplications = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL', value: '$2.4M' },
    { label: 'DRAFT', value: '$320K' },
    { label: 'SUBMITTED', value: '$580K' },
    { label: 'APPROVED', value: '$1.5M' },
  ];

  const payApps = [
    {
      id: 1,
      number: 'PA-001',
      project: 'Downtown Office Complex',
      contractor: 'Martinez Electric Co.',
      period: 'Nov 1 - Nov 30, 2024',
      amount: 145000,
      retention: 14500,
      netAmount: 130500,
      status: 'approved',
    },
    {
      id: 2,
      number: 'PA-002',
      project: 'Riverside Apartments',
      contractor: 'Superior Drywall Inc.',
      period: 'Nov 1 - Nov 30, 2024',
      amount: 87500,
      retention: 8750,
      netAmount: 78750,
      status: 'submitted',
    },
    {
      id: 3,
      number: 'PA-003',
      project: 'Harbor View Hotel',
      contractor: 'Precision HVAC',
      period: 'Dec 1 - Dec 31, 2024',
      amount: 225000,
      retention: 22500,
      netAmount: 202500,
      status: 'draft',
    },
    {
      id: 4,
      number: 'PA-004',
      project: 'Downtown Office Complex',
      contractor: 'Steel Structures Ltd.',
      period: 'Dec 1 - Dec 31, 2024',
      amount: 312000,
      retention: 31200,
      netAmount: 280800,
      status: 'pending-waiver',
    },
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Pay Applications</h1>
        <p className="page-subtitle">Manage payment applications and billing</p>
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
                placeholder="Search pay applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              All Status
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
              New Pay App
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Pay App #</th>
              <th>Project</th>
              <th>Contractor</th>
              <th>Period</th>
              <th>Amount</th>
              <th>Retention</th>
              <th>Net Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payApps.map((payApp) => (
              <tr key={payApp.id}>
                <td className="cell-primary">{payApp.number}</td>
                <td>{payApp.project}</td>
                <td>{payApp.contractor}</td>
                <td>{payApp.period}</td>
                <td className="cell-amount">{formatAmount(payApp.amount)}</td>
                <td className="cell-amount" style={{ color: '#ef4444' }}>
                  -{formatAmount(payApp.retention)}
                </td>
                <td className="cell-amount" style={{ fontWeight: 600 }}>
                  {formatAmount(payApp.netAmount)}
                </td>
                <td>
                  <span className={`status-badge status-${payApp.status}`}>
                    {payApp.status.replace('-', ' ')}
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
          <span className="showing-text">Showing {payApps.length} pay applications</span>
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

export default PayApplications;

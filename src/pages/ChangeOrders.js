import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, Download, ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

const ChangeOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL COs', value: 34 },
    { label: 'PENDING', value: 8 },
    { label: 'APPROVED', value: 24 },
    { label: 'NET CHANGE', value: '+$1.2M' },
  ];

  const changeOrders = [
    {
      id: 1,
      number: 'CO-001',
      project: 'Downtown Office Complex',
      subcontractor: 'Martinez Electric Co.',
      description: 'Additional outlets in conference rooms',
      amount: 35000,
      type: 'addition',
      submittedDate: 'Dec 1, 2024',
      status: 'approved',
    },
    {
      id: 2,
      number: 'CO-002',
      project: 'Riverside Apartments',
      subcontractor: 'Superior Drywall Inc.',
      description: 'Scope reduction - Unit 3B walls',
      amount: -8500,
      type: 'deduction',
      submittedDate: 'Dec 5, 2024',
      status: 'approved',
    },
    {
      id: 3,
      number: 'CO-003',
      project: 'Harbor View Hotel',
      subcontractor: 'Precision HVAC',
      description: 'Upgraded HVAC units for penthouse',
      amount: 125000,
      type: 'addition',
      submittedDate: 'Dec 10, 2024',
      status: 'pending',
    },
    {
      id: 4,
      number: 'CO-004',
      project: 'Downtown Office Complex',
      subcontractor: 'Steel Structures Ltd.',
      description: 'Additional structural supports - parking',
      amount: 78000,
      type: 'addition',
      submittedDate: 'Dec 15, 2024',
      status: 'pending',
    },
    {
      id: 5,
      number: 'CO-005',
      project: 'Riverside Apartments',
      subcontractor: 'Johnson Plumbing LLC',
      description: 'Upgraded fixtures in common areas',
      amount: 21000,
      type: 'addition',
      submittedDate: 'Dec 18, 2024',
      status: 'review',
    },
  ];

  const formatAmount = (amount) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Math.abs(amount));
    return amount >= 0 ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Change Orders</h1>
          <p className="page-subtitle">Track contract modifications and scope changes</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Change Order
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
          <div className="table-filters">
            <div className="search-box">
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search change orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              All Projects
              <ChevronDown size={16} />
            </button>
            <button className="filter-dropdown">
              All Status
              <ChevronDown size={16} />
            </button>
          </div>
          <button className="btn btn-secondary">
            <Download size={16} />
            Export
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>CO #</th>
              <th>Project</th>
              <th>Subcontractor</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {changeOrders.map((co) => (
              <tr key={co.id}>
                <td className="cell-primary">{co.number}</td>
                <td>{co.project}</td>
                <td>{co.subcontractor}</td>
                <td style={{ maxWidth: '250px' }}>{co.description}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {co.type === 'addition' ? (
                      <TrendingUp size={16} color="#059669" />
                    ) : (
                      <TrendingDown size={16} color="#dc2626" />
                    )}
                    <span className="cell-amount" style={{ color: co.type === 'addition' ? '#059669' : '#dc2626' }}>
                      {formatAmount(co.amount)}
                    </span>
                  </div>
                </td>
                <td>{co.submittedDate}</td>
                <td>
                  <span className={`status-badge status-${co.status}`}>
                    {co.status}
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
          <span className="showing-text">Showing {changeOrders.length} change orders</span>
        </div>
      </div>
    </div>
  );
};

export default ChangeOrders;

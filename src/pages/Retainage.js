import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, Download, DollarSign, TrendingUp } from 'lucide-react';

const Retainage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL HELD', value: '$485,000' },
    { label: 'PENDING RELEASE', value: '$125,000' },
    { label: 'RELEASED YTD', value: '$340,000' },
  ];

  const retainageItems = [
    {
      id: 1,
      subcontractor: 'Martinez Electric Co.',
      project: 'Downtown Office Complex',
      contractValue: 450000,
      billedToDate: 385000,
      retainageHeld: 38500,
      retainagePercent: 10,
      releaseDate: 'Project Completion',
      status: 'held',
    },
    {
      id: 2,
      subcontractor: 'Johnson Plumbing LLC',
      project: 'Downtown Office Complex',
      contractValue: 320000,
      billedToDate: 280000,
      retainageHeld: 28000,
      retainagePercent: 10,
      releaseDate: 'Jan 15, 2025',
      status: 'pending-release',
    },
    {
      id: 3,
      subcontractor: 'Superior Drywall Inc.',
      project: 'Riverside Apartments',
      contractValue: 185000,
      billedToDate: 142000,
      retainageHeld: 14200,
      retainagePercent: 10,
      releaseDate: 'Project Completion',
      status: 'held',
    },
    {
      id: 4,
      subcontractor: 'ABC Roofing',
      project: 'Riverside Apartments',
      contractValue: 250000,
      billedToDate: 250000,
      retainageHeld: 25000,
      retainagePercent: 10,
      releaseDate: 'Dec 30, 2024',
      status: 'approved',
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
        <h1 className="page-title">Retainage</h1>
        <p className="page-subtitle">Track retention amounts and release schedules</p>
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
                placeholder="Search retainage..."
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
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subcontractor</th>
              <th>Project</th>
              <th>Contract Value</th>
              <th>Billed to Date</th>
              <th>Retainage %</th>
              <th>Retainage Held</th>
              <th>Release Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {retainageItems.map((item) => (
              <tr key={item.id}>
                <td className="cell-primary">{item.subcontractor}</td>
                <td>{item.project}</td>
                <td className="cell-amount">{formatAmount(item.contractValue)}</td>
                <td className="cell-amount">{formatAmount(item.billedToDate)}</td>
                <td>{item.retainagePercent}%</td>
                <td className="cell-amount" style={{ fontWeight: 600 }}>
                  {formatAmount(item.retainageHeld)}
                </td>
                <td>{item.releaseDate}</td>
                <td>
                  <span className={`status-badge status-${item.status}`}>
                    {item.status.replace('-', ' ')}
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
          <span className="showing-text">Showing {retainageItems.length} items</span>
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

export default Retainage;

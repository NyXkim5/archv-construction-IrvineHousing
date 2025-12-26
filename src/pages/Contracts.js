import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, Download, FileSignature, ChevronDown } from 'lucide-react';

const Contracts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'TOTAL CONTRACTS', value: 24 },
    { label: 'ACTIVE', value: 18 },
    { label: 'TOTAL VALUE', value: '$89.7M' },
    { label: 'COMMITTED', value: '$67.2M' },
  ];

  const contracts = [
    {
      id: 1,
      number: 'CON-2024-001',
      subcontractor: 'Martinez Electric Co.',
      project: 'Downtown Office Complex',
      type: 'Subcontract',
      originalValue: 450000,
      changeOrders: 35000,
      currentValue: 485000,
      billedToDate: 385000,
      status: 'active',
    },
    {
      id: 2,
      number: 'CON-2024-002',
      subcontractor: 'Johnson Plumbing LLC',
      project: 'Downtown Office Complex',
      type: 'Subcontract',
      originalValue: 320000,
      changeOrders: 0,
      currentValue: 320000,
      billedToDate: 280000,
      status: 'active',
    },
    {
      id: 3,
      number: 'CON-2024-003',
      subcontractor: 'Superior Drywall Inc.',
      project: 'Riverside Apartments',
      type: 'Subcontract',
      originalValue: 185000,
      changeOrders: 12500,
      currentValue: 197500,
      billedToDate: 142000,
      status: 'active',
    },
    {
      id: 4,
      number: 'CON-2024-004',
      subcontractor: 'ABC Roofing',
      project: 'Riverside Apartments',
      type: 'Subcontract',
      originalValue: 250000,
      changeOrders: 0,
      currentValue: 250000,
      billedToDate: 250000,
      status: 'complete',
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
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Contracts</h1>
          <p className="page-subtitle">Manage subcontract agreements</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Contract
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
                placeholder="Search contracts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              All Projects
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
              <th>Contract #</th>
              <th>Subcontractor</th>
              <th>Project</th>
              <th>Original Value</th>
              <th>Change Orders</th>
              <th>Current Value</th>
              <th>Billed to Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileSignature size={16} color="#666" />
                    <span className="cell-primary">{contract.number}</span>
                  </div>
                </td>
                <td>{contract.subcontractor}</td>
                <td>{contract.project}</td>
                <td className="cell-amount">{formatAmount(contract.originalValue)}</td>
                <td className="cell-amount" style={{ color: contract.changeOrders > 0 ? '#059669' : '#666' }}>
                  {contract.changeOrders > 0 ? '+' : ''}{formatAmount(contract.changeOrders)}
                </td>
                <td className="cell-amount" style={{ fontWeight: 600 }}>
                  {formatAmount(contract.currentValue)}
                </td>
                <td className="cell-amount">
                  {formatAmount(contract.billedToDate)}
                  <div className="cell-secondary">
                    {Math.round((contract.billedToDate / contract.currentValue) * 100)}%
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-${contract.status}`}>
                    {contract.status}
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
          <span className="showing-text">Showing {contracts.length} contracts</span>
        </div>
      </div>
    </div>
  );
};

export default Contracts;

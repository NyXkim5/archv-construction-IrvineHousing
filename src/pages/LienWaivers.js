import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, Plus, Download, Filter, CheckCircle } from 'lucide-react';
import './LienWaivers.css';

const LienWaivers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');

  const stats = [
    { label: 'TOTAL', value: '1,847' },
    { label: 'PENDING', value: '156' },
    { label: 'REQUESTED', value: '89' },
    { label: 'RECEIVED', value: '67' },
    { label: 'APPROVED', value: '1,535' },
  ];

  const waivers = [
    {
      id: 1,
      subcontractor: 'Turner Construction',
      payment: 'Payment #12',
      project: 'Irvine Spectrum Phase 3',
      type: 'CA Conditional Progress',
      amount: 2450000,
      dueDate: 'Dec 28, 2024',
      overdue: null,
      status: 'received',
      civilCode: '§8132',
    },
    {
      id: 2,
      subcontractor: 'Rosendin Electric',
      payment: 'Payment #8',
      project: 'One Irvine Tower',
      type: 'CA Unconditional Progress',
      amount: 1890000,
      dueDate: 'Dec 15, 2024',
      overdue: null,
      status: 'approved',
      civilCode: '§8134',
    },
    {
      id: 3,
      subcontractor: 'Swinerton Builders',
      payment: 'Payment #6',
      project: 'Fashion Island Renovation',
      type: 'CA Conditional Progress',
      amount: 3200000,
      dueDate: 'Dec 18, 2024',
      overdue: 7,
      status: 'pending',
      civilCode: '§8132',
    },
    {
      id: 4,
      subcontractor: 'ACCO Engineered Systems',
      payment: 'Payment #Final',
      project: 'Newport Ridge Residential',
      type: 'CA Conditional Final',
      amount: 4500000,
      dueDate: 'Dec 30, 2024',
      overdue: null,
      status: 'requested',
      civilCode: '§8136',
    },
    {
      id: 5,
      subcontractor: 'Southland Industries',
      payment: 'Payment #9',
      project: 'Irvine Spectrum Phase 3',
      type: 'CA Conditional Progress',
      amount: 1650000,
      dueDate: 'Dec 12, 2024',
      overdue: 13,
      status: 'pending',
      civilCode: '§8132',
    },
    {
      id: 6,
      subcontractor: 'Webcor Builders',
      payment: 'Payment #11',
      project: 'One Irvine Tower',
      type: 'CA Conditional Progress',
      amount: 2890000,
      dueDate: 'Dec 20, 2024',
      overdue: 5,
      status: 'requested',
      civilCode: '§8132',
    },
    {
      id: 7,
      subcontractor: 'Clark Construction',
      payment: 'Payment #4',
      project: 'UTC Retail Expansion',
      type: 'CA Unconditional Progress',
      amount: 945000,
      dueDate: 'Dec 10, 2024',
      overdue: null,
      status: 'approved',
      civilCode: '§8134',
    },
    {
      id: 8,
      subcontractor: 'Cupertino Electric',
      payment: 'Payment #7',
      project: 'Santa Clara Office Campus',
      type: 'CA Conditional Progress',
      amount: 1780000,
      dueDate: 'Dec 22, 2024',
      overdue: 3,
      status: 'received',
      civilCode: '§8132',
    },
  ];

  const projects = [
    'All Projects',
    'Irvine Spectrum Phase 3',
    'Fashion Island Renovation',
    'One Irvine Tower',
    'Portola Springs Phase 4',
    'UTC Retail Expansion',
    'Santa Clara Office Campus',
    'Newport Ridge Residential',
  ];

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  const filteredWaivers = waivers.filter(waiver => {
    const matchesSearch = waiver.subcontractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          waiver.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || waiver.status === statusFilter;
    const matchesProject = projectFilter === 'all' || waiver.project === projectFilter;
    return matchesSearch && matchesStatus && matchesProject;
  });

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Lien Waivers</h1>
          <p className="page-subtitle">California Civil Code §8000-9566 Compliant Waivers</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary">
            <Download size={16} />
            Export All
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            Request Waiver
          </button>
        </div>
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
                placeholder="Search waivers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="filter-dropdown"
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', minWidth: '200px' }}
            >
              {projects.map(p => (
                <option key={p} value={p === 'All Projects' ? 'all' : p}>{p}</option>
              ))}
            </select>
            <select
              className="filter-dropdown" 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="requested">Requested</option>
              <option value="received">Received</option>
              <option value="approved">Approved</option>
            </select>
          </div>
          <div className="table-actions">
            <button className="btn btn-secondary">
              Bulk Actions
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subcontractor</th>
              <th>Project</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredWaivers.map((waiver) => (
              <tr key={waiver.id}>
                <td>
                  <div className="cell-primary">{waiver.subcontractor}</div>
                  <div className="cell-secondary">{waiver.payment}</div>
                </td>
                <td>{waiver.project}</td>
                <td>
                  <div>{waiver.type}</div>
                  <div className="cell-secondary" style={{ fontFamily: 'monospace', fontSize: '11px' }}>{waiver.civilCode}</div>
                </td>
                <td className="cell-amount">{formatAmount(waiver.amount)}</td>
                <td>
                  <div className="cell-date">{waiver.dueDate}</div>
                  {waiver.overdue && (
                    <div className="cell-overdue">{waiver.overdue}d overdue</div>
                  )}
                </td>
                <td>
                  <span className={getStatusClass(waiver.status)}>
                    {waiver.status}
                  </span>
                </td>
                <td>
                  <div className="action-cell">
                    {waiver.status === 'pending' && (
                      <button className="action-btn">Send Request</button>
                    )}
                    {waiver.status === 'received' && (
                      <button className="action-btn" style={{ color: '#059669' }}>
                        <CheckCircle size={14} style={{ marginRight: '4px' }} />
                        Approve
                      </button>
                    )}
                    {waiver.status === 'requested' && (
                      <button className="action-btn">Follow Up</button>
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
          <span className="showing-text">Showing {filteredWaivers.length} of {waivers.length} waivers</span>
          <div className="pagination">
            <button>Previous</button>
            <span>Page 1 of 185</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienWaivers;

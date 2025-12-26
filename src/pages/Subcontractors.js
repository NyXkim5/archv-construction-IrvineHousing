import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, Building2, Phone, Mail, CheckCircle, AlertCircle, Download, Filter } from 'lucide-react';

const Subcontractors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tradeFilter, setTradeFilter] = useState('all');

  const stats = [
    { label: 'TOTAL CONTRACTORS', value: 248 },
    { label: 'ACTIVE', value: 186 },
    { label: 'COMPLIANT', value: 172 },
    { label: 'NEEDS ATTENTION', value: 14 },
  ];

  const subcontractors = [
    {
      id: 1,
      name: 'Turner Construction',
      trade: 'General Contractor',
      contact: 'Michael Chen',
      email: 'mchen@turnerconstruction.com',
      phone: '(949) 555-0101',
      activeProjects: 4,
      compliance: 'compliant',
      totalBilled: 48500000,
      license: 'CA #456789',
    },
    {
      id: 2,
      name: 'Swinerton Builders',
      trade: 'General Contractor',
      contact: 'Sarah Martinez',
      email: 'smartinez@swinerton.com',
      phone: '(949) 555-0102',
      activeProjects: 3,
      compliance: 'issue',
      totalBilled: 32400000,
      license: 'CA #567890',
    },
    {
      id: 3,
      name: 'ACCO Engineered Systems',
      trade: 'HVAC/Mechanical',
      contact: 'David Park',
      email: 'dpark@accoes.com',
      phone: '(714) 555-0103',
      activeProjects: 6,
      compliance: 'compliant',
      totalBilled: 18900000,
      license: 'CA #678901',
    },
    {
      id: 4,
      name: 'Southland Industries',
      trade: 'Mechanical/Plumbing',
      contact: 'Jennifer Wong',
      email: 'jwong@southlandind.com',
      phone: '(949) 555-0104',
      activeProjects: 5,
      compliance: 'issue',
      totalBilled: 24300000,
      license: 'CA #789012',
    },
    {
      id: 5,
      name: 'Rosendin Electric',
      trade: 'Electrical',
      contact: 'Robert Kim',
      email: 'rkim@rosendin.com',
      phone: '(408) 555-0105',
      activeProjects: 7,
      compliance: 'compliant',
      totalBilled: 35600000,
      license: 'CA #890123',
    },
    {
      id: 6,
      name: 'Clark Construction',
      trade: 'General Contractor',
      contact: 'Lisa Thompson',
      email: 'lthompson@clarkconstruction.com',
      phone: '(858) 555-0106',
      activeProjects: 2,
      compliance: 'compliant',
      totalBilled: 28100000,
      license: 'CA #901234',
    },
    {
      id: 7,
      name: 'Webcor Builders',
      trade: 'General Contractor',
      contact: 'James Rodriguez',
      email: 'jrodriguez@webcor.com',
      phone: '(415) 555-0107',
      activeProjects: 3,
      compliance: 'issue',
      totalBilled: 41200000,
      license: 'CA #012345',
    },
    {
      id: 8,
      name: 'Performance Contracting',
      trade: 'Insulation/Fireproofing',
      contact: 'Amy Nguyen',
      email: 'anguyen@pcg.com',
      phone: '(949) 555-0108',
      activeProjects: 8,
      compliance: 'compliant',
      totalBilled: 12400000,
      license: 'CA #123456',
    },
    {
      id: 9,
      name: 'Cupertino Electric',
      trade: 'Electrical',
      contact: 'Mark Stevens',
      email: 'mstevens@cei.com',
      phone: '(408) 555-0109',
      activeProjects: 4,
      compliance: 'compliant',
      totalBilled: 22800000,
      license: 'CA #234567',
    },
    {
      id: 10,
      name: 'Western Allied Mechanical',
      trade: 'Mechanical',
      contact: 'Patricia Lee',
      email: 'plee@westernallied.com',
      phone: '(650) 555-0110',
      activeProjects: 3,
      compliance: 'compliant',
      totalBilled: 15700000,
      license: 'CA #345678',
    },
  ];

  const formatAmount = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const filteredSubs = subcontractors.filter(sub => 
    (tradeFilter === 'all' || sub.trade === tradeFilter) &&
    (sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     sub.trade.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Subcontractors</h1>
          <p className="page-subtitle">Irvine Company Approved Contractor Directory</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary">
            <Download size={16} />
            Export
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            Add Contractor
          </button>
        </div>
      </div>

      <div className="stats-row" style={{ marginBottom: '24px' }}>
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="search-box" style={{ width: '300px' }}>
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search contractors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="filter-dropdown"
              value={tradeFilter}
              onChange={(e) => setTradeFilter(e.target.value)}
              style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}
            >
              <option value="all">All Trades</option>
              <option value="General Contractor">General Contractor</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="HVAC/Mechanical">HVAC/Mechanical</option>
              <option value="Mechanical/Plumbing">Mechanical/Plumbing</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Trade</th>
              <th>Contact</th>
              <th>License</th>
              <th>Active Projects</th>
              <th>Total Billed</th>
              <th>Compliance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubs.map((sub) => (
              <tr key={sub.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={20} color="#666" />
                    </div>
                    <div>
                      <div className="cell-primary">{sub.name}</div>
                      <div className="cell-secondary">{sub.email}</div>
                    </div>
                  </div>
                </td>
                <td>{sub.trade}</td>
                <td>
                  <div>{sub.contact}</div>
                  <div className="cell-secondary">{sub.phone}</div>
                </td>
                <td style={{ fontFamily: 'monospace', fontSize: '13px' }}>{sub.license}</td>
                <td>{sub.activeProjects}</td>
                <td className="cell-amount">{formatAmount(sub.totalBilled)}</td>
                <td>
                  {sub.compliance === 'compliant' ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669' }}>
                      <CheckCircle size={16} />
                      Compliant
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#dc2626' }}>
                      <AlertCircle size={16} />
                      Needs Review
                    </span>
                  )}
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
          <span className="showing-text">Showing {filteredSubs.length} of {subcontractors.length} contractors</span>
          <div className="pagination">
            <button>Previous</button>
            <span>Page 1 of 25</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcontractors;

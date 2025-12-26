import React, { useState } from 'react';
import { Search, Download, ChevronDown, FileText, User, Clock, CheckCircle, Mail, Edit, Eye } from 'lucide-react';

const AuditTrail = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const auditLogs = [
    {
      id: 1,
      timestamp: 'Dec 25, 2024 2:45 PM',
      user: 'John Smith',
      action: 'approved',
      actionLabel: 'Waiver Approved',
      resource: 'Lien Waiver #LW-2024-089',
      details: 'Approved conditional progress waiver for Martinez Electric Co.',
      ip: '192.168.1.45',
    },
    {
      id: 2,
      timestamp: 'Dec 25, 2024 2:30 PM',
      user: 'System',
      action: 'sent',
      actionLabel: 'Auto-Chase Sent',
      resource: 'Lien Waiver #LW-2024-088',
      details: 'Automated reminder sent to Superior Drywall Inc.',
      ip: null,
    },
    {
      id: 3,
      timestamp: 'Dec 25, 2024 1:15 PM',
      user: 'Sarah Chen',
      action: 'uploaded',
      actionLabel: 'Document Uploaded',
      resource: 'COI #COI-2024-034',
      details: 'New insurance certificate uploaded for ABC Roofing',
      ip: '192.168.1.78',
    },
    {
      id: 4,
      timestamp: 'Dec 25, 2024 11:30 AM',
      user: 'Mike Johnson',
      action: 'created',
      actionLabel: 'Pay App Created',
      resource: 'Pay Application #PA-2024-015',
      details: 'New pay application created for Harbor View Hotel',
      ip: '192.168.1.22',
    },
    {
      id: 5,
      timestamp: 'Dec 25, 2024 10:00 AM',
      user: 'John Smith',
      action: 'viewed',
      actionLabel: 'Document Viewed',
      resource: 'Contract #CON-2024-003',
      details: 'Viewed contract details for Superior Drywall Inc.',
      ip: '192.168.1.45',
    },
    {
      id: 6,
      timestamp: 'Dec 24, 2024 4:45 PM',
      user: 'Lisa Park',
      action: 'edited',
      actionLabel: 'Project Updated',
      resource: 'Project: Downtown Office Complex',
      details: 'Updated project completion date and budget',
      ip: '192.168.1.56',
    },
    {
      id: 7,
      timestamp: 'Dec 24, 2024 3:20 PM',
      user: 'System',
      action: 'expired',
      actionLabel: 'COI Expired',
      resource: 'COI #COI-2024-012',
      details: 'Insurance certificate expired for Steel Structures Ltd.',
      ip: null,
    },
  ];

  const getActionIcon = (action) => {
    switch (action) {
      case 'approved':
        return <CheckCircle size={16} />;
      case 'sent':
        return <Mail size={16} />;
      case 'uploaded':
        return <FileText size={16} />;
      case 'created':
        return <FileText size={16} />;
      case 'viewed':
        return <Eye size={16} />;
      case 'edited':
        return <Edit size={16} />;
      case 'expired':
        return <Clock size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'approved':
        return '#059669';
      case 'sent':
        return '#2563eb';
      case 'uploaded':
        return '#7c3aed';
      case 'created':
        return '#059669';
      case 'viewed':
        return '#666';
      case 'edited':
        return '#d97706';
      case 'expired':
        return '#dc2626';
      default:
        return '#666';
    }
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Audit Trail</h1>
          <p className="page-subtitle">Complete history of all system activities</p>
        </div>
        <button className="btn btn-secondary">
          <Download size={16} />
          Export Logs
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="table-filters">
            <div className="search-box">
              <Search size={18} color="#999" />
              <input
                type="text"
                placeholder="Search audit logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-dropdown">
              All Actions
              <ChevronDown size={16} />
            </button>
            <button className="filter-dropdown">
              All Users
              <ChevronDown size={16} />
            </button>
            <button className="filter-dropdown">
              Last 7 days
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Resource</th>
              <th>Details</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={14} color="#999" />
                    <span style={{ fontSize: '13px' }}>{log.timestamp}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: log.user === 'System' ? '#e5e5e5' : '#111', 
                      color: log.user === 'System' ? '#666' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}>
                      {log.user === 'System' ? 'SYS' : log.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{log.user}</span>
                  </div>
                </td>
                <td>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    padding: '4px 10px',
                    background: `${getActionColor(log.action)}15`,
                    color: getActionColor(log.action),
                    borderRadius: '6px',
                    fontSize: '13px',
                  }}>
                    {getActionIcon(log.action)}
                    {log.actionLabel}
                  </div>
                </td>
                <td className="cell-primary" style={{ fontSize: '13px' }}>{log.resource}</td>
                <td style={{ color: '#666', fontSize: '13px', maxWidth: '300px' }}>{log.details}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#999' }}>
                  {log.ip || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span className="showing-text">Showing {auditLogs.length} entries</span>
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

export default AuditTrail;

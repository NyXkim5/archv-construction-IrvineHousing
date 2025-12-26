import React from 'react';
import { ExternalLink, Copy, Settings, Users, Link, Eye } from 'lucide-react';

const SubPortal = () => {
  const portalUrl = 'https://portal.archv.ai/sub/downtown-office-complex';
  
  const portalStats = [
    { label: 'Active Subcontractors', value: 12 },
    { label: 'Pending Submissions', value: 5 },
    { label: 'Portal Views (30d)', value: 156 },
    { label: 'Avg Response Time', value: '2.3 days' },
  ];

  const recentActivity = [
    { sub: 'Martinez Electric Co.', action: 'Submitted waiver', time: '2 hours ago' },
    { sub: 'Johnson Plumbing LLC', action: 'Viewed portal', time: '4 hours ago' },
    { sub: 'ABC Roofing', action: 'Uploaded COI', time: '1 day ago' },
    { sub: 'Superior Drywall Inc.', action: 'Submitted waiver', time: '2 days ago' },
  ];

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Subcontractor Portal</h1>
          <p className="page-subtitle">Self-service portal for subcontractor document submission</p>
        </div>
        <button className="btn btn-primary">
          <Settings size={16} />
          Configure Portal
        </button>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Portal Link</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            flex: 1, 
            padding: '12px 16px', 
            background: '#f8f9fa', 
            borderRadius: '8px', 
            fontFamily: 'monospace',
            fontSize: '14px',
          }}>
            {portalUrl}
          </div>
          <button className="btn btn-secondary">
            <Copy size={16} />
            Copy
          </button>
          <button className="btn btn-secondary">
            <ExternalLink size={16} />
            Open
          </button>
        </div>
      </div>

      <div className="stats-row" style={{ marginBottom: '32px' }}>
        {portalStats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Portal Features</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: <Users size={18} />, label: 'Subcontractor self-registration', enabled: true },
              { icon: <Link size={18} />, label: 'Waiver submission', enabled: true },
              { icon: <Eye size={18} />, label: 'Document status tracking', enabled: true },
              { icon: <Settings size={18} />, label: 'COI upload', enabled: true },
            ].map((feature, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#666' }}>
                  {feature.icon}
                  <span>{feature.label}</span>
                </div>
                <div style={{
                  width: '40px',
                  height: '24px',
                  borderRadius: '12px',
                  background: feature.enabled ? '#111' : '#e5e5e5',
                  position: 'relative',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#fff',
                    position: 'absolute',
                    top: '2px',
                    left: feature.enabled ? '18px' : '2px',
                    transition: 'left 0.2s',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentActivity.map((activity, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 500, marginBottom: '2px' }}>{activity.sub}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{activity.action}</div>
                </div>
                <span style={{ fontSize: '12px', color: '#999' }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPortal;

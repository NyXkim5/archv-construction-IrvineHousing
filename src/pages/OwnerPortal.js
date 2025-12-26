import React from 'react';
import { ExternalLink, Copy, Settings, Eye, FileText, DollarSign, Shield } from 'lucide-react';

const OwnerPortal = () => {
  const portalUrl = 'https://portal.archv.ai/owner/metro-development';
  
  const portalStats = [
    { label: 'Active Projects', value: 3 },
    { label: 'Pending Approvals', value: 2 },
    { label: 'Portal Views (30d)', value: 45 },
    { label: 'Total Contract Value', value: '$44.7M' },
  ];

  const owners = [
    { name: 'Metro Development Corp', projects: 1, lastAccess: '2 hours ago' },
    { name: 'Sunset Living LLC', projects: 1, lastAccess: '1 day ago' },
    { name: 'Pacific Hospitality Group', projects: 1, lastAccess: '3 days ago' },
  ];

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Owner Portal</h1>
          <p className="page-subtitle">Project visibility and approval portal for owners</p>
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
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Owner Access</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {owners.map((owner, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px',
                background: '#f8f9fa',
                borderRadius: '8px',
              }}>
                <div>
                  <div style={{ fontWeight: 500, marginBottom: '4px' }}>{owner.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{owner.projects} project(s)</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#999' }}>Last access</div>
                  <div style={{ fontSize: '13px' }}>{owner.lastAccess}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Portal Features</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: <Eye size={18} />, label: 'Project dashboard view', enabled: true },
              { icon: <FileText size={18} />, label: 'Waiver status visibility', enabled: true },
              { icon: <DollarSign size={18} />, label: 'Pay application approval', enabled: true },
              { icon: <Shield size={18} />, label: 'Compliance reports', enabled: true },
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
      </div>
    </div>
  );
};

export default OwnerPortal;

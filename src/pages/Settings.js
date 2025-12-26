import React, { useState } from 'react';
import { User, Building2, Bell, Mail, Shield, Users, Zap, Link, CreditCard } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('company');

  const tabs = [
    { id: 'company', label: 'Company', icon: <Building2 size={18} /> },
    { id: 'users', label: 'Team', icon: <Users size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'autochase', label: 'Auto-Chase', icon: <Mail size={18} /> },
    { id: 'integrations', label: 'Integrations', icon: <Link size={18} /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
  ];

  const teamMembers = [
    { name: 'John Smith', email: 'john@company.com', role: 'Admin', status: 'Active' },
    { name: 'Sarah Chen', email: 'sarah@company.com', role: 'Manager', status: 'Active' },
    { name: 'Mike Johnson', email: 'mike@company.com', role: 'User', status: 'Active' },
    { name: 'Lisa Park', email: 'lisa@company.com', role: 'User', status: 'Invited' },
  ];

  const integrations = [
    { name: 'QuickBooks', description: 'Sync payments and invoices', connected: true },
    { name: 'Procore', description: 'Import projects and contacts', connected: false },
    { name: 'DocuSign', description: 'E-signatures for waivers', connected: true },
    { name: 'Sage 300', description: 'Accounting integration', connected: false },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account and preferences</p>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ width: '220px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === tab.id ? '#111' : 'transparent',
                  color: activeTab === tab.id ? '#fff' : '#666',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {activeTab === 'company' && (
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Company Information</h3>
              <div style={{ display: 'grid', gap: '20px', maxWidth: '500px' }}>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" defaultValue="ABC General Contractors" />
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-input" defaultValue="123 Construction Way, Los Angeles, CA 90001" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-input" defaultValue="(555) 123-4567" />
                </div>
                <div className="form-group">
                  <label className="form-label">License Number</label>
                  <input type="text" className="form-input" defaultValue="CA-12345678" />
                </div>
                <button className="btn btn-primary" style={{ width: 'fit-content' }}>Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Team Members</h3>
                <button className="btn btn-primary">Invite User</button>
              </div>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #e5e5e5', fontSize: '12px', color: '#666' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #e5e5e5', fontSize: '12px', color: '#666' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #e5e5e5', fontSize: '12px', color: '#666' }}>Role</th>
                    <th style={{ textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #e5e5e5', fontSize: '12px', color: '#666' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr key={index}>
                      <td style={{ padding: '16px 0', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            background: '#111', 
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 600,
                          }}>
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span style={{ fontWeight: 500 }}>{member.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 0', borderBottom: '1px solid #e5e5e5', color: '#666' }}>{member.email}</td>
                      <td style={{ padding: '16px 0', borderBottom: '1px solid #e5e5e5' }}>{member.role}</td>
                      <td style={{ padding: '16px 0', borderBottom: '1px solid #e5e5e5' }}>
                        <span style={{ 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          fontSize: '12px',
                          background: member.status === 'Active' ? '#d1fae5' : '#fef3c7',
                          color: member.status === 'Active' ? '#065f46' : '#92400e',
                        }}>
                          {member.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Notification Preferences</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'Waiver received', description: 'When a subcontractor submits a waiver' },
                  { label: 'Waiver overdue', description: 'When a waiver passes its due date' },
                  { label: 'COI expiring', description: '30 days before insurance expires' },
                  { label: 'Pay app submitted', description: 'When a pay application is submitted' },
                  { label: 'Daily digest', description: 'Summary of all activity' },
                ].map((notification, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 500, marginBottom: '4px' }}>{notification.label}</div>
                      <div style={{ fontSize: '13px', color: '#666' }}>{notification.description}</div>
                    </div>
                    <div style={{
                      width: '44px',
                      height: '24px',
                      borderRadius: '12px',
                      background: '#111',
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
                        left: '22px',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'autochase' && (
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Auto-Chase Configuration</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Automatically send reminder emails to subcontractors for pending waivers and expiring documents.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
                <div className="form-group">
                  <label className="form-label">First reminder</label>
                  <select className="form-select">
                    <option>3 days before due</option>
                    <option>5 days before due</option>
                    <option>7 days before due</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Second reminder</label>
                  <select className="form-select">
                    <option>On due date</option>
                    <option>1 day after due</option>
                    <option>3 days after due</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Follow-up frequency</label>
                  <select className="form-select">
                    <option>Every 3 days</option>
                    <option>Every 5 days</option>
                    <option>Every 7 days</option>
                  </select>
                </div>
                <button className="btn btn-primary" style={{ width: 'fit-content' }}>Save Settings</button>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Integrations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {integrations.map((integration, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                  }}>
                    <div>
                      <div style={{ fontWeight: 500, marginBottom: '4px' }}>{integration.name}</div>
                      <div style={{ fontSize: '13px', color: '#666' }}>{integration.description}</div>
                    </div>
                    <button className={`btn ${integration.connected ? 'btn-secondary' : 'btn-primary'}`}>
                      {integration.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="card">
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Billing & Subscription</h3>
              <div style={{ 
                padding: '24px', 
                background: '#f8f9fa', 
                borderRadius: '8px',
                marginBottom: '24px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>CURRENT PLAN</div>
                    <div style={{ fontSize: '24px', fontWeight: 600 }}>Professional</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '24px', fontWeight: 600 }}>$299<span style={{ fontSize: '14px', color: '#666' }}>/mo</span></div>
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Unlimited projects • Unlimited users • All features
                </div>
              </div>
              <button className="btn btn-secondary">Manage Subscription</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;

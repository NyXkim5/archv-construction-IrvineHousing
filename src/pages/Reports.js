import React from 'react';
import { Download, FileText, Calendar, BarChart3, PieChart, TrendingUp, Clock, Building2, Shield, DollarSign } from 'lucide-react';

const Reports = () => {
  const reportCategories = [
    {
      title: 'Executive Reports',
      reports: [
        { name: 'Portfolio Compliance Summary', description: 'Cross-portfolio compliance status for all regions', icon: <Building2 size={20} /> },
        { name: 'Lien Exposure Analysis', description: 'Total exposure by project with risk assessment', icon: <Shield size={20} /> },
        { name: 'Payment Status Dashboard', description: 'Outstanding payments and pending waivers by project', icon: <DollarSign size={20} /> },
      ],
    },
    {
      title: 'Compliance Reports',
      reports: [
        { name: 'CA Civil Code Compliance', description: 'California §8000-9566 compliance audit trail', icon: <FileText size={20} /> },
        { name: 'COI Expiration Report', description: 'Insurance certificates expiring in 30/60/90 days', icon: <Calendar size={20} /> },
        { name: 'Preliminary Notice Tracking', description: '20-day notice status for all active subcontractors', icon: <Clock size={20} /> },
      ],
    },
    {
      title: 'Financial Reports',
      reports: [
        { name: 'Payment Application Summary', description: 'Pay apps by project with approval status', icon: <TrendingUp size={20} /> },
        { name: 'Retainage Analysis', description: 'Retainage held and release schedule by region', icon: <PieChart size={20} /> },
        { name: 'Contract Value Report', description: 'Original vs current values with change order impact', icon: <BarChart3 size={20} /> },
      ],
    },
    {
      title: 'Regional Reports',
      reports: [
        { name: 'Orange County Portfolio', description: 'All OC projects compliance and payment status', icon: <Building2 size={20} /> },
        { name: 'Silicon Valley Portfolio', description: 'Bay Area projects compliance and payment status', icon: <Building2 size={20} /> },
        { name: 'San Diego Portfolio', description: 'SD region projects compliance and payment status', icon: <Building2 size={20} /> },
      ],
    },
  ];

  const recentReports = [
    { name: 'Portfolio Compliance Summary', project: 'All Regions', date: 'Dec 23, 2024', format: 'PDF', size: '2.4 MB' },
    { name: 'Irvine Spectrum Phase 3 Status', project: 'Irvine Spectrum', date: 'Dec 22, 2024', format: 'Excel', size: '1.8 MB' },
    { name: 'Q4 Lien Exposure Analysis', project: 'All Projects', date: 'Dec 20, 2024', format: 'PDF', size: '3.1 MB' },
    { name: 'COI Expiration Alert', project: 'All Projects', date: 'Dec 18, 2024', format: 'PDF', size: '845 KB' },
  ];

  const scheduledReports = [
    { name: 'Weekly Compliance Summary', frequency: 'Every Monday', recipients: 8 },
    { name: 'Monthly Executive Dashboard', frequency: '1st of month', recipients: 12 },
    { name: 'COI Expiration Alerts', frequency: 'Daily', recipients: 24 },
  ];

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">Irvine Company Compliance & Financial Reporting</p>
        </div>
        <button className="btn btn-primary">
          <FileText size={16} />
          Custom Report Builder
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div>
          {reportCategories.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="card" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    padding: '20px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '8px', 
                        background: '#f3f4f6', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#666',
                      }}>
                        {report.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: '4px' }}>{report.name}</div>
                        <div style={{ fontSize: '13px', color: '#666' }}>{report.description}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                        <Download size={14} />
                        PDF
                      </button>
                      <button className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                        Excel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="card" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Recent Reports</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentReports.map((report, index) => (
                <div key={index} style={{ 
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontWeight: 500, marginBottom: '4px' }}>{report.name}</div>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{report.project}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#999' }}>{report.date}</span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: '#666' }}>{report.size}</span>
                      <span style={{ 
                        fontSize: '11px', 
                        padding: '2px 8px', 
                        background: '#e5e5e5', 
                        borderRadius: '4px',
                      }}>
                        {report.format}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Scheduled Reports</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {scheduledReports.map((report, index) => (
                <div key={index} style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < scheduledReports.length - 1 ? '1px solid #e5e5e5' : 'none',
                }}>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: '2px', fontSize: '14px' }}>{report.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{report.frequency}</div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#999' }}>{report.recipients} recipients</span>
                </div>
              ))}
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '16px' }}>
              Manage Schedules
            </button>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', color: '#fff' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>Owner Portal Export</h3>
            <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>
              Generate compliance package for property owners and investors.
            </p>
            <button className="btn" style={{ width: '100%', background: '#fff', color: '#111' }}>
              Generate Owner Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

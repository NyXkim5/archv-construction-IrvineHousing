import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  DollarSign,
  Building2,
  Users,
  ArrowRight,
  MapPin
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Active Projects', value: '24', change: '+3', trend: 'up' },
    { label: 'Total Waivers', value: '1,847', change: '+12%', trend: 'up' },
    { label: 'Pending Review', value: '156', change: '-8%', trend: 'down' },
    { label: 'Compliance Rate', value: '94.2%', change: '+2.1%', trend: 'up' },
    { label: 'At Risk', value: '12', change: '-3', trend: 'down' },
  ];

  const recentActivity = [
    { id: 1, type: 'waiver', action: 'Turner Construction submitted waiver for Irvine Spectrum Phase 3', time: '5 min ago', status: 'received' },
    { id: 2, type: 'payment', action: 'Pay App #47 approved - One Irvine Tower', time: '22 min ago', status: 'approved' },
    { id: 3, type: 'insurance', action: 'ACCO Engineered Systems COI expiring in 14 days', time: '1 hour ago', status: 'warning' },
    { id: 4, type: 'waiver', action: 'Southland Industries waiver overdue - Newport Ridge', time: '2 hours ago', status: 'overdue' },
    { id: 5, type: 'project', action: 'Portola Springs Phase 4 budget updated', time: '4 hours ago', status: 'info' },
  ];

  const overdueItems = [
    { sub: 'Swinerton Builders', project: 'Fashion Island Renovation', days: 12, amount: '$2,450,000.00' },
    { sub: 'Webcor Builders', project: 'One Irvine Apartment Tower', days: 8, amount: '$1,890,000.00' },
    { sub: 'Clark Construction', project: 'UTC Retail Expansion', days: 5, amount: '$945,000.00' },
  ];

  const projectSummary = [
    { name: 'Irvine Spectrum Phase 3', location: 'Irvine, CA', progress: 72, waivers: 234, pending: 18, value: '$485M' },
    { name: 'Fashion Island Renovation', location: 'Newport Beach, CA', progress: 45, waivers: 156, pending: 24, value: '$220M' },
    { name: 'One Irvine Tower', location: 'Irvine, CA', progress: 89, waivers: 312, pending: 8, value: '$340M' },
    { name: 'Portola Springs Phase 4', location: 'Irvine, CA', progress: 28, waivers: 89, pending: 12, value: '$175M' },
  ];

  const complianceByRegion = [
    { region: 'Orange County', projects: 14, compliance: 96.2 },
    { region: 'Silicon Valley', projects: 5, compliance: 92.8 },
    { region: 'San Diego', projects: 3, compliance: 94.5 },
    { region: 'West Los Angeles', projects: 2, compliance: 91.3 },
  ];

  return (
    <div className="page-container dashboard">
      <div className="page-header">
        <div>
          <h1 className="page-title">Portfolio Dashboard</h1>
          <p className="page-subtitle">Irvine Company Construction Compliance Overview</p>
        </div>
        <div className="header-actions">
          <select className="region-select">
            <option>All Regions</option>
            <option>Orange County</option>
            <option>Silicon Valley</option>
            <option>San Diego</option>
            <option>West Los Angeles</option>
          </select>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-change ${stat.trend}`}>
                {stat.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.change}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card activity-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <button className="link-btn">View All <ArrowRight size={14} /></button>
          </div>
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div key={item.id} className="activity-item">
                <div className={`activity-icon ${item.status}`}>
                  {item.status === 'received' && <FileText size={16} />}
                  {item.status === 'approved' && <CheckCircle2 size={16} />}
                  {item.status === 'warning' && <AlertTriangle size={16} />}
                  {item.status === 'overdue' && <Clock size={16} />}
                  {item.status === 'info' && <Building2 size={16} />}
                </div>
                <div className="activity-content">
                  <p className="activity-action">{item.action}</p>
                  <span className="activity-time">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card overdue-card">
          <div className="card-header">
            <h3 className="card-title">
              <AlertTriangle size={18} className="warning-icon" />
              Overdue Waivers
            </h3>
            <span className="overdue-count">{overdueItems.length} items • $5.28M at risk</span>
          </div>
          <div className="overdue-list">
            {overdueItems.map((item, index) => (
              <div key={index} className="overdue-item">
                <div className="overdue-info">
                  <p className="overdue-sub">{item.sub}</p>
                  <span className="overdue-project">{item.project}</span>
                </div>
                <div className="overdue-details">
                  <span className="overdue-days">{item.days}d overdue</span>
                  <span className="overdue-amount">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card projects-card">
          <div className="card-header">
            <h3 className="card-title">Active Projects</h3>
            <button className="link-btn">All Projects <ArrowRight size={14} /></button>
          </div>
          <div className="projects-list">
            {projectSummary.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <div>
                    <p className="project-name">{project.name}</p>
                    <span className="project-location"><MapPin size={12} /> {project.location}</span>
                  </div>
                  <span className="project-value">{project.value}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="project-stats">
                  <span>{project.progress}% complete</span>
                  <span>{project.waivers} waivers</span>
                  <span className={project.pending > 15 ? 'text-warning' : ''}>{project.pending} pending</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card compliance-card">
          <h3 className="card-title">Compliance by Region</h3>
          <div className="compliance-list">
            {complianceByRegion.map((region, index) => (
              <div key={index} className="compliance-item">
                <div className="compliance-info">
                  <p className="compliance-region">{region.region}</p>
                  <span className="compliance-projects">{region.projects} projects</span>
                </div>
                <div className="compliance-score">
                  <div className="compliance-bar">
                    <div 
                      className="compliance-fill" 
                      style={{ 
                        width: `${region.compliance}%`,
                        background: region.compliance >= 95 ? '#22c55e' : region.compliance >= 90 ? '#f59e0b' : '#ef4444'
                      }}
                    ></div>
                  </div>
                  <span className={`compliance-percent ${region.compliance >= 95 ? 'good' : region.compliance >= 90 ? 'warning' : 'danger'}`}>
                    {region.compliance}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card quick-actions-card">
          <h3 className="card-title">Quick Actions</h3>
          <div className="quick-actions">
            <button className="quick-action">
              <FileText size={20} />
              <span>Request Waiver</span>
            </button>
            <button className="quick-action">
              <DollarSign size={20} />
              <span>New Pay App</span>
            </button>
            <button className="quick-action">
              <Users size={20} />
              <span>Add Contractor</span>
            </button>
            <button className="quick-action">
              <Building2 size={20} />
              <span>New Project</span>
            </button>
          </div>
        </div>

        <div className="card california-compliance">
          <h3 className="card-title">California Compliance</h3>
          <div className="ca-stats">
            <div className="ca-stat">
              <span className="ca-stat-value">100%</span>
              <span className="ca-stat-label">Preliminary Notices Filed</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat-value">98.4%</span>
              <span className="ca-stat-label">Conditional Waivers Current</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat-value">0</span>
              <span className="ca-stat-label">Lien Exposure</span>
            </div>
          </div>
          <p className="ca-note">All projects compliant with CA Civil Code §8000-9566</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, MapPin, Calendar, DollarSign, Users, Filter, Download } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [regionFilter, setRegionFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Irvine Spectrum Phase 3',
      type: 'Mixed-Use Retail',
      client: 'Irvine Company Retail',
      location: 'Irvine, CA',
      region: 'Orange County',
      value: 485000000,
      startDate: 'Mar 2024',
      endDate: 'Dec 2026',
      progress: 72,
      subcontractors: 48,
      activeWaivers: 234,
      pendingWaivers: 18,
      status: 'active',
    },
    {
      id: 2,
      name: 'Fashion Island Renovation',
      type: 'Retail Renovation',
      client: 'Irvine Company Retail',
      location: 'Newport Beach, CA',
      region: 'Orange County',
      value: 220000000,
      startDate: 'Jun 2024',
      endDate: 'Aug 2025',
      progress: 45,
      subcontractors: 32,
      activeWaivers: 156,
      pendingWaivers: 24,
      status: 'active',
    },
    {
      id: 3,
      name: 'One Irvine Apartment Tower',
      type: 'Residential High-Rise',
      client: 'Irvine Company Apartments',
      location: 'Irvine, CA',
      region: 'Orange County',
      value: 340000000,
      startDate: 'Jan 2023',
      endDate: 'Mar 2025',
      progress: 89,
      subcontractors: 56,
      activeWaivers: 312,
      pendingWaivers: 8,
      status: 'active',
    },
    {
      id: 4,
      name: 'Portola Springs Phase 4',
      type: 'Residential Community',
      client: 'Irvine Company Community Dev',
      location: 'Irvine, CA',
      region: 'Orange County',
      value: 175000000,
      startDate: 'Sep 2024',
      endDate: 'Jun 2026',
      progress: 28,
      subcontractors: 24,
      activeWaivers: 89,
      pendingWaivers: 12,
      status: 'active',
    },
    {
      id: 5,
      name: 'UTC Retail Expansion',
      type: 'Retail Expansion',
      client: 'Irvine Company Retail',
      location: 'San Diego, CA',
      region: 'San Diego',
      value: 165000000,
      startDate: 'Apr 2024',
      endDate: 'Nov 2025',
      progress: 52,
      subcontractors: 28,
      activeWaivers: 124,
      pendingWaivers: 15,
      status: 'active',
    },
    {
      id: 6,
      name: 'Santa Clara Office Campus',
      type: 'Office Campus',
      client: 'Irvine Company Office',
      location: 'Santa Clara, CA',
      region: 'Silicon Valley',
      value: 520000000,
      startDate: 'Feb 2024',
      endDate: 'Sep 2026',
      progress: 38,
      subcontractors: 62,
      activeWaivers: 198,
      pendingWaivers: 28,
      status: 'active',
    },
    {
      id: 7,
      name: 'Newport Ridge Residential',
      type: 'Residential Community',
      client: 'Irvine Company Community Dev',
      location: 'Newport Coast, CA',
      region: 'Orange County',
      value: 290000000,
      startDate: 'Nov 2023',
      endDate: 'Apr 2025',
      progress: 78,
      subcontractors: 38,
      activeWaivers: 267,
      pendingWaivers: 6,
      status: 'active',
    },
    {
      id: 8,
      name: 'Woodbury Town Center Phase 2',
      type: 'Mixed-Use',
      client: 'Irvine Company Retail',
      location: 'Irvine, CA',
      region: 'Orange County',
      value: 145000000,
      startDate: 'Aug 2025',
      endDate: 'Dec 2027',
      progress: 0,
      subcontractors: 0,
      activeWaivers: 0,
      pendingWaivers: 0,
      status: 'planning',
    },
  ];

  const formatAmount = (amount) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    }
    return `$${(amount / 1000000).toFixed(0)}M`;
  };

  const filteredProjects = projects.filter(p => 
    (regionFilter === 'all' || p.region === regionFilter) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     p.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalValue = filteredProjects.reduce((sum, p) => sum + p.value, 0);
  const totalSubs = filteredProjects.reduce((sum, p) => sum + p.subcontractors, 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Irvine Company Active Developments</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Download size={16} />
            Export
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            New Project
          </button>
        </div>
      </div>

      <div className="projects-summary">
        <div className="summary-stat">
          <span className="summary-value">{filteredProjects.length}</span>
          <span className="summary-label">Active Projects</span>
        </div>
        <div className="summary-stat">
          <span className="summary-value">{formatAmount(totalValue)}</span>
          <span className="summary-label">Total Value</span>
        </div>
        <div className="summary-stat">
          <span className="summary-value">{totalSubs}</span>
          <span className="summary-label">Subcontractors</span>
        </div>
        <div className="summary-stat">
          <span className="summary-value">4</span>
          <span className="summary-label">Regions</span>
        </div>
      </div>

      <div className="projects-toolbar">
        <div className="toolbar-left">
          <div className="search-box" style={{ width: '300px' }}>
            <Search size={18} color="#999" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="filter-select"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="Orange County">Orange County</option>
            <option value="Silicon Valley">Silicon Valley</option>
            <option value="San Diego">San Diego</option>
            <option value="West Los Angeles">West Los Angeles</option>
          </select>
        </div>
        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''} 
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''} 
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <div>
                <span className="project-type">{project.type}</span>
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-client">{project.client}</p>
              </div>
              <span className={`status-badge status-${project.status}`}>
                {project.status}
              </span>
            </div>

            <div className="project-card-meta">
              <div className="meta-item">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
              <div className="meta-item">
                <DollarSign size={14} />
                <span>{formatAmount(project.value)}</span>
              </div>
            </div>

            <div className="project-card-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>

            <div className="project-card-stats">
              <div className="project-stat">
                <Users size={16} />
                <span>{project.subcontractors} Subs</span>
              </div>
              <div className="project-stat">
                <span>{project.activeWaivers} Waivers</span>
              </div>
              {project.pendingWaivers > 0 && (
                <div className="project-stat pending">
                  <span>{project.pendingWaivers} Pending</span>
                </div>
              )}
            </div>

            <div className="project-card-footer">
              <div className="project-dates">
                <Calendar size={14} />
                <span>{project.startDate} - {project.endDate}</span>
              </div>
              <button className="action-menu">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

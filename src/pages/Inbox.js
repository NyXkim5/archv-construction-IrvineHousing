import React, { useState } from 'react';
import { Mail, MailOpen, AlertCircle, CheckCircle, Clock, Archive, Star, Filter } from 'lucide-react';
import './Inbox.css';

const Inbox = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'waiver',
      title: 'Waiver Received',
      message: 'ABC Roofing submitted Conditional Final waiver for Riverside Apartments',
      time: '2 min ago',
      read: false,
      priority: 'normal',
    },
    {
      id: 2,
      type: 'alert',
      title: 'COI Expiring Soon',
      message: 'Martinez Electric Co. insurance certificate expires in 7 days',
      time: '1 hour ago',
      read: false,
      priority: 'high',
    },
    {
      id: 3,
      type: 'overdue',
      title: 'Waiver Overdue',
      message: 'Steel Structures Ltd. waiver is 40 days overdue - Downtown Office Complex',
      time: '3 hours ago',
      read: false,
      priority: 'urgent',
    },
    {
      id: 4,
      type: 'approval',
      title: 'Pay App Approved',
      message: 'Pay Application #12 for Harbor View Hotel has been approved',
      time: '5 hours ago',
      read: true,
      priority: 'normal',
    },
    {
      id: 5,
      type: 'chase',
      title: 'Auto-Chase Sent',
      message: 'Reminder sent to Superior Drywall Inc. for pending waiver',
      time: '1 day ago',
      read: true,
      priority: 'normal',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'waiver': return <Mail size={20} />;
      case 'alert': return <AlertCircle size={20} />;
      case 'overdue': return <Clock size={20} />;
      case 'approval': return <CheckCircle size={20} />;
      case 'chase': return <MailOpen size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'urgent': return 'priority-urgent';
      case 'high': return 'priority-high';
      default: return 'priority-normal';
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Inbox</h1>
        <p className="page-subtitle">Notifications and alerts</p>
      </div>

      <div className="inbox-container">
        <div className="inbox-sidebar">
          <button className={`inbox-filter ${selectedFilter === 'all' ? 'active' : ''}`} onClick={() => setSelectedFilter('all')}>
            <Mail size={18} />
            <span>All</span>
            <span className="filter-count">5</span>
          </button>
          <button className={`inbox-filter ${selectedFilter === 'unread' ? 'active' : ''}`} onClick={() => setSelectedFilter('unread')}>
            <MailOpen size={18} />
            <span>Unread</span>
            <span className="filter-count">3</span>
          </button>
          <button className={`inbox-filter ${selectedFilter === 'urgent' ? 'active' : ''}`} onClick={() => setSelectedFilter('urgent')}>
            <AlertCircle size={18} />
            <span>Urgent</span>
            <span className="filter-count urgent">1</span>
          </button>
          <button className={`inbox-filter ${selectedFilter === 'archived' ? 'active' : ''}`} onClick={() => setSelectedFilter('archived')}>
            <Archive size={18} />
            <span>Archived</span>
          </button>
        </div>

        <div className="inbox-main">
          <div className="inbox-header">
            <button className="btn btn-secondary">
              <Filter size={16} />
              Filter
            </button>
            <button className="btn btn-secondary">Mark all as read</button>
          </div>

          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
                <div className={`notification-icon ${getPriorityClass(notification.priority)}`}>
                  {getIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4 className="notification-title">{notification.title}</h4>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  <p className="notification-message">{notification.message}</p>
                </div>
                <button className="notification-action">
                  <Star size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

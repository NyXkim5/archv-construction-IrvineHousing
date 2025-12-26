import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  FileText,
  CreditCard,
  Shield,
  FolderOpen,
  Users,
  FileSignature,
  FilePlus,
  UserCheck,
  FileCheck,
  Clock,
  UserCircle,
  Home,
  BarChart3,
  Settings,
  Star,
  ChevronDown,
  ChevronRight,
  Percent,
  Mail,
  Building2,
  Zap,
  X,
  Send,
  Sparkles
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState({});
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Archv Ink. I can help you navigate the platform, create waivers, check compliance status, or answer any questions. What would you like to do?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { label: 'Create new waiver', action: () => navigate('/lien-waivers') },
    { label: 'Check overdue items', action: () => navigate('/') },
    { label: 'View compliance status', action: () => navigate('/insurance') },
    { label: 'Generate report', action: () => navigate('/reports') },
  ];

  const handleSend = () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput.trim().toLowerCase();
    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI response with navigation hints
    setTimeout(() => {
      let response = "I can help you with that! ";
      
      if (userMessage.includes('waiver') || userMessage.includes('lien')) {
        response = "I can help with lien waivers! Go to **Lien Waivers** to create, track, or manage waivers. Would you like me to take you there?";
      } else if (userMessage.includes('pay') || userMessage.includes('payment') || userMessage.includes('invoice')) {
        response = "For payments, check out **Pay Applications** to create and track payment requests. You can also view **Retainage** for held amounts.";
      } else if (userMessage.includes('insurance') || userMessage.includes('coi') || userMessage.includes('certificate')) {
        response = "Head to **Insurance (COIs)** to track certificates, see expirations, and request updated docs from subs.";
      } else if (userMessage.includes('project')) {
        response = "Go to **All Projects** to see your active projects, progress, and linked subcontractors.";
      } else if (userMessage.includes('sub') || userMessage.includes('contractor')) {
        response = "Check **Subcontractors** for your full directory, or **Sub Portal** to configure their self-service access.";
      } else if (userMessage.includes('report') || userMessage.includes('export')) {
        response = "**Reports** has compliance summaries, payment reports, and exportable data for audits and owners.";
      } else if (userMessage.includes('overdue') || userMessage.includes('urgent') || userMessage.includes('alert')) {
        response = "Check your **Dashboard** for overdue waivers and urgent items, or **Inbox** for all notifications.";
      } else if (userMessage.includes('help') || userMessage.includes('how')) {
        response = "I can help you navigate anywhere! Try asking about waivers, payments, insurance, projects, or reports. Or use the quick actions below.";
      } else {
        response = "I can help you navigate the platform. Try asking about waivers, pay applications, insurance, projects, or reports!";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleSection = (section) => {
    setCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const isActive = (path) => location.pathname === path;
  const isSectionActive = (paths) => paths.some(path => location.pathname.startsWith(path));

  const navSections = [
    {
      id: 'overview',
      title: 'OVERVIEW',
      items: [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/inbox', icon: Inbox, label: 'Inbox', badge: 5 },
      ]
    },
    {
      id: 'payments',
      title: 'PAYMENTS',
      items: [
        { path: '/pay-applications', icon: CreditCard, label: 'Pay Applications' },
        { path: '/lien-waivers', icon: FileText, label: 'Lien Waivers' },
        { path: '/retainage', icon: Percent, label: 'Retainage' },
      ]
    },
    {
      id: 'compliance',
      title: 'COMPLIANCE',
      items: [
        { path: '/insurance', icon: Shield, label: 'Insurance (COIs)' },
        { path: '/prequalification', icon: UserCheck, label: 'Prequalification' },
        { path: '/state-forms', icon: FileCheck, label: 'State Forms' },
        { path: '/change-orders', icon: FilePlus, label: 'Change Orders' },
      ]
    },
    {
      id: 'projects',
      title: 'PROJECTS',
      items: [
        { path: '/projects', icon: FolderOpen, label: 'All Projects' },
        { path: '/subcontractors', icon: Users, label: 'Subcontractors' },
        { path: '/contracts', icon: FileSignature, label: 'Contracts' },
        { path: '/audit-trail', icon: Clock, label: 'Audit Trail' },
      ]
    },
    {
      id: 'portals',
      title: 'PORTALS',
      items: [
        { path: '/sub-portal', icon: UserCircle, label: 'Sub Portal' },
        { path: '/owner-portal', icon: Home, label: 'Owner Portal' },
      ]
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Building2 size={24} />
          <span>ARCHV</span>
        </div>
        <span className="logo-sub">CONSTRUCTION</span>
      </div>

      {/* Archv Ink Chat Box */}
      <div className={`archv-ink-box ${chatOpen ? 'expanded' : ''}`} onClick={() => !chatOpen && setChatOpen(true)}>
        <div className="archv-ink-header">
          <div className="archv-ink-title-row">
            <Sparkles size={16} />
            <span className="archv-ink-title">Archv Ink</span>
          </div>
          {chatOpen && (
            <button className="close-chat-btn" onClick={(e) => { e.stopPropagation(); setChatOpen(false); }}>
              <X size={16} />
            </button>
          )}
        </div>
        
        {!chatOpen ? (
          <span className="archv-ink-subtitle">Need help? Click to chat</span>
        ) : (
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-message assistant typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button key={index} className="quick-action-btn" onClick={action.action}>
                  {action.label}
                </button>
              ))}
            </div>
            
            <div className="chat-input-container">
              <input
                type="text"
                placeholder="Ask anything..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="chat-input"
              />
              <button className="send-btn" onClick={handleSend}>
                <Send size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        {navSections.map((section) => (
          <div key={section.id} className="nav-section">
            <div className="nav-section-title">{section.title}</div>
            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </NavLink>
            ))}
          </div>
        ))}

        <div className="nav-section">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <BarChart3 size={18} />
            <span>Reports</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">SYSTEM</div>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-footer">
        <span className="version">v1.0.0</span>
        <span className="brand">archv.ai</span>
      </div>
    </aside>
  );
};

export default Sidebar;

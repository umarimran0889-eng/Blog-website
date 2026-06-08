import React, { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import BlogsPanel from './pages/BlogsPanel';
import ReviewsPanel from './pages/ReviewsPanel';
import UsersPanel from './pages/UsersPanel';
import { MdDashboard, MdRateReview, MdPeople } from 'react-icons/md';
import { FiMenu, FiGlobe, FiX, FiLogOut, FiChevronDown } from 'react-icons/fi';
import './AdminDashboard.css';

const ADMIN_EMAIL = 'umarimran0889@gmail.com';

const menuItems = [
  { id: 'blogs',   label: 'Blog Posts', icon: <MdDashboard /> },
  { id: 'reviews', label: 'Reviews',    icon: <MdRateReview /> },
  { id: 'users',   label: 'Users',      icon: <MdPeople /> },
];

function AdminDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('blogs');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  function handleMenuClick(id) {
    setActivePage(id);
    setMobileOpen(false);
  }

  async function handleLogout() {
    try {
      if (logout) {
        await logout();
      }
      navigate('/');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  function renderPage() {
    if (activePage === 'blogs')   return <BlogsPanel />;
    if (activePage === 'reviews') return <ReviewsPanel />;
    if (activePage === 'users')   return <UsersPanel />;
  }

  function getPageTitle() {
    return menuItems.find((item) => item.id === activePage)?.label || '';
  }

  const adminName = currentUser?.displayName || currentUser?.email || 'Admin';

  return (
    <div className="admin-layout">

      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={`
        admin-sidebar
        ${sidebarOpen ? 'open' : 'collapsed'}
        ${mobileOpen ? 'mobile-open' : ''}
      `}>

        <div className="sidebar-logo">
          {sidebarOpen ? <span>⚙️ Admin Panel</span> : <span>⚙️</span>}
          <button className="sidebar-close-btn" onClick={() => setMobileOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {sidebarOpen && <span className="sidebar-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="sidebar-item" onClick={() => navigate('/')}>
            <span className="sidebar-icon"><FiGlobe /></span>
            {sidebarOpen && <span className="sidebar-label">View Website</span>}
          </button>
        </div>

      </aside>

      <div className="admin-main">

        <header className="admin-topbar">

          <div className="topbar-left">
            <button
              className="toggle-sidebar-btn desktop-only"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu />
            </button>
            <button
              className="toggle-sidebar-btn mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <FiMenu />
            </button>
            <h1 className="topbar-title">{getPageTitle()}</h1>
          </div>

          <div className="topbar-right">
            <div className="profile-dropdown-container" ref={profileRef}>
              
             <button 
                className={`profile-trigger-btn ${showProfileDropdown ? 'active' : ''}`}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <div className="admin-avatar">
                  {adminName[0]?.toUpperCase()}
                </div>
                <FiChevronDown className="arrow-icon" />
              </button>

              {showProfileDropdown && (
                <div className="profile-popup">                  
                  <div className="profile-popup-header">
                    <span className="admin-role-tag">Admin</span>
                    <p className="welcome-text">Welcome back,</p>
                    <p className="welcome-name">{adminName}</p>
                  </div>
                  
                  <div className="profile-popup-divider"></div>
                  
                  <div className="profile-popup-body">
                    <button className="logout-btn-dropdown" onClick={handleLogout}>
                      <FiLogOut />
                      <span>Logout</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </header>

        <div className="admin-content">
          {renderPage()}
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
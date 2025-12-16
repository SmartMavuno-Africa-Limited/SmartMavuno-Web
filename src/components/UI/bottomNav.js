import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SmartMavunoBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update active tab based on route
  useEffect(() => {
    const navItems = [
      { id: 'home', label: 'Home', icon: '🏠', path: '/', external: false },
      { id: 'financing', label: 'Financing', icon: '💰', path: '/loans', external: false },
      { id: 'community', label: 'Community', icon: '👥', path: '/community', external: false },
      { id: 'marketplace', label: 'Marketplace', icon: '🛒', path: 'https://marketplace.smartmavuno.com', external: true }
    ];
    
    const currentItem = navItems.find(item => 
      !item.external && location.pathname === item.path
    );
    if (currentItem) {
      setActiveTab(currentItem.id);
    }
  }, [location.pathname]); // No warning now

  const handleNavigation = (item) => {
    setActiveTab(item.id);
    
    if (item.external) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
  };

  if (!isMobile) {
    return null;
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', path: '/', external: false },
    { id: 'financing', label: 'Financing', icon: '💰', path: '/loans', external: false },
    { id: 'community', label: 'Community', icon: '👥', path: '/community', external: false },
    { id: 'marketplace', label: 'Marketplace', icon: '🛒', path: 'https://marketplace.smartmavuno.com', external: true }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e0e0e0',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      padding: '8px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {navItems.map((item) => {
          const isActive = !item.external && activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isActive ? '#2e7d32' : '#666',
                padding: '8px 12px',
                minWidth: '70px',
                borderRadius: '8px',
                position: 'relative',
                transition: 'all 0.2s ease',
                outline: 'none',
                flex: 1
              }}
              aria-label={item.external ? `Open ${item.label} in new tab` : `Go to ${item.label}`}
            >
              <div style={{
                fontSize: '20px',
                marginBottom: '4px',
                transform: isActive ? 'translateY(-2px)' : 'none',
                transition: 'transform 0.2s ease'
              }}>
                {item.icon}
              </div>
              <span style={{
                fontSize: '12px',
                fontWeight: isActive ? '600' : '500'
              }}>
                {item.label}
              </span>
              {item.external && (
                <span style={{
                  position: 'absolute',
                  top: '4px',
                  right: '8px',
                  fontSize: '10px',
                  opacity: 0.7
                }}>
                  ↗
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SmartMavunoBottomNav;
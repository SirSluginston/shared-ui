import React, { useState, useEffect } from 'react';
import { ProjectTitle } from './ProjectTitle';
import { Footer } from './Footer';
import { SunIcon, MoonIcon } from './Icons';

interface NavItem {
  label: string;
  onClick?: () => void;
  children?: { label: string; onClick: () => void }[];
}

interface ShellProps {
  // Top section
  projectTitle: string;
  projectLogo?: React.ReactNode;
  
  // Navbar
  navItems: NavItem[];
  hamburgerMenu?: {
    onClick: () => void;
    visible?: boolean; // Control visibility (e.g., show on mobile only)
  };
  
  // Right side icons
  themeToggle?: React.ReactNode;
  notificationIcon?: React.ReactNode;
  settingsIcon?: React.ReactNode;
  accountIcon?: React.ReactNode;
  
  // Footer
  footerLinks?: Array<{ label: string; url: string }>;
  footerCopyright?: string;
  footerYearCreated?: number; // Year the company/project was created for copyright range
  footerPoweredBy?: string; // e.g., "SirSluginston Co"
  footerStyle?: React.CSSProperties;
  
  // Content
  children: React.ReactNode;
  
  // Theme control
  onThemeToggle?: (darkMode: boolean) => void;
  initialDarkMode?: boolean;
}

export const Shell = ({
  projectTitle,
  projectLogo,
  navItems,
  hamburgerMenu,
  themeToggle,
  notificationIcon,
  settingsIcon,
  accountIcon,
  footerLinks,
  footerCopyright,
  footerYearCreated,
  footerPoweredBy,
  footerStyle,
  children,
  onThemeToggle,
  initialDarkMode = false,
}: ShellProps) => {
  const [darkMode, setDarkMode] = useState(() => 
    typeof document !== 'undefined' ? document.body.classList.contains('dark-mode') : initialDarkMode
  );
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sync darkMode state with body class
  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.body.classList.contains('dark-mode'));
    };
    checkDarkMode();
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    onThemeToggle?.(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
  };


  return (
    <>
      {/* Top Section: ProjectTitle with Logo and Icons */}
      <div
        style={{
          width: '100%',
          background: 'var(--brand-color)',
          position: 'relative',
          padding: 'var(--space-md) 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 100,
        }}
      >
        {/* Project Title - Centered with project-color text, with padding to prevent icon overlap */}
        <div 
          style={{ 
            color: 'var(--project-color)',
            paddingLeft: isMobile && projectLogo ? '60px' : '0',
            paddingRight: isMobile && (themeToggle || accountIcon) ? '100px' : '0',
          }}
        >
          <ProjectTitle title={projectTitle} />
        </div>

        {/* Left: Project Logo - Square container with rounded corners */}
        {projectLogo && (
          <div
            style={{
              position: 'absolute',
              left: isMobile ? 'var(--space-sm)' : 'var(--space-lg)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: isMobile ? 36 : 48,
              height: isMobile ? 36 : 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--project-color)',
              border: '2.5px solid var(--shared-border-color)',
              borderRadius: 'var(--radius-master)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
              zIndex: 101,
              overflow: 'hidden',
            }}
          >
            {projectLogo}
          </div>
        )}

        {/* Right: Theme Toggle + Account Icon - Hide account icon on mobile, smaller theme toggle */}
        <div
          style={{
            position: 'absolute',
            right: isMobile ? 'var(--space-sm)' : 'var(--space-lg)',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 'var(--space-xs)' : 'var(--space-sm)',
            zIndex: 101,
          }}
        >
          {themeToggle || (
            <button
              onClick={handleThemeToggle}
              aria-label="Toggle Dark/Light Mode"
              title="Toggle Dark/Light Mode"
              style={{
                background: 'var(--light-color)',
                border: '2.5px solid var(--shared-border-color)',
                width: isMobile ? 36 : 40,
                height: isMobile ? 36 : 40,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {darkMode ? (
                <MoonIcon size={isMobile ? 18 : 20} color="var(--dark-color)" />
              ) : (
                <SunIcon size={isMobile ? 18 : 20} color="var(--dark-color)" />
              )}
            </button>
          )}
          {/* Notification icon */}
          {notificationIcon && !isMobile && (
            <button
              style={{
                width: isMobile ? 36 : 40,
                height: isMobile ? 36 : 40,
                borderRadius: '50%',
                background: 'var(--light-color)',
                border: '2.5px solid var(--shared-border-color)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Notifications"
            >
              {notificationIcon}
            </button>
          )}
          {/* Settings icon */}
          {settingsIcon && !isMobile && (
            <button
              style={{
                width: isMobile ? 36 : 40,
                height: isMobile ? 36 : 40,
                borderRadius: '50%',
                background: 'var(--light-color)',
                border: '2.5px solid var(--shared-border-color)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Settings"
            >
              {settingsIcon}
            </button>
          )}
          {/* Account icon */}
          {accountIcon && !isMobile && (
            <div
              style={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--light-color)',
                border: '2.5px solid var(--shared-border-color)',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
              }}
            >
              {accountIcon}
            </div>
          )}
        </div>
      </div>

      {/* Navbar Section - Below Title */}
      <nav
        style={{
          width: '100%',
          backgroundColor: 'var(--brand-color)',
          padding: '0 var(--space-lg)',
          boxSizing: 'border-box',
          position: 'sticky',
          top: 0,
          zIndex: 99,
          borderTop: '2.5px solid var(--shared-border-color)',
          borderBottom: '2.5px solid var(--shared-border-color)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 60,
            gap: 'var(--space-md)',
            position: 'relative',
          }}
        >
          {/* Hamburger menu icon - left side, only on mobile or when visible */}
          {hamburgerMenu && (hamburgerMenu.visible !== false || isMobile) && (
            <button
              onClick={hamburgerMenu.onClick}
              aria-label="Toggle Menu"
              style={{
                position: 'absolute',
                left: 'var(--space-md)',
                background: 'var(--project-color)',
                border: 'none',
                color: 'var(--light-color)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 10,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="3" width="18" height="2" rx="1" fill="currentColor" />
                <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
                <rect y="13" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          )}
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <button
                onClick={item.onClick}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--project-color)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  padding: 'var(--space-xs) var(--space-md)',
                  outline: 'none',
                  transition: 'background 0.2s',
                  letterSpacing: '0.025em',
                }}
              >
                {item.label} {item.children && '▾'}
              </button>

              {item.children && activeDropdown === item.label && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: 'var(--light-color)',
                    minWidth: '180px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-master)',
                    padding: 'var(--space-xs) 0',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 200,
                  }}
                >
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={child.onClick}
                      style={{
                        padding: 'var(--space-sm) var(--space-md)',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--dark-color)',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ minHeight: '70vh', background: 'var(--light-color)' }}>
        {children}
      </main>

      {/* Footer */}
      {(footerLinks || footerCopyright || footerYearCreated || footerPoweredBy) && (
        <Footer
          links={footerLinks}
          copyright={footerCopyright}
          yearCreated={footerYearCreated}
          poweredBy={footerPoweredBy}
          style={footerStyle}
        />
      )}
    </>
  );
};


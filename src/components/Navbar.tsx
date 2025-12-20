import React, { useState } from 'react';
import { ProjectTitle } from './ProjectTitle';

interface NavItem {
  label: string;
  onClick?: () => void;
  children?: { label: string; onClick: () => void }[];
}

interface NavbarProps {
  logo?: React.ReactNode;
  projectName: string;
  items: NavItem[];
  accountIcon?: React.ReactNode;
}

export const Navbar = ({ logo, projectName, items, accountIcon }: NavbarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav style={{ width: '100vw', minWidth: 0, padding: 0, margin: 0, background: 'none' }}>
      {/* Project Name Centered and Above */}
      <div style={{position: 'relative', width: '100%',}}>
        <ProjectTitle title={projectName} />
        {/* Logo and Account Icons, absolutely positioned over the border */}
        <div style={{ position: 'absolute', left: 'var(--space-lg)', top: 'calc(100% - 24px)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--project-color)', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.13)', zIndex: 201 }}>
          {logo}
        </div>
        <div style={{ position: 'absolute', right: 'var(--space-lg)', top: 'calc(100% - 24px)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--project-color)', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.13)', zIndex: 201 }}>
          {accountIcon}
        </div>
      </div>
      {/* Nav Row (Menu in center) */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60,
        backgroundColor: 'var(--brand-color)',
        padding: '0 var(--space-lg)',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 99,
      }}>
        {/* Center: Nav Items */}
        {/* Center: Nav Items */}
        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexGrow: 1 }}>
          {items.map((item) => (
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
                fontSize: '1.05rem', // Reduced for better hierarchy
                padding: 'var(--space-xs) var(--space-md)', // More horizontal padding
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
                    // Keep hover/leave color strictly token-based for light/dark-ready
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-color)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </nav>
  );
};
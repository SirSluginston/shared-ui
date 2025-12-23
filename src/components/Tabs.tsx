import React from 'react';

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
  activeIndex: number;
  onTabClick: (idx: number) => void;
}

// Tabs: Clickable horizontal section headers for switching visible content.
export const Tabs = ({ tabs, activeIndex, onTabClick }: TabsProps) => (
  <div style={{ width: '100%' }}>
    <div style={{ display: 'flex', gap: 'var(--space-md)', borderBottom: '2.5px solid var(--shared-border-color)' }}>
      {tabs.map((tab, i) => (
        <button
          key={tab.label}
          onClick={() => onTabClick(i)}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: i === activeIndex ? '4px solid var(--brand-color)' : 'none',
            color: i === activeIndex ? 'var(--brand-color)' : 'var(--dark-color)',
            fontWeight: 'bold',
            fontFamily: 'var(--font-sans)',
            padding: 'var(--space-sm) var(--space-md)',
            cursor: 'pointer',
            fontSize: '1.1rem',
            outline: 'none',
            transition: 'color 0.2s'
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div style={{ marginTop: 'var(--space-lg)' }}>
      {tabs[activeIndex]?.content}
    </div>
  </div>
);


import React from 'react';

interface BreadcrumbsProps {
  items: { label: string; onClick?: () => void }[];
}
// Breadcrumbs: Navigation trail for multilevel admin/pages.
export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav style={{ fontFamily: 'var(--font-sans)', color: 'var(--dark-color)' }} aria-label="breadcrumbs">
    {items.map((item, i) => (
      <span key={item.label}>
        {i > 0 && <span style={{ color: 'var(--accent-color)' }}> &gt; </span>}
        {item.onClick ? (
          <button onClick={item.onClick} style={{ background: 'none', border: 'none', color: 'var(--brand-color)', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'inherit', padding: 0, fontSize: '1em' }}>{item.label}</button>
        ) : (
          <span>{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);


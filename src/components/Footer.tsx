import React from 'react';

interface FooterProps {
  links?: Array<{ label: string; url: string }>;
  copyright?: string;
  copyrightBrand?: string; // Brand/project name for copyright (e.g., "OSHA Trail")
  yearCreated?: number; // Year the company/project was created
  poweredBy?: string; // e.g., "SirSluginston VentureOS"
  style?: React.CSSProperties;
}

// Footer: Simple site-level info, copyright, links.
export const Footer = ({ links, copyright, copyrightBrand, yearCreated, poweredBy, style }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  // Generate copyright text with year range if yearCreated is provided
  const getCopyrightText = () => {
    if (copyright) return copyright;
    const brandName = copyrightBrand || 'SirSluginston Co.';
    if (yearCreated && yearCreated !== currentYear) {
      return `© ${yearCreated}-${currentYear} ${brandName}`;
    }
    return `© ${currentYear} ${brandName}`;
  };

  return (
    <footer
      style={{
        width: '100%',
        marginTop: 'var(--space-xl)',
        padding: 'var(--space-lg)',
        background: 'var(--brand-color)',
        color: 'var(--light-color)',
        borderTop: '2.5px solid var(--shared-border-color)',
        textAlign: 'center',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      {links && links.length > 0 && (
        <div style={{ marginBottom: 'var(--space-md)' }}>
          {links.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.url}
                style={{
                  color: 'var(--light-color)',
                  textDecoration: 'none',
                  margin: '0 var(--space-sm)',
                }}
              >
                {link.label}
              </a>
              {idx < links.length - 1 && <span style={{ margin: '0 var(--space-xs)' }}>|</span>}
            </React.Fragment>
          ))}
        </div>
      )}
      <div style={{ marginBottom: poweredBy ? 'var(--space-sm)' : 0 }}>
        {getCopyrightText()}
      </div>
      {poweredBy && (
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          Powered by {poweredBy}
        </div>
      )}
    </footer>
  );
};


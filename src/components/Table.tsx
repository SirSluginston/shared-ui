import React from 'react';

interface TableProps {
  columns: string[];
  data: (string | number)[][];
}

// Table: Minimal representation for structured tabular data.
export const Table = ({ columns, data }: TableProps) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col} style={{ borderBottom: '2px solid var(--brand-color)', padding: 'var(--space-sm)', textAlign: 'left', color: 'var(--brand-color)', background: 'var(--light-color)', fontWeight: 'bold' }}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => (
            <td key={j} style={{ borderBottom: '1px solid var(--accent-color)', padding: 'var(--space-sm)', color: 'var(--dark-color)', background: 'var(--light-color)' }}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);


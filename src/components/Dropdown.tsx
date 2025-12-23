interface DropdownProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

// Dropdown: For selecting from a small list, like navbar or form choices.
export const Dropdown = ({ options, value, onChange, label }: DropdownProps) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
    {label && <span style={{ fontFamily: 'var(--font-sans)', color: 'var(--dark-color)', fontWeight: 'bold' }}>{label}</span>}
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: 'var(--space-sm)',
        borderRadius: 'var(--radius-master)',
        fontFamily: 'var(--font-sans)',
        background: 'var(--light-color)',
        border: '1px solid var(--dark-color)',
        color: 'var(--dark-color)'
      }}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </label>
);


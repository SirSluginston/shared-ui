interface SpinnerProps {
  size?: number;
  color?: string;
}
// Spinner: Spinning icon for ongoing loading state.
export const Spinner = ({ size = 28, color = 'var(--brand-color)' }: SpinnerProps) => (
  <svg width={size} height={size} viewBox="0 0 50 50">
    <circle
      cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth="6"
      strokeDasharray="31.4 31.4" strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.9s"
        repeatCount="indefinite" />
    </circle>
  </svg>
);


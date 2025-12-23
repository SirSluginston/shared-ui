interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}
// SkeletonLoader: Faded placeholder for content while loading.
export const SkeletonLoader = ({ width = '100%', height = 22, radius = '6px' }: SkeletonLoaderProps) => (
  <div
    style={{
      background: 'linear-gradient(90deg,#eee 25%,#ddd 40%,#eee 60%)',
      backgroundSize: '400% 100%',
      animation: 'skeleton 1.2s ease-in-out infinite',
      width,
      height,
      borderRadius: radius,
      margin: 'var(--space-xs) 0',
    }}
  >
    <style>{`
      @keyframes skeleton {
        0% { background-position-x: 0%; }
        100% { background-position-x: 100%; }
      }
    `}</style>
  </div>
);


import React from 'react';

/**
 * Soft, fluffy pink cloud decorations scattered across the page background.
 * Built from overlapping rounded lobes (classic cloud-icon silhouette)
 * with a gentle pink gradient fill and a soft shadow for a puffy, 3D feel.
 *
 * NOTE: class names are written out in full per-cloud (not built from
 * template strings) because Tailwind's build-time scanner only picks up
 * literal class names that appear in the source text. Only sizes that
 * exist on Tailwind's default spacing scale (8, 10, 12, 14, 16, 20...)
 * are used so every class actually resolves to CSS.
 */
export const CloudShape: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg
    viewBox="0 0 120 70"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F6C9E0" />
      </linearGradient>
    </defs>
    <g fill="url(#cloud-gradient)">
      <ellipse cx="30" cy="46" rx="22" ry="16" />
      <ellipse cx="55" cy="34" rx="26" ry="20" />
      <ellipse cx="82" cy="44" rx="20" ry="15" />
      <ellipse cx="60" cy="50" rx="34" ry="14" />
    </g>
  </svg>
);

export const Clouds: React.FC = () => {
  return (
    <>
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-4 md:left-10" style={{ top: '3%', animationDelay: '0s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-8 md:right-16" style={{ top: '8%', animationDelay: '1.2s' }} />
      <CloudShape className="cloud-decoration cloud-float w-12 md:w-20 left-16 md:left-28" style={{ top: '13%', animationDelay: '2s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-3 md:right-9" style={{ top: '19%', animationDelay: '0.6s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-6 md:left-14" style={{ top: '25%', animationDelay: '3.2s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-12 md:right-22" style={{ top: '31%', animationDelay: '1.8s' }} />
      <CloudShape className="cloud-decoration cloud-float w-12 md:w-20 left-12 md:left-22" style={{ top: '37%', animationDelay: '2.6s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-6 md:right-12" style={{ top: '43%', animationDelay: '0.3s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-3 md:left-9" style={{ top: '49%', animationDelay: '3.6s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-16 md:right-26" style={{ top: '55%', animationDelay: '1.4s' }} />
      <CloudShape className="cloud-decoration cloud-float w-12 md:w-20 left-20 md:left-32" style={{ top: '61%', animationDelay: '2.2s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-4 md:right-10" style={{ top: '67%', animationDelay: '0.9s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-8 md:left-18" style={{ top: '73%', animationDelay: '2.8s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-10 md:right-20" style={{ top: '79%', animationDelay: '1.1s' }} />
      <CloudShape className="cloud-decoration cloud-float w-12 md:w-20 left-4 md:left-12" style={{ top: '85%', animationDelay: '3.4s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-14 md:right-24" style={{ top: '90%', animationDelay: '0.5s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-14 md:left-26" style={{ top: '95%', animationDelay: '2.5s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-6 md:right-14" style={{ top: '99%', animationDelay: '1.6s' }} />
    </>
  );
};

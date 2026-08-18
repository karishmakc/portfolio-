import React from 'react';

interface SmoothArrowProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/**
 * Smooth Arrow with organic rounded edges, soft curves, and refined arrowheads.
 * Features rounded linecaps (strokeLinecap="round") and soft curved vertices
 * (strokeLinejoin="round") for a warm, luxurious editorial feel.
 */
export const SmoothArrowDown: React.FC<SmoothArrowProps> = ({
  className = '',
  size = 14,
  strokeWidth = 2.1,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`smooth-arrow-svg ${className}`}
    style={{ strokeWidth }}
  >
    {/* Soft vertical shaft */}
    <path
      d="M12 4.5V17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Rounded curved arrowhead */}
    <path
      d="M6.8 12.2C8.5 13.9 10.3 15.7 12 17.5C13.7 15.7 15.5 13.9 17.2 12.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmoothArrowUp: React.FC<SmoothArrowProps> = ({
  className = '',
  size = 14,
  strokeWidth = 2.1,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`smooth-arrow-svg ${className}`}
    style={{ strokeWidth }}
  >
    {/* Soft vertical shaft */}
    <path
      d="M12 19.5V6.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Rounded curved arrowhead */}
    <path
      d="M6.8 11.8C8.5 10.1 10.3 8.3 12 6.5C13.7 8.3 15.5 10.1 17.2 11.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmoothArrowDiagonal: React.FC<SmoothArrowProps> = ({
  className = '',
  size = 14,
  strokeWidth = 2.1,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`smooth-arrow-svg ${className}`}
    style={{ strokeWidth }}
  >
    {/* Smooth diagonal shaft */}
    <path
      d="M6.8 17.2L16.8 7.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Rounded curved arrowhead with rounded corner join */}
    <path
      d="M9.5 6.8H15.2C16.3 6.8 17.2 7.7 17.2 8.8V14.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmoothArrowRight: React.FC<SmoothArrowProps> = ({
  className = '',
  size = 14,
  strokeWidth = 2.1,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`smooth-arrow-svg ${className}`}
    style={{ strokeWidth }}
  >
    {/* Soft horizontal shaft */}
    <path
      d="M4.5 12H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Rounded curved arrowhead */}
    <path
      d="M12.2 6.8C13.9 8.5 15.7 10.3 17.5 12C15.7 13.7 13.9 15.5 12.2 17.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

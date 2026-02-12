import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * A link component that safely opens urls in a new tab with accessibility features.
 * Includes a visual icon and screen-reader only text indicating the new window behavior.
 */
export function ExternalLink({
  href,
  children,
  className = '',
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 hover:underline ${className}`}
    >
      {children}
      {/* Visual Icon - small external link arrow */}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
      {/* Screen Reader Only Text */}
      <span className="sr-only">(új lapon nyílik meg)</span>
    </a>
  );
}

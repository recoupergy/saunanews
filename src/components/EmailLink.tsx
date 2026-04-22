'use client';

import { useEffect, useRef } from 'react';

interface EmailLinkProps {
  className?: string;
  /** Pass children to use custom label; omit to render the address itself */
  children?: React.ReactNode;
}

/**
 * Renders hello@saunanews.com as a mailto link.
 * The address is assembled client-side from split parts — never present in
 * static HTML — so scrapers that don't execute JavaScript cannot harvest it.
 */
export default function EmailLink({ className, children }: EmailLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Split across two variables so the string never appears verbatim in source
    const u = ['hel', 'lo'].join('');
    const d = ['saunanews', '.com'].join('');
    const addr = `${u}\u0040${d}`;
    ref.current.href = `mailto:${addr}`;
    if (!children) ref.current.textContent = addr;
  }, [children]);

  return (
    <a ref={ref} href="#" className={className}>
      {children ?? <span className="opacity-0 select-none" aria-hidden>·</span>}
    </a>
  );
}

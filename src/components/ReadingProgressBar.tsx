'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const article = document.querySelector('article');
      if (!article) return;

      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top + window.scrollY;
      const articleHeight = article.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = window.scrollY - articleTop;
      const scrollable = articleHeight - viewportHeight;

      if (scrollable <= 0) {
        setProgress(0);
        setVisible(false);
        return;
      }

      const pct = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setProgress(pct);
      setVisible(scrolled > 150);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial measurement after mount via rAF (avoids synchronous setState in effect)
    const id = requestAnimationFrame(() => {
      const article = document.querySelector('article');
      if (!article) return;
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - articleTop;
      const scrollable = article.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        setProgress(Math.min(Math.max(scrolled / scrollable, 0), 1));
        setVisible(scrolled > 150);
      }
    });

    return () => {
      cancelAnimationFrame(id);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-brass"
        style={{
          width: `${progress * 100}%`,
          transition: 'width 0.15s ease-out',
        }}
      />
    </div>
  );
}

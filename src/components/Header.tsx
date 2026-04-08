'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDark() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-border dark:border-dark-border">
      {/* Top utility bar */}
      <div className="border-b border-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 text-xs text-stone-dark dark:text-dark-muted">
          <span className="hidden sm:block tracking-wide uppercase">
            The Sauna Industry&apos;s Record of Note
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <Link href="/newsletter" className="hover:text-green dark:hover:text-brass transition-colors">
              Subscribe
            </Link>
            <button
              onClick={toggleDark}
              className="hover:text-green dark:hover:text-brass transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-charcoal dark:bg-cream rounded flex items-center justify-center">
              <span className="text-cream dark:text-charcoal font-bold text-sm font-editorial">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl font-bold tracking-tight text-charcoal dark:text-cream leading-none">
                SaunaNews
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/news" className="px-3 py-2 text-sm font-medium text-charcoal dark:text-dark-text hover:text-green dark:hover:text-brass transition-colors">
              All News
            </Link>
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm text-stone-dark dark:text-dark-muted hover:text-green dark:hover:text-brass transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-stone-dark dark:text-dark-muted hover:text-green dark:hover:text-brass transition-colors flex items-center gap-1">
                More
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-lg shadow-lg py-2 min-w-[180px]">
                  {categories.slice(5).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="block px-4 py-2 text-sm text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-border transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <hr className="my-2 border-border dark:border-dark-border" />
                  <Link href="/about" className="block px-4 py-2 text-sm text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-border transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-border transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/newsletter"
              className="px-4 py-2 text-sm font-medium bg-charcoal dark:bg-cream text-cream dark:text-charcoal rounded-md hover:bg-slate dark:hover:bg-ivory transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal dark:text-dark-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border dark:border-dark-border bg-cream dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-charcoal dark:text-dark-text hover:bg-ivory dark:hover:bg-dark-surface rounded-md"
            >
              All News
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-stone-dark dark:text-dark-muted hover:bg-ivory dark:hover:bg-dark-surface rounded-md"
              >
                {cat.name}
              </Link>
            ))}
            <hr className="border-border dark:border-dark-border my-2" />
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-dark dark:text-dark-muted hover:bg-ivory dark:hover:bg-dark-surface rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-dark dark:text-dark-muted hover:bg-ivory dark:hover:bg-dark-surface rounded-md"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/newsletter"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-charcoal dark:bg-cream text-cream dark:text-charcoal rounded-md"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

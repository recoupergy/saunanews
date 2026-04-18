'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { categories } from '@/data/categories';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  // Keyboard shortcut: "/" focuses search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        !!target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  const submitSearch = (q: string) => {
    const trimmed = q.trim();
    setSearchOpen(false);
    setSearchQuery('');
    setMobileOpen(false);
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search');
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      {/* Top utility bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 text-xs text-stone-dark">
          <span className="hidden sm:block tracking-wide uppercase">
            The Sauna Industry&apos;s Record of Note
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="https://x.com/sauna_news" target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors" aria-label="Follow us on X">
              <svg className="w-3.5 h-3.5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link href="/newsletter" className="hover:text-green transition-colors">
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/saunanews-punk-profile.jpg"
              alt="SaunaNews"
              width={48}
              height={48}
              className="shrink-0 mix-blend-multiply"
              priority
            />
            <span className="font-editorial text-xl font-bold tracking-tight leading-none">
              <span className="text-charcoal">Sauna</span><span className="text-green">News</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/news" className="px-3 py-2 text-sm font-medium text-charcoal hover:text-green transition-colors">
              All News
            </Link>
            <Link href="/harvia" className="px-3 py-2 text-sm font-medium text-charcoal hover:text-green transition-colors">
              Harvia
            </Link>
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm text-stone-dark hover:text-green transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-stone-dark hover:text-green transition-colors flex items-center gap-1">
                More
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                  {categories.slice(5).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <hr className="my-2 border-border" />
                  <Link href="/about" className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              title="Search (press /)"
              className="p-2 text-charcoal hover:text-green transition-colors rounded-md hover:bg-ivory"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/newsletter"
              className="px-4 py-2 text-sm font-medium bg-charcoal text-cream rounded-md hover:bg-slate transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="p-2 text-charcoal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-charcoal"
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-cream">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-ivory rounded-md"
            >
              All News
            </Link>
            <Link
              href="/harvia"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-ivory rounded-md"
            >
              Harvia
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-stone-dark hover:bg-ivory rounded-md"
              >
                {cat.name}
              </Link>
            ))}
            <hr className="border-border my-2" />
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-dark hover:bg-ivory rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-dark hover:bg-ivory rounded-md"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/newsletter"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-charcoal text-cream rounded-md"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div
            className="max-w-2xl mx-auto mt-[10vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch(searchQuery);
              }}
              className="bg-cream rounded-xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search SaunaNews..."
                  className="w-full pl-12 pr-24 py-4 bg-transparent text-charcoal text-lg focus:outline-none placeholder-stone-dark/60"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-stone-dark border border-border rounded hover:bg-ivory"
                  aria-label="Close search"
                >
                  Esc
                </button>
              </div>
              <div className="border-t border-border px-4 py-2 flex items-center justify-between text-xs text-stone-dark bg-ivory/60">
                <span>
                  Press <kbd className="px-1.5 py-0.5 text-[10px] bg-cream border border-border rounded">Enter</kbd> to search
                </span>
                <button
                  type="submit"
                  className="text-green font-medium hover:underline"
                >
                  Search &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

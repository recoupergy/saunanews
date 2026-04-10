'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      {/* Top utility bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 text-xs text-stone-dark">
          <span className="hidden sm:block tracking-wide uppercase">
            The Sauna Industry&apos;s Record of Note
          </span>
          <div className="flex items-center gap-4 ml-auto">
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
          <Link href="/" className="flex items-center gap-1.5 group">
            <svg width="16" height="22" viewBox="0 0 20 28" className="shrink-0">
              <path d="M10,0 C4,9 0,15 0,19 C0,25 4,28 10,28 C16,28 20,25 20,19 C20,15 16,9 10,0Z" fill="#4A6741"/>
              <path d="M11,12 C8,16 6,18 6,21 C6,25 8,26.5 10.5,26.5 C13,26.5 14.5,24 14.5,21 C14.5,18 13,16 11,12Z" fill="#FAF8F5"/>
            </svg>
            <span className="font-editorial text-xl font-bold tracking-tight leading-none">
              <span className="text-charcoal">Sauna</span><span className="text-green">News</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/news" className="px-3 py-2 text-sm font-medium text-charcoal hover:text-green transition-colors">
              All News
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
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/newsletter"
              className="px-4 py-2 text-sm font-medium bg-charcoal text-cream rounded-md hover:bg-slate transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
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
        <div className="lg:hidden border-t border-border bg-cream">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-ivory rounded-md"
            >
              All News
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
    </header>
  );
}

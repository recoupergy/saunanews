'use client';

import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cream rounded flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm font-editorial">S</span>
              </div>
              <span className="font-editorial text-xl font-bold tracking-tight text-cream">
                SaunaNews
              </span>
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed mb-6">
              The business and culture of sauna, covered well. Independent editorial coverage of the companies, products, and trends shaping the sauna industry.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-cream/40 hover:text-brass transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-cream/40 hover:text-brass transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-cream/40 hover:text-brass transition-colors" aria-label="RSS">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795 0 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-8.18v4.819c12.951.115 23.412 10.573 23.525 23.498h4.475c-.113-15.628-12.84-28.303-28-28.317z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Coverage
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm text-cream/60 hover:text-brass transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-cream/60 hover:text-brass transition-colors">
                  About SaunaNews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream/60 hover:text-brass transition-colors">
                  Contact Editorial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream/60 hover:text-brass transition-colors">
                  Submit News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream/60 hover:text-brass transition-colors">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-cream/60 hover:text-brass transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Stay Informed
            </h3>
            <p className="text-sm text-cream/60 mb-4">
              Get the week&apos;s most important sauna industry news delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-cream/10 border border-cream/20 rounded text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-brass"
              />
              <button className="px-4 py-2 bg-brass text-charcoal text-sm font-medium rounded hover:bg-copper transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} SaunaNews. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors">Editorial Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

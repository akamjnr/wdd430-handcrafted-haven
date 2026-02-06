"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          Handcrafted Haven
        </a>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
          <a href="/" className="hover:text-slate-900">
            Home
          </a>
          <a href="/marketplace" className="hover:text-slate-900">
            Marketplace
          </a>
          <a href="/sellers" className="hover:text-slate-900">
            Sellers
          </a>
        </nav>

        {/* Mobile Icon Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl text-slate-900 shadow-sm hover:bg-slate-50 sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile App-Style Menu */}
      {menuOpen && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
              <nav className="flex flex-col gap-2 text-base font-semibold text-slate-800">
                <a
                  href="/"
                  className="rounded-xl px-4 py-3 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>

                <a
                  href="/marketplace"
                  className="rounded-xl px-4 py-3 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Marketplace
                </a>

                <a
                  href="/sellers"
                  className="rounded-xl px-4 py-3 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Sellers
                </a>
              </nav>
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

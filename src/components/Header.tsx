import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'rgba(245,245,245,0.75)',
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'color 0.2s ease, background 0.2s ease',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const NavItem = ({ title, hasDropdown = true }: { title: string; hasDropdown?: boolean }) => (
    <div className="group relative">
      <button
        style={navLinkStyle}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.background = 'rgba(6, 182, 212, 0.07)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,245,245,0.75)'; e.currentTarget.style.background = 'transparent'; }}
      >
        {title}
        {hasDropdown && (
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" aria-hidden="true" />
        )}
      </button>
      {hasDropdown && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden w-48 rounded-xl p-2 shadow-2xl outline-none group-hover:block opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'rgba(12,12,12,0.95)',
            border: '1px solid rgba(212,168,66,0.15)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <a
            href="#"
            className="block select-none rounded-lg px-3 py-2 text-sm transition-colors"
            style={{ color: 'rgba(245,245,245,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d4a842'; e.currentTarget.style.background = 'rgba(212,168,66,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Overview
          </a>
          <a
            href="#"
            className="block select-none rounded-lg px-3 py-2 text-sm transition-colors"
            style={{ color: 'rgba(245,245,245,0.7)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d4a842'; e.currentTarget.style.background = 'rgba(212,168,66,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,245,245,0.7)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Use Cases
          </a>
        </div>
      )}
    </div>
  );

  return (
    <header
      role="banner"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full w-[95%] max-w-5xl"
      style={{
        background: isScrolled ? 'rgba(10,10,15,0.92)' : 'rgba(10,10,15,0.6)',
        border: `1px solid var(--surface-border)`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.6)' : '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '3.5rem' }}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/small-logo.png" alt="helllo.ai logo" className="w-8 h-8 rounded-lg" width="32" height="32" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ color: '#ffffff', letterSpacing: '-0.04em' }}
              >
                helllo.ai
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem title="Features" />
            <NavItem title="Industries" />
            <NavItem title="Solutions" />
            <NavItem title="Resources" />
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              style={navLinkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6, 182, 212, 0.07)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,245,0.75)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Pricing
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="h-10 rounded-full px-5 text-sm font-medium transition-all duration-200"
              style={{
                color: 'rgba(255,255,255,0.8)',
                background: 'transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Sign In
            </button>
            <button
              className="h-10 rounded-full px-6 text-sm font-semibold transition-all duration-200 flex items-center justify-center"
              style={{
                background: '#ffffff',
                color: '#000000',
                boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.35)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(255, 255, 255, 0.25)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Schedule a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 focus:outline-none"
            style={{ color: 'rgba(245,245,245,0.8)' }}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 border-b animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ background: 'rgba(8,8,8,0.97)', borderColor: 'rgba(212,168,66,0.12)' }}
        >
          <div className="flex flex-col space-y-1 px-6 py-4">
            {['Features', 'Industries', 'Solutions', 'Resources', 'Pricing'].map(item => (
              <a
                key={item}
                href={item === 'Pricing' ? '#pricing' : '#'}
                className="py-2.5 text-base font-medium transition-colors"
                style={{ color: 'rgba(245,245,245,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,245,0.65)'; }}
                onClick={item === 'Pricing' ? (e) => handleNavClick(e as any, '#pricing') : undefined}
              >
                {item}
              </a>
            ))}
            <div className="pt-3 space-y-3">
              <button
                className="w-full text-center py-3 text-base font-medium rounded-full transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}
              >
                Sign In
              </button>
              <button
                className="w-full text-center py-3 text-base font-semibold rounded-full transition-all"
                style={{ background: '#ffffff', color: '#000000', boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.2)' }}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

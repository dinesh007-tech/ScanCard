import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/Button';
import { navigationLinks } from '../data/mockData';
import { cn } from '../utils/cn';

export const TopNavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-md" : "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm"
      )}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface">
          ScanCard
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-body-md text-body-md transition-colors hover:text-primary duration-200 ease-in-out",
                location.pathname === link.href ? "text-primary font-medium" : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button variant="primary">Get Started</Button>
        </div>

        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-outline-variant/20 px-margin-mobile py-4 flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-body-lg text-body-lg py-2",
                location.pathname === link.href ? "text-primary font-medium" : "text-on-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" className="w-full mt-4">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

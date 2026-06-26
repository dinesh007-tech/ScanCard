import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-section-gap bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
            ScanCard
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            © {new Date().getFullYear()} ScanCard AI. All rights reserved.
          </p>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          {footerLinks.company.map(link => (
            <Link key={link.label} to={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          {footerLinks.resources.map(link => (
            <Link key={link.label} to={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          {footerLinks.legal.map(link => (
            <Link key={link.label} to={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

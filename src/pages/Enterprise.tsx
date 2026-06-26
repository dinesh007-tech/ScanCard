import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, BarChart3, ShieldCheck, Scale, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { enterpriseData } from '../data/mockData';

export const Enterprise: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-1.5 rounded-full mb-8 shadow-sm border border-outline-variant/30"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Enterprise Ready</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-on-surface max-w-4xl mb-6 leading-tight"
        >
          Networking for the <span className="text-primary relative inline-block">modern<span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 rounded"></span></span> enterprise.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12"
        >
          {enterpriseData.hero.subheadline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Button variant="primary" icon={<ArrowRight size={18} />}>Contact Sales</Button>
          <Button variant="secondary">View Documentation</Button>
        </motion.div>
      </section>

      {/* Scalability Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-10">
        <div className="mb-16">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">Scale without friction.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage thousands of digital identities across global teams from a single, centralized dashboard.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[320px]">
          {/* Large Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_40px_rgba(26,27,31,0.04)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
                <Globe className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Global Directory</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Sync contacts instantly across regional offices. Maintain brand consistency with enterprise-wide templates.</p>
            </div>
            
            {/* Decorative */}
            <div className="relative w-full h-32 mt-6 rounded-lg overflow-hidden border border-white/50 bg-white/40 shadow-sm flex items-end justify-center pb-0 z-10">
              <div className="w-3/4 h-24 bg-surface rounded-t-xl border-t border-x border-outline-variant/30 shadow-md flex flex-col p-4">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-error-container"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <div className="w-full h-3 bg-surface-variant rounded-full"></div>
                  <div className="w-2/3 h-3 bg-surface-variant rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-xl border border-white rounded-[24px] p-8 flex flex-col shadow-[0_20px_40px_rgba(26,27,31,0.04)]"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
              <Users className="text-on-surface" />
            </div>
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">Bulk Provisioning</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Onboard hundreds of employees instantly with CSV uploads or automated SCIM provisioning.</p>
            <div className="mt-auto">
              <a href="#" className="font-label-md text-label-md text-primary flex items-center gap-1 hover:gap-2 transition-all">Learn more <ArrowRight size={16} /></a>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-xl border border-white rounded-[24px] p-8 flex flex-col shadow-[0_20px_40px_rgba(26,27,31,0.04)]"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
              <BarChart3 className="text-on-surface" />
            </div>
            <h3 className="font-headline-md text-[24px] font-semibold text-on-surface mb-2">Usage Analytics</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Track connection rates and ROI across departments with detailed organizational insights.</p>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-[0_20px_40px_rgba(26,27,31,0.04)]"
          >
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-outline-variant/30 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">99.99% Uptime</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Enterprise SLA</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Guaranteed reliability for critical networking infrastructure, backed by our dedicated support engineering team.</p>
            </div>
            <div className="w-full md:w-1/3 h-full min-h-[120px] bg-white rounded-xl shadow-sm border border-outline-variant/20 flex items-center justify-center relative z-10">
              <div className="text-center p-4">
                <span className="block font-display-hero-mobile text-primary font-bold">24/7</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-wide">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1 relative"
          >
            <div className="relative w-full aspect-square max-h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-high to-surface-container-lowest z-0"></div>
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 z-10" 
                src={enterpriseData.securityImage} 
                alt="Security" 
              />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 p-8">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 transform -translate-x-8">
                  <ShieldCheck className="text-primary w-8 h-8" />
                  <div>
                    <div className="font-label-md text-on-surface font-bold">SOC 2 Type II</div>
                    <div className="font-label-sm text-on-surface-variant">Certified</div>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 transform translate-x-12">
                  <Scale className="text-primary w-8 h-8" />
                  <div>
                    <div className="font-label-md text-on-surface font-bold">GDPR Compliant</div>
                    <div className="font-label-sm text-on-surface-variant">Global Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-6">Security is our foundation.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">We protect your organization's sensitive contact data with military-grade encryption and strict access controls. Trust is not an option; it's the core of our platform.</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 pb-6 border-b border-surface-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-[18px] text-on-surface font-semibold mb-1">End-to-End Encryption</h4>
                  <p className="font-body-md text-on-surface-variant">All data is encrypted at rest (AES-256) and in transit (TLS 1.3).</p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-6 border-b border-surface-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-[18px] text-on-surface font-semibold mb-1">Granular Access Control</h4>
                  <p className="font-body-md text-on-surface-variant">Role-Based Access Control (RBAC) ensures users only see what they need.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-6 border-b border-surface-variant last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-[18px] text-on-surface font-semibold mb-1">Data Privacy First</h4>
                  <p className="font-body-md text-on-surface-variant">Full compliance with GDPR, CCPA, and global data sovereignty laws.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

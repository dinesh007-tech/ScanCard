import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock } from 'lucide-react';
import { Button } from '../components/Button';
import { pricingData } from '../data/mockData';

export const Pricing: React.FC = () => {
  return (
    <div className="w-full">
      <main className="flex-grow pt-10 pb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-on-surface mb-6"
            >
              {pricingData.hero.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-on-surface-variant"
            >
              {pricingData.hero.subheadline}
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingData.plans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className={`rounded-3xl p-10 flex flex-col bg-white transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,27,31,0.08)] relative ${
                  plan.featured 
                    ? 'border-2 border-primary shadow-[0_20px_40px_rgba(0,95,170,0.1)]' 
                    : 'border border-outline-variant/30 shadow-[0_10px_30px_rgba(26,27,31,0.04)]'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-10 transform -translate-y-1/2">
                    <span className="bg-primary text-on-primary text-label-sm px-4 py-1.5 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h2 className="text-headline-md font-semibold text-on-surface mb-2">{plan.name}</h2>
                  <p className="text-body-md text-on-surface-variant">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-display-hero font-bold text-on-surface">{plan.price}</span>
                  <span className="text-body-lg text-on-surface-variant font-medium">{plan.period}</span>
                </div>
                
                <ul className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-on-surface-variant font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.featured ? 'primary' : 'secondary'} 
                  className="w-full py-4 text-body-md font-medium"
                >
                  Subscribe {plan.name}
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-body-md text-on-surface-variant flex items-center justify-center gap-2">
              <Lock size={18} />
              Secure payment processed by Stripe. Cancel anytime.
            </p>
          </motion.div>
          
        </div>
      </main>
    </div>
  );
};

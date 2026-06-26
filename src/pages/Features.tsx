import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { featuresData } from '../data/mockData';

export const Features: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-container-max  mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-on-surface mb-8 max-w-4xl mx-auto tracking-tight"
        >
          {featuresData.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          {featuresData.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[614px] rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
            src={featuresData.hero.image}
            alt="Hero visualization"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Bento Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* AI OCR Engine (Spans 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group h-[500px] border border-white"
          >
            <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-start">
              <span className="inline-block px-3 py-1 bg-primary-fixed/30 text-primary font-label-sm text-label-sm rounded-full uppercase tracking-widest mb-6 w-max">{featuresData.bento[0].badge}</span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">{featuresData.bento[0].title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{featuresData.bento[0].description}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-[85%] md:w-[50%] h-[50%] md:h-[80%] transform translate-x-4 md:translate-x-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out flex items-end justify-end">
              <img className="w-full h-full object-cover object-left-top rounded-tl-3xl shadow-2xl border-t border-l border-white/10" src={featuresData.bento[0].image} alt="Neural OCR" />
            </div>
          </motion.div>

          {/* Security (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-surface-container-low border border-white rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden h-[500px]"
          >
            <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded-full uppercase tracking-widest mb-6 w-max">{featuresData.bento[1].badge}</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{featuresData.bento[1].title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">{featuresData.bento[1].description}</p>
            <div className="mt-auto flex justify-center items-center opacity-80">
              <Lock className="text-surface-tint w-32 h-32 stroke-1" />
            </div>
          </motion.div>

          {/* Smart CRM Sync (Spans 6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 bg-surface-container-low border border-white rounded-3xl p-8 md:p-12 flex flex-col h-[500px]"
          >
            <span className="inline-block px-3 py-1 bg-primary-fixed/30 text-primary font-label-sm text-label-sm rounded-full uppercase tracking-widest mb-6 w-max">{featuresData.bento[2].badge}</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{featuresData.bento[2].title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-12">{featuresData.bento[2].description}</p>
            <div className="flex-grow rounded-2xl overflow-hidden bg-white shadow-inner flex items-center justify-center p-8">
              <img className="w-full h-full object-contain" src={featuresData.bento[2].image} alt="Integration" />
            </div>
          </motion.div>

          {/* Mobile App Experience (Spans 6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 bg-surface-container-low border border-white rounded-3xl p-8 md:p-12 flex flex-col items-center text-center h-[500px] relative overflow-hidden"
          >
            <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded-full uppercase tracking-widest mb-6 relative z-10">{featuresData.bento[3].badge}</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 relative z-10">{featuresData.bento[3].title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant relative z-10 max-w-sm">{featuresData.bento[3].description}</p>
            <div className="mt-8 mx-auto w-56 md:w-64 h-[350px] bg-white rounded-[40px] shadow-2xl border-[8px] border-surface-container-highest overflow-hidden z-0 -mb-24 md:-mb-32">
              <img className="w-full h-full object-cover" src={featuresData.bento[3].image} alt="Mobile App" />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

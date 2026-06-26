import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ScanLine, Sparkles, LineChart } from 'lucide-react';
import { Button } from '../components/Button';
import { BentoCard } from '../components/BentoCard';
import { ScannerAnimation } from '../components/ScannerAnimation';
import { homeData } from '../data/mockData';

export const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-section-gap flex flex-col md:flex-row items-center gap-gutter min-h-[80vh]">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,95,170,0.15)_0%,rgba(255,255,255,0)_70%)] rounded-full pointer-events-none z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 z-10 w-full md:w-1/2 flex flex-col items-start text-left"
        >
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-on-surface mb-6 leading-tight">
            Transform every card into your next <span className="text-primary">opportunity.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            {homeData.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              {homeData.hero.primaryCta}
            </Button>
            <Button variant="secondary" icon={<Play size={18} />} iconPosition="left">
              {homeData.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full md:w-1/2 relative z-10 mt-12 md:mt-0 flex justify-end"
        >
          <BentoCard className="w-full max-w-md aspect-[3/4]">
            <img 
              src={homeData.hero.image} 
              alt="Smartphone scanning business card" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent flex items-end p-8">
              <div className="bg-white/70 backdrop-blur-xl border border-white/20 p-4 rounded-xl w-full flex items-center gap-4 shadow-ambient">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ScanLine className="text-primary" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Scanning Complete</p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">99.9% Accuracy</p>
                </div>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-6">
            {homeData.problem.headline}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {homeData.problem.description}
          </p>
        </motion.div>
      </section>

      {/* Solution Showcase */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video relative z-10"
        >
          <BentoCard withGlow className="w-full h-full overflow-hidden">
            {isVideoPlaying ? (
              <ScannerAnimation />
            ) : (
              <>
                <img 
                  src={homeData.solution.videoThumbnail} 
                  alt="Digitisation process" 
                  className="w-full h-full object-cover opacity-90 cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                  <Button variant="icon" size="icon" className="pointer-events-auto" onClick={() => setIsVideoPlaying(true)}>
                    <Play fill="currentColor" size={32} />
                  </Button>
                </div>
              </>
            )}
          </BentoCard>
        </motion.div>
      </section>

      {/* AI Features Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline-md text-headline-md text-on-surface mb-12 text-center"
        >
          Intelligence built-in.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <BentoCard className="p-8 h-full">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${homeData.features[0].color}`}>
                <ScanLine />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{homeData.features[0].title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md">
                {homeData.features[0].description}
              </p>
              <div className="h-32 bg-white rounded-xl border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '99%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="bg-primary h-full" 
                  />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BentoCard className="p-8 h-full">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${homeData.features[1].color}`}>
                <Sparkles />
              </div>
              <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-4">{homeData.features[1].title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {homeData.features[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {homeData.features[1].tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-low rounded-full font-label-sm text-label-sm text-on-surface-variant uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            <BentoCard className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${homeData.features[2].color}`}>
                  <LineChart />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{homeData.features[2].title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {homeData.features[2].description}
                </p>
              </div>
              <div className="flex-1 w-full bg-white rounded-xl p-6 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-surface-container-low">
                  <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">AM</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Alex Mercer</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">VP Engineering at Acme Corp</div>
                  </div>
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                  <span className="text-primary font-medium">Suggestion:</span> "Congratulate Alex on Acme Corp's recent Series B funding round mentioned in TechCrunch."
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center bg-primary text-on-primary">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-6">
            {homeData.cta.headline}
          </h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-10">
            {homeData.cta.subheadline}
          </p>
          <Button variant="secondary" className="border-none text-primary shadow-lg" size="lg">
            {homeData.cta.buttonText}
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

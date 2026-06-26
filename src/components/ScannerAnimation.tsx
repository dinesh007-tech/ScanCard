import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanLine, CheckCircle2, Focus, User, Mail, Phone } from 'lucide-react';

export const ScannerAnimation: React.FC = () => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('scanning');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanState('complete');
    }, 4500); // 4.5 seconds of scanning
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-surface-container-low flex items-center justify-center overflow-hidden relative perspective-[1000px]">
      
      {/* Hyper-realistic office background (blurred) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000")',
          filter: 'blur(20px) brightness(0.7)'
        }}
      />

      {/* Floating animation to simulate hand holding the phone */}
      <motion.div 
        animate={{ 
          y: [-10, 10, -10],
          rotateX: [2, -2, 2],
          rotateY: [-2, 2, -2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10"
      >
        {/* Mobile Device Frame (Ultra Realistic) */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-black rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_0_0_2px_#333,inset_0_0_0_8px_#000] overflow-hidden flex flex-col"
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 inset-x-0 flex justify-center z-50">
            <div className="w-32 h-8 bg-black rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)] flex items-center px-3 justify-between">
              <div className="w-3 h-3 rounded-full bg-slate-800/80 shadow-[inset_0_1px_2px_rgba(0,0,0,1)] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-900/50"></div>
              </div>
              <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]"></div>
            </div>
          </div>

          {/* Camera Viewfinder Area */}
          <div className="flex-1 relative bg-surface-container-lowest overflow-hidden flex items-center justify-center">
            
            {/* Live Camera Feed Background (Slightly different office angle) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000")',
                filter: 'brightness(0.9) contrast(1.1)'
              }}
            />

            {/* Realistic UI Overlays (Camera App) */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">
              <div className="w-full flex justify-between items-center text-white/70">
                <Focus size={24} />
                <div className="bg-black/40 backdrop-blur rounded-md px-2 py-1 text-xs font-medium">SCAN DOCUMENT</div>
                <div className="w-6 h-6 border-2 border-white/70 rounded-full flex items-center justify-center text-[10px]">1x</div>
              </div>
            </div>

            {/* The Realistic Business Card */}
            <motion.div 
              initial={{ y: 50, rotateZ: -5, rotateX: 20 }}
              animate={{ y: 0, rotateZ: -2, rotateX: 0 }}
              className="w-[88%] h-52 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between border border-white/10 relative z-20"
            >
              {/* Card Content - Photorealistic */}
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-bold text-xl tracking-wide uppercase">Sarah Jensen</h3>
                  <p className="text-primary-light text-xs font-medium uppercase tracking-widest">VP of Operations</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 w-full mt-4">
                <div className="flex items-center gap-2">
                  <Phone size={10} className="text-white/50" />
                  <p className="text-white/80 text-[10px] font-mono">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={10} className="text-white/50" />
                  <p className="text-white/80 text-[10px] font-mono">sarah.j@innovatech.com</p>
                </div>
                <div className="w-full h-[1px] bg-white/10 my-1"></div>
                <p className="text-white/40 text-[8px] uppercase tracking-widest">Innovatech Solutions Ltd.</p>
              </div>

              {/* Scanning Laser */}
              {scanState === 'scanning' && (
                <motion.div 
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1),0_0_40px_rgba(59,130,246,0.6)] z-30"
                />
              )}
              
              {/* Overlay grid for camera UI */}
              <div className="absolute -inset-4 border-2 border-yellow-400/50 rounded-2xl pointer-events-none transition-all duration-300 z-40">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-xl border-yellow-400" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 rounded-tr-xl border-yellow-400" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 rounded-bl-xl border-yellow-400" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-xl border-yellow-400" />
              </div>
            </motion.div>

            {/* Floating Data Extractions */}
            <AnimatePresence>
              {scanState === 'scanning' && (
                <>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-[25%] left-4 bg-black/80 backdrop-blur-md text-xs px-3 py-2 rounded-xl shadow-2xl text-white font-medium border border-white/20 flex items-center gap-2 z-50"
                  >
                    <User size={14} className="text-blue-400" />
                    Sarah Jensen
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 1.6 }}
                    className="absolute top-[50%] right-4 bg-black/80 backdrop-blur-md text-xs px-3 py-2 rounded-xl shadow-2xl text-white font-medium border border-white/20 flex items-center gap-2 z-50"
                  >
                    <Mail size={14} className="text-green-400" />
                    sarah.j@innovatech...
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 2.8 }}
                    className="absolute bottom-[20%] left-8 bg-black/80 backdrop-blur-md text-xs px-3 py-2 rounded-xl shadow-2xl text-white font-medium border border-white/20 flex items-center gap-2 z-50"
                  >
                    <Phone size={14} className="text-purple-400" />
                    +1 (555) 123-4567
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom controls / Success state */}
          <div className="h-28 bg-black/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-center z-50 relative">
            
            {/* Phone Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full" />

            <AnimatePresence mode="wait">
              {scanState === 'scanning' ? (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Shutter Button Ring */}
                    <div className="w-14 h-14 rounded-full border-4 border-white/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/50 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="complete"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30"
                >
                  <CheckCircle2 size={24} className="text-green-400" />
                  <span className="text-sm text-green-400 font-bold tracking-wide">Saved to CRM</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

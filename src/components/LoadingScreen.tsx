import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagicRings } from './MagicRings';
import { SmoothArrowRight } from './SmoothArrow';

interface LoadingScreenProps {
  onComplete: () => void;
}

const SYSTEM_LOGS = [
  'Initializing Core Environment...',
  'Configuring CSS3 Grid & Layout Architecture...',
  'Loading Computer Science & Engineering Projects...',
  'Calibrating WebGL Ambient Shader Engine...',
  'System Ready · Welcome to Portfolio',
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic step increments for pleasant rhythm
        const increment = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 75);

    return () => clearInterval(interval);
  }, []);

  // Update status logs as progress advances
  useEffect(() => {
    const step = Math.floor((progress / 100) * (SYSTEM_LOGS.length - 1));
    setCurrentLogIndex(step);

    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 450);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(6px)',
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-gradient-to-br from-[#FFF8F9] via-[#FFFFFF] to-[#F0F6FA] text-[#23181C] overflow-hidden select-none"
    >
      {/* WebGL Ambient Background Layer with graceful exit zoom & fade */}
      <motion.div
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 opacity-45 sm:opacity-60 pointer-events-none"
      >
        <MagicRings
          color="#E2889A"
          colorTwo="#6BA4CC"
          ringCount={6}
          speed={0.85}
          attenuation={8.5}
          lineThickness={1.9}
          baseRadius={0.3}
          radiusStep={0.08}
          scaleRate={0.06}
          opacity={0.7}
          noiseAmount={0.04}
          rotation={18}
          ringGap={1.4}
          fadeIn={0.6}
          fadeOut={0.6}
          followMouse={false}
          clickBurst={false}
        />
      </motion.div>

      {/* Ambient Lighting Blurs with subtle exit dissipation */}
      <motion.div
        aria-hidden="true"
        exit={{ opacity: 0, scale: 1.15 }}
        transition={{ duration: 0.85 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDE8ED]/80 blur-3xl opacity-70 pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        exit={{ opacity: 0, scale: 1.15 }}
        transition={{ duration: 0.85 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#DCEBF7]/80 blur-3xl opacity-70 pointer-events-none"
      />

      {/* Top Bar Header */}
      <motion.div
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#23181C] text-[#FFF8F9] border border-[#C59B27]/50 flex items-center justify-center font-serif-display text-base font-normal shadow-xs">
            K
          </div>
          <div>
            <span className="block text-xs font-sans-body font-normal tracking-[0.2em] uppercase text-[#23181C]">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[10px] font-sans-body font-light text-[#735E66] tracking-wider">
              Academic &amp; Project Portfolio
            </span>
          </div>
        </div>

        <button
          onClick={() => onComplete()}
          id="skip-loading-btn"
          className="group flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFFFFF]/90 hover:bg-[#23181C] hover:text-[#FFF8F9] hover:border-[#C59B27] text-[#735E66] border border-[#E2889A]/35 text-xs font-sans-body transition-all duration-300 shadow-2xs cursor-pointer"
        >
          <span className="font-light group-hover:text-[#FFF8F9] transition-colors">Skip Intro</span>
          <span className="editorial-arrow-circle w-5 h-5 bg-transparent border-[#C59B27]/50 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] group-hover:text-[#23181C]">
            <SmoothArrowRight size={11} className="animate-arrow-diagonal" />
          </span>
        </button>
      </motion.div>

      {/* Centerpiece: Monogram & Title Reveal */}
      <motion.div
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-xl mx-auto my-auto text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFFFFF] border border-[#C59B27]/40 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span className="text-[11px] font-sans-body uppercase tracking-[0.25em] text-[#A37E1C] font-medium">
            Portfolio Launch System
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="font-serif-display text-4xl sm:text-6xl font-normal tracking-tight text-[#23181C]">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-[#735E66] font-light max-w-md mx-auto">
            {PERSONAL_INFO.degree}
          </p>
        </motion.div>

        {/* Sharp Progress Bar & Numerical Counter */}
        <div className="pt-6 max-w-md mx-auto space-y-3">
          {/* Progress Container (Sharp edges) */}
          <div className="w-full h-1.5 bg-[#E1EDF8] border border-[#94BBD9]/40 overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E2889A] via-[#C59B27] to-[#6BA4CC]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Status and Percentage */}
          <div className="flex items-center justify-between text-xs font-sans-body">
            <div className="flex items-center gap-2 text-[#735E66] font-light min-w-0">
              <Terminal className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
              <span className="truncate">{SYSTEM_LOGS[currentLogIndex]}</span>
            </div>
            <span className="font-mono-tag font-semibold text-[#23181C] shrink-0 ml-3">
              {progress}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Metatags */}
      <motion.div
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans-body font-light text-[#A69199] pt-6 border-t border-[#E2889A]/20"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C59B27] animate-pulse"></span>
          <span>Karishma C · Tirupur, India</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>System · HTML5 / CSS3 / React / WebGL</span>
          <span>© 2026</span>
        </div>
      </motion.div>
    </motion.div>
  );
};


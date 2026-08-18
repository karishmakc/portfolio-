import React from 'react';
import { Sparkles, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagicRings } from './MagicRings';
import { SmoothArrowDown, SmoothArrowDiagonal } from './SmoothArrow';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="w-full bg-gradient-to-br from-[#FFF8F9] via-[#FFFFFF] via-50% to-[#F0F6FA] border-b border-[#E2889A]/15 relative overflow-hidden"
    >
      {/* Interactive WebGL MagicRings Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75 sm:opacity-85">
        <MagicRings
          color="#E2889A"
          colorTwo="#6BA4CC"
          ringCount={7}
          speed={0.8}
          attenuation={8.5}
          lineThickness={2.0}
          baseRadius={0.32}
          radiusStep={0.085}
          scaleRate={0.07}
          opacity={0.8}
          noiseAmount={0.05}
          rotation={22}
          ringGap={1.42}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.16}
          hoverScale={1.12}
          parallax={0.04}
          clickBurst={true}
        />
      </div>

      <div className="relative z-10 min-h-[88vh] flex flex-col justify-between pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        {/* Harmonic Ambient Aura Mesh: Delicate pastel pink, airy soft blue, and luminous white blend */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 -translate-x-1/3 -translate-y-1/3 -z-10 w-[500px] sm:w-[700px] h-[450px] bg-gradient-to-tr from-[#FDE8ED]/80 via-[#FFF2F5]/60 to-transparent blur-3xl opacity-70 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-10 -translate-y-1/4 -z-10 w-[500px] sm:w-[650px] h-[450px] bg-gradient-to-bl from-[#DCEBF7]/75 via-[#EDF5FC]/60 to-transparent blur-3xl opacity-70 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-r from-[#FFF8F9]/60 via-[#FFFFFF]/80 to-[#F0F6FA]/60 blur-2xl opacity-80 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-1/4 -z-10 w-80 h-80 bg-gradient-to-br from-[#E3EFF8]/60 via-[#FFFFFF]/70 to-[#FCE7EC]/50 blur-3xl opacity-65 pointer-events-none"
        />

        {/* Graceful Top Minimalist Indicator */}
        <div className="flex items-center justify-between pt-2 text-xs font-sans-body font-light pointer-events-auto">
          <div className="flex items-center gap-2.5 text-[#735E66] backdrop-blur-xs bg-[#FFF8F9]/60 px-3 py-1 border border-[#E2889A]/20">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] shadow-[0_0_8px_rgba(197,155,39,0.4)] animate-pulse" />
            <span className="tracking-[0.18em] uppercase text-[11px] text-[#23181C]/80 font-normal">
              Computer Science &amp; Engineering
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#735E66] font-sans-body font-light backdrop-blur-xs bg-[#FFFFFF]/60 px-3 py-1 border border-[#94BBD9]/25">
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-[#C59B27]/60">·</span>
            <span className="text-[#23181C] font-normal">Open to Opportunities</span>
          </div>
        </div>

        {/* Main Name & Artistic Typography Showcase */}
        <div className="my-auto py-12 sm:py-20 text-center sm:text-left pointer-events-auto">
          {/* Subtle ethereal intro note */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C59B27] font-normal mb-4 flex items-center justify-center sm:justify-start gap-3 font-sans-body">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Portfolio &amp; Creative Works</span>
          </p>

          {/* Elegant, Grand Display Name */}
          <div className="relative inline-block">
            <h1
              id="hero-name-heading"
              className="font-serif-display font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] tracking-tight text-[#23181C] leading-[0.92]"
            >
              <span className="font-serif italic font-normal text-[#B85066] drop-shadow-[0_2px_20px_rgba(226,136,154,0.15)]">
                Karishma
              </span>{' '}
              <span className="font-serif-display font-normal text-[#23181C] tracking-normal">
                K C
              </span>
            </h1>

            {/* Soft decorative golden, pink & soft blue underline glow */}
            <div className="h-[1.5px] w-32 sm:w-48 bg-gradient-to-r from-[#C59B27] via-[#E2889A] via-70% to-[#94BBD9] mt-3 opacity-70 mx-auto sm:mx-0" />
          </div>

          {/* Soft, Graceful Action Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-4 font-sans-body">
            <button
              onClick={scrollToProjects}
              id="hero-btn-explore-projects"
              className="inline-flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-widest font-medium bg-[#23181C] text-[#FFF8F9] hover:bg-[#C59B27] hover:text-[#23181C] transition-all duration-300 shadow-[0_4px_20px_rgba(35,24,28,0.08)] cursor-pointer group border border-[#C59B27]/40"
            >
              <span>Explore Projects</span>
              <span className="editorial-arrow-circle w-6 h-6 bg-transparent border-[#C59B27]/60 group-hover:bg-[#23181C] group-hover:border-[#23181C] group-hover:text-[#FFF8F9]">
                <SmoothArrowDown size={13} className="animate-arrow-down" />
              </span>
            </button>

            <button
              onClick={scrollToAbout}
              id="hero-btn-about"
              className="inline-flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-widest font-normal bg-[#FFFFFF] text-[#23181C] border border-[#E2889A]/30 hover:border-[#C59B27]/60 hover:bg-[#FDE8ED]/60 transition-all duration-300 cursor-pointer shadow-2xs group"
            >
              <span>About Me</span>
              <span className="editorial-arrow-circle w-6 h-6">
                <SmoothArrowDown size={13} className="animate-arrow-down" />
              </span>
            </button>
          </div>
        </div>

        {/* Hero Bottom Bar: Fluid & Clean */}
        <div className="pt-6 border-t border-[#E2889A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-body font-light text-[#735E66] pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
            <span className="tracking-wide">B.Tech CSE Project Archive &amp; Credentials</span>
          </div>

          {/* Circular Elegant Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-3 text-[#23181C] hover:text-[#C59B27] transition-colors cursor-pointer font-sans-body font-light"
            id="hero-scroll-indicator"
          >
            <span className="text-[11px] uppercase tracking-widest text-[#735E66] group-hover:text-[#23181C] transition-colors">
              Scroll down
            </span>
            <span className="editorial-arrow-circle w-7 h-7">
              <SmoothArrowDown size={14} className="animate-arrow-down" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};


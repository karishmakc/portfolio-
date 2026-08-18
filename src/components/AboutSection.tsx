import React, { useState } from 'react';
import {
  Brain,
  Cpu,
  Globe,
  Code2,
  BarChart3,
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS, INTEREST_AREAS } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#C59B27]" />,
  Brain: <Brain className="w-5 h-5 text-[#C59B27]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#4A7C9D]" />,
  Globe: <Globe className="w-5 h-5 text-[#C59B27]" />,
  Code2: <Code2 className="w-5 h-5 text-[#2E6F95]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#A37E1C]" />,
};

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="about"
      className="w-full bg-[#F0F6FA] border-b border-[#94BBD9]/30 relative"
    >
      <div className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Section Number & Heading Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#94BBD9]/30">
          <div>
            <span className="font-sans-body text-xs uppercase tracking-[0.25em] text-[#C59B27] block mb-2 font-normal">
              SECTION 01
            </span>
            <h2
              id="about-heading"
              className="font-serif-display text-4xl sm:text-6xl font-normal tracking-tight text-[#15222E]"
            >
              About Me
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-sans-body text-xs text-[#4A6072] max-w-xs font-light tracking-wide">
            Academic Foundation · Technical Explorations · Engineering Philosophy
          </p>
        </div>

        {/* Main Grid: Left Profile Editorial + Right Focus & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Student Profile & Core Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E1EDF8] text-[#15222E] text-xs font-sans-body font-normal border border-[#94BBD9]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]"></span>
                <span>{PERSONAL_INFO.degree}</span>
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#15222E] leading-tight">
                {PERSONAL_INFO.name}
              </h3>

              <p className="text-base sm:text-lg text-[#15222E]/90 font-normal leading-relaxed font-serif italic bg-[#FFFFFF]/85 p-5 border border-[#94BBD9]/30">
                &ldquo;{PERSONAL_INFO.shortBio}&rdquo;
              </p>

              <p className="text-sm text-[#4A6072] leading-relaxed font-sans-body font-light">
                {PERSONAL_INFO.detailedBio}
              </p>
            </div>

            {/* Statistics / Highlights Card Group */}
            <div className="mt-10 pt-8 border-t border-[#94BBD9]/30">
              <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#7C92A6] mb-4 font-light">
                Key Academic &amp; Project Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    id={`highlight-card-${idx}`}
                    className="p-4 bg-[#FFFFFF] border border-[#94BBD9]/30 editorial-card flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <span className="font-serif-display text-xl font-normal text-[#15222E] block">
                        {item.label}
                      </span>
                      <span className="text-[11px] font-sans-body text-[#C59B27] font-medium uppercase tracking-wider block mt-0.5">
                        {item.subtext}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] text-[#4A6072] font-sans-body font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interests & "What I Build / Currently Exploring" */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section: 5 Core Academic & Tech Interests */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#15222E] font-medium flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Core Fields of Interest</span>
                </h4>
                <span className="text-xs font-sans-body text-[#7C92A6] font-light">
                  {INTEREST_AREAS.length} Specialized Domains
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTEREST_AREAS.map((interest, index) => {
                  const isSelected = activeTab === index;
                  return (
                    <div
                      key={index}
                      id={`interest-card-${index}`}
                      onClick={() => setActiveTab(index)}
                      className={`p-5 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFFFFF] border-[#C59B27] shadow-md shadow-[#C59B27]/10 ring-1 ring-[#C59B27]/30'
                          : 'bg-[#FFFFFF]/85 border-[#94BBD9]/30 hover:bg-[#FFFFFF] hover:border-[#C59B27]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="p-2 bg-[#E1EDF8] border border-[#94BBD9]/30">
                          {iconMap[interest.icon] || <Code2 className="w-5 h-5 text-[#15222E]" />}
                        </div>
                        <span className="text-[10px] font-sans-body text-[#7C92A6] font-light">
                          0{index + 1}
                        </span>
                      </div>

                      <h5 className="font-serif-display text-lg font-normal text-[#15222E]">
                        {interest.title}
                      </h5>
                      <p className="text-xs text-[#4A6072] mt-1 line-clamp-2 font-sans-body font-light leading-relaxed">
                        {interest.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {interest.skills.slice(0, 3).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 bg-[#F0F6FA] text-[10px] font-sans-body font-light text-[#15222E]/80 border border-[#94BBD9]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* "Currently Exploring" & "What I Build" Interactive Showcase Area */}
            <div className="p-6 sm:p-7 bg-[#E4EFF8] border border-[#94BBD9]/35 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#94BBD9]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse"></span>
                  <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#15222E] font-medium">
                    Currently Exploring &amp; Engineering
                  </h4>
                </div>
                <span className="text-[11px] font-sans-body text-[#C59B27] font-medium">
                  Active Lab Focus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#FFFFFF] border border-[#94BBD9]/30 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#15222E] font-medium mb-1 font-sans-body">
                    <Zap className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Edge AI &amp; IoT Synergy</span>
                  </div>
                  <p className="text-[#4A6072] leading-relaxed text-[11px] font-sans-body font-light">
                    Bridging microcontrollers (ESP32) with lightweight ML inference models for smart agriculture and urban transit sensors.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#94BBD9]/30 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#15222E] font-medium mb-1 font-sans-body">
                    <Layers className="w-3.5 h-3.5 text-[#4A7C9D]" />
                    <span>Semantic Web &amp; Clean Architecture</span>
                  </div>
                  <p className="text-[#4A6072] leading-relaxed text-[11px] font-sans-body font-light">
                    Crafting accessible, robust web standards using modular CSS3 Grid structures, responsive layouts, and zero bloat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

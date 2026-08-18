import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Copy,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SmoothArrowUp, SmoothArrowDiagonal } from './SmoothArrow';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="contact" className="w-full bg-[#FDF0F3] border-t border-[#E2889A]/30 relative">
      <div className="pt-24 pb-20 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2889A]/25">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85066]" />
              <span className="font-sans-body text-xs uppercase tracking-[0.25em] text-[#B85066] font-normal">
                SECTION 04 · CONTACT
              </span>
            </div>
            <h2
              id="contact-heading"
              className="font-serif-display text-4xl sm:text-6xl font-normal tracking-tight text-[#23181C]"
            >
              Let&apos;s Build Something Meaningful.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="font-sans-body text-xs text-[#735E66] font-light max-w-md">
              Inquiries · Collaborations · Academic Opportunities
            </p>
          </div>
        </div>

        {/* Contact Showcase Cards Grid */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-sans-body uppercase tracking-widest text-[#B85066] block mb-1 font-normal">
              Get in Touch
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#23181C]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-[#735E66] mt-2 font-sans-body font-light leading-relaxed">
              {PERSONAL_INFO.degree} · Open for research collaborations, technical discussions, and career opportunities.
            </p>
          </div>

          {/* 3 Channels: Email, LinkedIn, GitHub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card with Copy Action */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E2889A]/30 hover:border-[#B85066] editorial-card flex flex-col justify-between shadow-xs transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#FDE8ED] border border-[#E2889A]/40 text-[#B85066]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans-body text-[#A69199] uppercase tracking-wider font-light">
                    Direct Email
                  </span>
                </div>
                <h4 className="font-serif-display text-xl font-normal text-[#23181C] mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-normal text-[#23181C] font-sans-body hover:text-[#B85066] transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2889A]/20 flex items-center justify-between">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group/mail text-xs font-sans-body text-[#735E66] hover:text-[#B85066] transition-colors font-light inline-flex items-center gap-2"
                >
                  <span>Send email</span>
                  <span className="editorial-arrow-circle w-5 h-5 bg-[#FDE8ED] border-[#E2889A]/60 text-[#B85066] group-hover/mail:bg-[#B85066] group-hover/mail:border-[#B85066] group-hover/mail:text-[#FFFFFF]">
                    <ExternalLink className="w-2.5 h-2.5 animate-arrow-diagonal" />
                  </span>
                </a>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                  id="copy-email-btn"
                  title="Copy Email"
                  className="px-3 py-1.5 bg-[#FFF8F9] hover:bg-[#23181C] hover:text-[#FFF8F9] text-[#23181C] border border-[#E2889A]/30 hover:border-[#B85066] transition-all cursor-pointer text-xs flex items-center gap-1.5 font-sans-body shadow-2xs font-light"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B85066]" />
                      <span className="text-[11px] text-[#B85066] font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B85066]" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-link"
              className="p-6 bg-[#FFFFFF] border border-[#E2889A]/30 editorial-card flex flex-col justify-between group hover:border-[#B85066] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#FDE8ED] border border-[#E2889A]/40 text-[#B85066] group-hover:bg-[#B85066] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans-body text-[#A69199] uppercase tracking-wider font-light">
                    Professional Network
                  </span>
                </div>
                <h4 className="font-serif-display text-xl font-normal text-[#23181C] mb-1 group-hover:text-[#B85066] transition-colors">
                  LinkedIn
                </h4>
                <span className="text-xs font-normal text-[#735E66] font-sans-body group-hover:text-[#23181C] transition-colors break-all block">
                  {PERSONAL_INFO.linkedinDisplay}
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2889A]/20 flex items-center justify-between">
                <span className="text-xs font-sans-body text-[#735E66] group-hover:text-[#23181C] font-light">
                  View Profile
                </span>
                <div className="flex items-center gap-1.5 text-xs font-sans-body text-[#B85066]">
                  <span className="font-normal">Connect</span>
                  <span className="editorial-arrow-circle w-5 h-5 bg-[#FDE8ED] border-[#E2889A]/60 text-[#B85066] group-hover:bg-[#B85066] group-hover:border-[#B85066] group-hover:text-[#FFFFFF]">
                    <SmoothArrowDiagonal size={11} className="animate-arrow-diagonal" />
                  </span>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github-link"
              className="p-6 bg-[#FFFFFF] border border-[#E2889A]/30 editorial-card flex flex-col justify-between group hover:border-[#B85066] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#FDE8ED] border border-[#E2889A]/40 text-[#23181C] group-hover:bg-[#23181C] group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans-body text-[#A69199] uppercase tracking-wider font-light">
                    Open Source
                  </span>
                </div>
                <h4 className="font-serif-display text-xl font-normal text-[#23181C] mb-1 group-hover:text-[#B85066] transition-colors">
                  GitHub
                </h4>
                <span className="text-xs font-normal text-[#735E66] font-sans-body group-hover:text-[#23181C] transition-colors break-all block">
                  {PERSONAL_INFO.githubDisplay}
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2889A]/20 flex items-center justify-between">
                <span className="text-xs font-sans-body text-[#735E66] group-hover:text-[#23181C] font-light">
                  Browse Code
                </span>
                <div className="flex items-center gap-1.5 text-xs font-sans-body text-[#B85066]">
                  <span className="font-normal">Explore</span>
                  <span className="editorial-arrow-circle w-5 h-5 bg-[#FDE8ED] border-[#E2889A]/60 text-[#B85066] group-hover:bg-[#B85066] group-hover:border-[#B85066] group-hover:text-[#FFFFFF]">
                    <SmoothArrowDiagonal size={11} className="animate-arrow-diagonal" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Availability & Location Bar */}
          <div className="p-4 bg-[#FFFFFF] border border-[#E2889A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans-body shadow-xs">
            <div className="flex items-center gap-2 text-[#735E66]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B85066] animate-pulse"></span>
              <span className="font-normal text-[#23181C]">{PERSONAL_INFO.availability}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#735E66] font-light">
              <MapPin className="w-3.5 h-3.5 text-[#B85066]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Black and Gold Footer Section */}
      <footer className="w-full bg-[#181114] border-t-2 border-[#C59B27]/40 text-[#FFF8F9] relative overflow-hidden">
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-24 bg-[#C59B27]/10 blur-3xl pointer-events-none" />

        <div className="py-12 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              <p className="font-serif-display text-lg text-[#FFF8F9] font-normal tracking-wide">
                © 2026 {PERSONAL_INFO.name}
              </p>
            </div>
            <p className="text-xs text-[#A69199] font-sans-body font-light pl-3.5">
              Computer Science &amp; Engineering · {PERSONAL_INFO.degree} · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="group inline-flex items-center gap-3 px-5 py-2.5 bg-[#23181C] text-[#FFF8F9] border border-[#C59B27]/60 hover:bg-[#C59B27] hover:text-[#181114] hover:border-[#C59B27] transition-all duration-300 cursor-pointer text-xs shadow-md font-medium tracking-wide"
            >
              <span className="font-sans-body">Back to Top</span>
              <span className="editorial-arrow-circle w-6 h-6 bg-[#181114] border-[#C59B27] text-[#C59B27] group-hover:bg-[#181114] group-hover:border-[#181114] group-hover:text-[#C59B27]">
                <SmoothArrowUp size={13} className="animate-arrow-up" />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

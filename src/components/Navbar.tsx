import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SmoothArrowDiagonal } from './SmoothArrow';

interface NavbarProps {
  onOpenSpecsModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSpecsModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav indicator
      const sections = ['about', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8F9]/90 backdrop-blur-md border-b border-[#E2889A]/20 py-3.5 shadow-xs shadow-[#C59B27]/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col"
          id="nav-brand-link"
        >
          <span className="font-serif-display text-2xl tracking-normal text-[#23181C] group-hover:text-[#C59B27] transition-colors flex items-center gap-1.5 font-normal">
            <span className="italic text-[#B85066] group-hover:text-[#C59B27] font-normal">Karishma</span>
            <span className="text-[#23181C] font-normal">K C</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]/80"></span>
          </span>
          <span className="text-[10px] font-sans-body tracking-[0.2em] text-[#735E66] uppercase -mt-0.5 font-light">
            Portfolio &amp; Engineering Archive
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-normal">
          <button
            onClick={() => scrollToSection('about')}
            id="nav-link-about"
            className={`nav-link text-[#23181C]/80 hover:text-[#C59B27] py-1 cursor-pointer transition-colors ${
              activeSection === 'about' ? 'active font-medium text-[#C59B27]' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            id="nav-link-projects"
            className={`nav-link text-[#23181C]/80 hover:text-[#C59B27] py-1 cursor-pointer transition-colors ${
              activeSection === 'projects' ? 'active font-medium text-[#C59B27]' : ''
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            id="nav-link-certifications"
            className={`nav-link text-[#23181C]/80 hover:text-[#C59B27] py-1 cursor-pointer transition-colors ${
              activeSection === 'certifications' ? 'active font-medium text-[#C59B27]' : ''
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            id="nav-link-contact"
            className={`nav-link text-[#23181C]/80 hover:text-[#C59B27] py-1 cursor-pointer transition-colors ${
              activeSection === 'contact' ? 'active font-medium text-[#C59B27]' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {onOpenSpecsModal && (
            <button
              onClick={onOpenSpecsModal}
              id="nav-specs-btn"
              title="View HTML5 & CSS3 Assignment Architecture & Grid Specs"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-sans-body bg-[#FDE8ED]/80 hover:bg-[#F9D7DF] text-[#23181C] border border-[#E2889A]/30 hover:border-[#C59B27]/40 transition-all cursor-pointer font-light"
            >
              <Code className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>HTML/CSS Specs</span>
            </button>
          )}

          <button
            onClick={() => scrollToSection('contact')}
            id="nav-cta-contact"
            className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-wider bg-[#23181C] text-[#FFF8F9] hover:bg-[#C59B27] hover:text-[#23181C] transition-all duration-300 shadow-xs cursor-pointer border border-[#C59B27]/40 group"
          >
            <span>Get in Touch</span>
            <span className="editorial-arrow-circle w-5 h-5 bg-transparent border-[#C59B27]/60 group-hover:bg-[#23181C] group-hover:border-[#23181C] group-hover:text-[#FFF8F9]">
              <SmoothArrowDiagonal size={11} className="animate-arrow-diagonal" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenSpecsModal && (
            <button
              onClick={onOpenSpecsModal}
              aria-label="View Specs"
              className="p-2 text-xs font-sans-body bg-[#FDE8ED] text-[#23181C] border border-[#E2889A]/30 font-light"
            >
              <Code className="w-4 h-4 text-[#C59B27]" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="p-2.5 text-[#23181C] hover:bg-[#FDE8ED] transition-colors cursor-pointer border border-[#E2889A]/20"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FFF8F9] border-b border-[#E2889A]/20 px-6 py-6 animate-fade-in shadow-xl font-sans-body"
        >
          <div className="flex flex-col gap-4 text-sm font-normal">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-[#23181C] border-b border-[#E2889A]/15 hover:text-[#C59B27] flex items-center justify-between font-normal"
            >
              <span>01. About Me</span>
              <span className="text-xs font-sans-body text-[#735E66] font-light">B.Tech CSE</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left py-2 text-[#23181C] border-b border-[#E2889A]/15 hover:text-[#C59B27] flex items-center justify-between font-normal"
            >
              <span>02. Featured Projects</span>
              <span className="text-xs font-sans-body text-[#C59B27] font-medium">6 Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-left py-2 text-[#23181C] border-b border-[#E2889A]/15 hover:text-[#C59B27] flex items-center justify-between font-normal"
            >
              <span>03. Certifications</span>
              <span className="text-xs font-sans-body text-[#735E66] font-light">Credentials</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-[#23181C] hover:text-[#C59B27] flex items-center justify-between font-normal"
            >
              <span>04. Contact &amp; Inquiries</span>
              <span className="text-xs font-sans-body text-[#735E66] font-light">Connect</span>
            </button>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-normal bg-[#23181C] text-[#FFF8F9] hover:bg-[#C59B27] hover:text-[#23181C] transition-colors border border-[#C59B27]/30"
              >
                Let&apos;s Build Something Meaningful
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

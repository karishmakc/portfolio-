import React, { useState } from 'react';
import { X, Code, CheckCircle2, Layout, Smartphone, Monitor, BookOpen, Copy } from 'lucide-react';

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssignmentSpecsModal: React.FC<SpecsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'css' | 'html' | 'viva'>('css');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  if (!isOpen) return null;

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const cssCodeSnippet = `/* 1. CSS3 GRID FOR PROJECTS (Desktop 3-Columns, Mobile 1-Column) */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Tablet Breakpoint (2 Columns) */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

/* Mobile Breakpoint (1 Column) */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

/* 2. PASTEL PINK & GOLDEN DESIGN SYSTEM VARIABLES */
:root {
  --bg-canvas: #FFF8F9;       /* Soft blush canvas */
  --text-main: #23181C;       /* Deep rose-noir text */
  --accent-gold: #C59B27;     /* Warm golden metallic */
  --accent-pink: #E2889A;     /* Elegant pastel pink */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'Space Grotesk', monospace;
}`;

  return (
    <div
      id="specs-inspector-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#23181C]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF8F9] w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#E2889A]/30 shadow-2xl p-6 sm:p-8 relative text-[#23181C]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-[#FDE8ED] text-[#23181C] hover:bg-[#23181C] hover:text-[#FFF8F9] border border-[#E2889A]/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-[#23181C] text-[#C59B27] border border-[#C59B27]/40 shadow-xs">
            <Code className="w-4 h-4" />
          </span>
          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#23181C]">
              HTML5 &amp; CSS3 Architecture Inspector
            </h3>
            <p className="text-xs font-sans-body font-light text-[#735E66]">
              Academic Evaluation &amp; Viva Defense Documentation · Pastel Pink &amp; Golden Theme
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mt-6 pb-3 border-b border-[#E2889A]/20 text-xs font-sans-body font-normal">
          <button
            onClick={() => setActiveTab('css')}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              activeTab === 'css'
                ? 'bg-[#23181C] text-[#FFF8F9] font-medium border border-[#C59B27]/40'
                : 'bg-[#FDE8ED] text-[#23181C] hover:bg-[#FCE0E8]'
            }`}
          >
            CSS Grid &amp; Media Queries
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              activeTab === 'html'
                ? 'bg-[#23181C] text-[#FFF8F9] font-medium border border-[#C59B27]/40'
                : 'bg-[#FDE8ED] text-[#23181C] hover:bg-[#FCE0E8]'
            }`}
          >
            Semantic HTML5 Tree
          </button>
          <button
            onClick={() => setActiveTab('viva')}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              activeTab === 'viva'
                ? 'bg-[#23181C] text-[#FFF8F9] font-medium border border-[#C59B27]/40'
                : 'bg-[#FDE8ED] text-[#23181C] hover:bg-[#FCE0E8]'
            }`}
          >
            Viva Defense Notes
          </button>
        </div>

        {/* Tab 1: CSS Grid Code */}
        {activeTab === 'css' && (
          <div className="mt-4 space-y-4 font-sans-body">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#C59B27]">
                Explicit Grid Specification Compliance
              </span>
              <button
                onClick={() => copyCode(cssCodeSnippet)}
                className="px-2.5 py-1 bg-[#FDE8ED] text-xs flex items-center gap-1 hover:bg-[#23181C] hover:text-[#FFF8F9] text-[#23181C] border border-[#E2889A]/30 transition-colors cursor-pointer font-light"
              >
                <Copy className="w-3 h-3 text-[#C59B27]" />
                <span>{copiedSnippet ? 'Copied!' : 'Copy CSS'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#23181C] text-[#FFF8F9] font-mono text-xs overflow-x-auto leading-relaxed border border-[#C59B27]/30 shadow-inner">
              <code>{cssCodeSnippet}</code>
            </pre>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 flex items-center gap-2 shadow-2xs">
                <Monitor className="w-4 h-4 text-[#C59B27]" />
                <div>
                  <span className="block font-medium text-[#23181C]">Desktop (&gt;1024px)</span>
                  <span className="text-[10px] text-[#735E66] font-light">3 Columns</span>
                </div>
              </div>
              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 flex items-center gap-2 shadow-2xs">
                <Layout className="w-4 h-4 text-[#E2889A]" />
                <div>
                  <span className="block font-medium text-[#23181C]">Tablet (768-1024px)</span>
                  <span className="text-[10px] text-[#735E66] font-light">2 Columns</span>
                </div>
              </div>
              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 flex items-center gap-2 shadow-2xs">
                <Smartphone className="w-4 h-4 text-[#B85066]" />
                <div>
                  <span className="block font-medium text-[#23181C]">Mobile (&lt;768px)</span>
                  <span className="text-[10px] text-[#735E66] font-light">1 Column</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: HTML Tree */}
        {activeTab === 'html' && (
          <div className="mt-4 space-y-3 text-xs font-sans-body font-light">
            <p className="text-sm text-[#735E66]">
              This assignment utilizes 100% W3C-compliant semantic HTML5 containers rather than non-semantic generic div tags:
            </p>
            <div className="p-4 bg-[#FFFFFF] border border-[#E2889A]/25 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;header id=&quot;main-navbar&quot;&gt; &amp; &lt;nav&gt; — Fixed Sticky Header</span>
              </div>
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;section id=&quot;hero&quot;&gt; — Cinematic Hero Showcase</span>
              </div>
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;section id=&quot;about&quot;&gt; — Section 01: About Me &amp; Highlights</span>
              </div>
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;section id=&quot;projects&quot;&gt; &amp; &lt;article&gt; — Section 02: 3-Col Projects Grid</span>
              </div>
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;section id=&quot;certifications&quot;&gt; — Section 03: Certifications &amp; Accreditations</span>
              </div>
              <div className="flex items-center gap-2 text-[#23181C] font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>&lt;section id=&quot;contact&quot;&gt; &amp; &lt;footer&gt; — Section 04: Form &amp; Footer</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Viva Notes */}
        {activeTab === 'viva' && (
          <div className="mt-4 space-y-3 text-xs font-sans-body">
            <h4 className="font-serif-display text-xl font-normal text-[#23181C]">
              Key Points to Explain During Viva / Faculty Evaluation
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 shadow-2xs">
                <strong className="block text-[#C59B27] font-medium">
                  1. How is the 3-column project layout achieved?
                </strong>
                <p className="text-[#735E66] mt-1 font-light leading-relaxed">
                  Using CSS Grid with <code className="font-mono text-[#B85066]">grid-template-columns: repeat(3, 1fr)</code>, coupled with media queries (<code className="font-mono text-[#B85066]">max-width: 1024px</code> for 2 columns, <code className="font-mono text-[#B85066]">max-width: 768px</code> for 1 column) to guarantee zero horizontal overflow.
                </p>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 shadow-2xs">
                <strong className="block text-[#B85066] font-medium">
                  2. Why was pastel pink paired with golden tones and editorial serif?
                </strong>
                <p className="text-[#735E66] mt-1 font-light leading-relaxed">
                  The palette combines a delicate, warm blush background (<code className="font-mono">#FFF8F9</code>) with luxurious gold accents (<code className="font-mono">#C59B27</code>) and editorial Cormorant Garamond typography, creating a soft, airy and sophisticated aesthetic with pristine contrast.
                </p>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[#E2889A]/25 shadow-2xs">
                <strong className="block text-[#A37E1C] font-medium">
                  3. What projects highlight CSE breadth?
                </strong>
                <p className="text-[#735E66] mt-1 font-light leading-relaxed">
                  The projects span low-level System Software (CPU Scheduling Visualizer), Machine Learning (Crop &amp; Climate Risk Advisor), Embedded IoT (Bus &amp; Water Tank Telemetry), and Web Standards (Accessible Academic Portfolio).
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#E2889A]/20 flex justify-end font-sans-body">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#23181C] text-[#FFF8F9] text-xs font-normal hover:bg-[#C59B27] hover:text-[#23181C] border border-[#C59B27]/40 transition-colors cursor-pointer shadow-xs"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};

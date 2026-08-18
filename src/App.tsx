/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { AssignmentSpecsModal } from './components/AssignmentSpecsModal';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F9] text-[#23181C] selection:bg-[#C59B27] selection:text-[#FFFFFF] relative subtle-paper-texture">
      {/* Editorial Opening / Loading Screen with Smooth Exit Fade */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="opening-loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Fixed Navigation Bar */}
      <Navbar onOpenSpecsModal={() => setSpecsModalOpen(true)} />

      {/* Main Content Area */}
      <main id="top" className="relative">
        {/* Hero Area */}
        <Hero />

        {/* Section 01: About Me */}
        <AboutSection />

        {/* Section 02: Featured Projects (3-Col CSS Grid) */}
        <ProjectsSection />

        {/* Section 03: Certifications */}
        <CertificationsSection />

        {/* Section 04: Contact & Footer */}
        <ContactSection />
      </main>

      {/* Assignment Architecture & Viva Inspector Modal */}
      <AssignmentSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
      />
    </div>
  );
}

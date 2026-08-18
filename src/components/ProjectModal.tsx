import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectCardGraphic } from './ProjectCardGraphic';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#23181C]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF8F9] w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#E2889A]/30 shadow-2xl p-6 sm:p-8 relative text-[#23181C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Close project modal"
          className="absolute top-6 right-6 p-2 bg-[#FDE8ED] text-[#23181C] hover:bg-[#23181C] hover:text-[#FFF8F9] border border-[#E2889A]/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-sans-body font-normal bg-[#23181C] text-[#FFF8F9] border border-[#C59B27]/40">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-sans-body text-[#C59B27] font-normal uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-serif-display text-3xl sm:text-4xl font-normal tracking-tight text-[#23181C]">
          {project.title}
        </h3>
        <p className="font-serif text-base sm:text-lg text-[#735E66] italic mt-1 font-normal">
          {project.tagline}
        </p>

        {/* Visual Graphic Representation */}
        <div className="my-6 border border-[#E2889A]/20">
          <ProjectCardGraphic projectId={project.id} />
        </div>

        {/* Detailed Description */}
        <div className="space-y-4">
          <div>
            <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#23181C] font-normal mb-2">
              Project Overview &amp; Problem Statement
            </h4>
            <p className="text-sm sm:text-base text-[#735E66] leading-relaxed font-sans-body font-light bg-[#FFFFFF]/70 p-4 border border-[#E2889A]/20">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="pt-3 border-t border-[#E2889A]/20">
            <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#23181C] font-normal mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Core Architectural Highlights</span>
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#23181C] font-sans-body font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-3 border-t border-[#E2889A]/20">
            <h4 className="font-sans-body text-xs uppercase tracking-widest text-[#23181C] font-normal mb-3">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#FFFFFF] border border-[#E2889A]/30 text-xs font-sans-body font-light text-[#23181C] shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* System Architecture Overview */}
          {project.architectureOverview && (
            <div className="p-4 bg-[#FDF0F3] border border-[#E2889A]/25 text-xs">
              <span className="font-sans-body font-normal text-[#23181C] block mb-1">
                Data Flow &amp; Execution Model:
              </span>
              <p className="text-[#735E66] font-sans-body font-light leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-[#E2889A]/20 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-sans-body font-light text-[#A69199]">
            Karishma K C — B.Tech CSE Project Archive
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#23181C] text-[#FFF8F9] hover:bg-[#C59B27] hover:text-[#23181C] text-xs font-normal tracking-wide transition-colors cursor-pointer border border-[#C59B27]/40 shadow-xs"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};

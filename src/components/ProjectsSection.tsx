import React, { useState } from 'react';
import { Code, Layers, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCardGraphic } from './ProjectCardGraphic';
import { ProjectModal } from './ProjectModal';
import { SmoothArrowDiagonal } from './SmoothArrow';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'System Software', 'Artificial Intelligence', 'Internet of Things', 'Web Development'];

  const filteredProjects =
    filterCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section
      id="projects"
      className="w-full bg-[#FFF8F9] border-b border-[#E2889A]/20 relative"
    >
      <div className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2889A]/20">
          <div>
            <span className="font-sans-body text-xs uppercase tracking-[0.25em] text-[#C59B27] block mb-2 font-normal">
              SECTION 02
            </span>
            <h2
              id="projects-heading"
              className="font-serif-display text-4xl sm:text-6xl font-normal tracking-tight text-[#23181C]"
            >
              Featured Projects
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <p className="font-sans-body text-xs text-[#735E66] font-light">
              5 Engineering Endeavors · System Software · IoT · AI
            </p>
            <span className="text-[11px] font-sans-body text-[#C59B27] font-normal mt-1">
              Pure CSS3 Responsive Grid (3-Col Desktop / 1-Col Mobile)
            </span>
          </div>
        </div>

        {/* Filter Tabs for quick exploration */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-sans-body no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer whitespace-nowrap font-normal ${
                filterCategory === cat
                  ? 'bg-[#23181C] text-[#FFF8F9] border-[#C59B27]/40 font-medium shadow-xs'
                  : 'bg-[#FFFFFF] text-[#735E66] border-[#E2889A]/25 hover:border-[#C59B27]/40 hover:text-[#23181C] hover:bg-[#FDE8ED]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects 3-Column Grid - Uses the explicit .projects-grid class defined in index.css */}
        <div className="projects-grid" id="projects-grid-container">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.number}`}
              className="group relative flex flex-col justify-between p-6 bg-[#FFFFFF] border border-[#E2889A]/25 editorial-card shadow-xs"
            >
              {/* Top Bar: Number & Category */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans-body text-xs font-normal text-[#C59B27] tracking-wider px-2.5 py-0.5 bg-[#FDE8ED] border border-[#E2889A]/20">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[10px] font-sans-body text-[#735E66] uppercase tracking-wider font-light">
                    {project.category}
                  </span>
                </div>

                {/* Graphic / Abstract Preview Area */}
                <div className="mb-5 overflow-hidden border border-[#E2889A]/20 group-hover:shadow-xs transition-shadow">
                  <ProjectCardGraphic projectId={project.id} />
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif-display text-2xl font-normal text-[#23181C] group-hover:text-[#C59B27] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Short Description matching assignment requirements */}
                <p className="mt-2 text-xs sm:text-sm text-[#735E66] leading-relaxed line-clamp-3 font-sans-body font-light">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Technologies Used & Explore Interaction Button */}
              <div className="mt-6 pt-4 border-t border-[#E2889A]/20">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#FFF8F9] text-[10px] font-sans-body text-[#23181C]/80 border border-[#E2889A]/20 font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`explore-btn-${project.number}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs font-normal tracking-wider bg-[#FFF8F9] text-[#23181C] border border-[#E2889A]/30 group-hover:bg-[#23181C] group-hover:text-[#FFF8F9] group-hover:border-[#C59B27] transition-all duration-300 cursor-pointer shadow-2xs group/btn"
                >
                  <span>Explore Project Details</span>
                  <span className="editorial-arrow-circle w-5 h-5 bg-transparent border-[#C59B27]/50 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] group-hover:text-[#23181C]">
                    <SmoothArrowDiagonal size={11} className="animate-arrow-diagonal" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

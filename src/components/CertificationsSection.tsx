import React, { useState } from 'react';
import { Award, CheckCircle2, Calendar, Building2, ShieldCheck, X, FileCheck, Sparkles, Clock } from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Certification } from '../types';
import { SmoothArrowDiagonal } from './SmoothArrow';

export const CertificationsSection: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<Certification | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (certId: string) => {
    setImageErrorMap((prev) => ({ ...prev, [certId]: true }));
  };

  return (
    <section
      id="certifications"
      className="w-full bg-[#EFF6FC] border-y border-[#CDE1F4] relative"
    >
      <div className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#CDE1F4]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A6EB5]" />
              <span className="font-sans-body text-xs uppercase tracking-[0.25em] text-[#2A6EB5] font-normal">
                SECTION 03 · CREDENTIALS
              </span>
            </div>
            <h2
              id="certifications-heading"
              className="font-serif-display text-4xl sm:text-6xl font-normal tracking-tight text-[#16273B]"
            >
              Certifications &amp; Accreditations
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="font-sans-body text-xs text-[#526B85] font-light max-w-md">
              Verified industry credentials in Artificial Intelligence, Cloud Infrastructure, and Continuous Technical Learning.
            </p>
          </div>
        </div>

        {/* Certifications Grid (2 Actual + 2 Future Holders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const isPlaceholder = cert.isPlaceholder || false;
            const hasImgError = imageErrorMap[cert.id];

            return (
              <article
                key={cert.id}
                id={`cert-card-${index + 1}`}
                className={`group p-6 sm:p-7 bg-[#FFFFFF] border border-[#D0E2F2] hover:border-[#2A6EB5] transition-all duration-400 flex flex-col justify-between shadow-[0_4px_20px_rgba(22,39,59,0.04)] hover:shadow-[0_12px_36px_rgba(42,110,181,0.12)] relative ${
                  isPlaceholder ? 'opacity-90' : ''
                }`}
              >
                <div>
                  {/* Card Top Meta: Badge & Category */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E1EDF7] text-xs font-sans-body">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-[#E6F0FA] border border-[#C6DCF2] text-[#2A6EB5]">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-[#526B85] tracking-wider">
                        {cert.badgeCode}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.verification && (
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-[#E6F0FA] border border-[#BED7F0] text-[#1E5D9C] font-normal">
                          <CheckCircle2 className="w-3 h-3 text-[#2A6EB5]" />
                          <span>{cert.verification}</span>
                        </span>
                      )}
                      {isPlaceholder && (
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-[#F0F6FC] border border-[#C59B27]/40 text-[#A37E1C] font-normal">
                          <Clock className="w-3 h-3" />
                          <span>Placeholder Slot</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate Image Frame with Hover Zoom & Soft Blue/Gold Border */}
                  <div
                    onClick={() => setActiveCertModal(cert)}
                    className="relative w-full aspect-[16/10] bg-[#F5F9FD] border border-[#D0E2F2] group-hover:border-[#2A6EB5] transition-all duration-400 overflow-hidden cursor-pointer mb-5 shadow-2xs group/img"
                  >
                    {/* Double hairline inner border */}
                    <div className="absolute inset-1.5 border border-[#E1EDF7] group-hover:border-[#2A6EB5]/30 pointer-events-none z-10 transition-colors" />

                    {!hasImgError ? (
                      <img
                        src={cert.imagePath}
                        alt={`${cert.name} Certificate`}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(cert.id)}
                        className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                    ) : (
                      /* Elegant Fallback Canvas */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F5F9FD] via-[#FFFFFF] to-[#E6F0FA]">
                        <div className="w-12 h-12 rounded-full bg-[#E6F0FA] border border-[#BED7F0] flex items-center justify-center text-[#2A6EB5] mb-3">
                          <Award className="w-6 h-6" />
                        </div>
                        <span className="font-serif-display text-base text-[#16273B] font-normal line-clamp-1">
                          {cert.name}
                        </span>
                        <span className="text-xs text-[#526B85] font-sans-body mt-1">
                          {cert.organization} · {cert.issueDate}
                        </span>
                        <span className="text-[10px] font-mono text-[#2A6EB5] mt-2">
                          {cert.imagePath}
                        </span>
                      </div>
                    )}

                    {/* Subtle Overlay Badge on Hover */}
                    <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-[#16273B]/90 text-[#FFFFFF] font-sans-body border border-[#2A6EB5]/60 backdrop-blur-xs">
                        <span>Click to Enlarge</span>
                        <SmoothArrowDiagonal size={10} className="text-[#84BAF5]" />
                      </span>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#16273B] leading-snug group-hover:text-[#2A6EB5] transition-colors">
                    {cert.name}
                  </h3>

                  {/* Organization & Issue Date */}
                  <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-sans-body">
                    <div className="flex items-center gap-1.5 text-[#2A6EB5] font-medium">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{cert.organization}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[#526B85] font-light">
                      <Calendar className="w-3.5 h-3.5 text-[#2A6EB5] shrink-0" />
                      <span>
                        Issued: <strong className="font-medium text-[#16273B]">{cert.issueDate}</strong>
                      </span>
                    </div>

                    {cert.certificationLevel && (
                      <span className="px-2 py-0.5 bg-[#E6F0FA] border border-[#BED7F0] text-[10px] text-[#1E5D9C]">
                        {cert.certificationLevel}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#526B85] leading-relaxed font-sans-body font-light">
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="mt-4 pt-3 border-t border-[#E1EDF7] flex flex-wrap gap-1.5">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-[#F0F6FC] text-[10px] font-sans-body font-light text-[#16273B] border border-[#D0E2F2]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* VS Code Image Path Guide */}
                  <div className="mt-3 pt-2 text-[10px] font-mono text-[#526B85]/90 flex items-center gap-1.5">
                    <span className="text-[#2A6EB5]">Path:</span>
                    <code className="bg-[#F0F6FC] px-1.5 py-0.5 border border-[#D0E2F2] text-[#16273B]">
                      {cert.imagePath}
                    </code>
                  </div>
                </div>

                {/* View Certificate Action Button */}
                <div className="mt-6 pt-4 border-t border-[#E1EDF7]">
                  <button
                    onClick={() => setActiveCertModal(cert)}
                    id={`view-cert-btn-${index + 1}`}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs font-normal tracking-wide bg-[#F5F9FD] text-[#16273B] border border-[#D0E2F2] hover:bg-[#16273B] hover:text-[#FFFFFF] hover:border-[#2A6EB5] transition-all duration-300 cursor-pointer group/btn shadow-2xs"
                  >
                    <span>{isPlaceholder ? 'View Image Holder Slot' : 'View Full Certificate'}</span>
                    <span className="editorial-arrow-circle w-5 h-5 bg-transparent border-[#2A6EB5]/50 group-hover/btn:bg-[#2A6EB5] group-hover/btn:border-[#2A6EB5] group-hover/btn:text-[#FFFFFF]">
                      <SmoothArrowDiagonal size={11} className="animate-arrow-diagonal" />
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Informative Editorial Note for Reviewer/Examiner */}
        <div className="mt-10 p-5 bg-[#FFFFFF] border border-[#CDE1F4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans-body font-light shadow-2xs">
          <div className="flex items-start sm:items-center gap-3 text-[#16273B]">
            <div className="p-2 bg-[#E6F0FA] border border-[#BED7F0] text-[#2A6EB5] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-medium text-[#16273B]">Accreditation Verification &amp; Asset Management:</span>{' '}
              <span className="text-[#526B85]">
                Certificates are mapped directly to image assets in <code className="font-mono text-[#2A6EB5] bg-[#F0F6FC] px-1 py-0.5 border border-[#D0E2F2]">/public/certificate-ibm.jpg</code>,{' '}
                <code className="font-mono text-[#2A6EB5] bg-[#F0F6FC] px-1 py-0.5 border border-[#D0E2F2]">/public/certificate-oracle.jpg</code>, and future slots <code className="font-mono text-[#2A6EB5] bg-[#F0F6FC] px-1 py-0.5 border border-[#D0E2F2]">certificate-3.jpg</code> / <code className="font-mono text-[#2A6EB5] bg-[#F0F6FC] px-1 py-0.5 border border-[#D0E2F2]">certificate-4.jpg</code>.
              </span>
            </div>
          </div>
        </div>

        {/* High-Resolution Certificate Modal */}
        {activeCertModal && (
          <div
            id="cert-viewer-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16273B]/75 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveCertModal(null)}
          >
            <div
              className="bg-[#F8FAFD] w-full max-w-3xl border border-[#BED7F0] shadow-2xl p-6 sm:p-8 relative text-[#16273B] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCertModal(null)}
                aria-label="Close certificate modal"
                className="absolute top-5 right-5 p-2 bg-[#FFFFFF] text-[#16273B] hover:bg-[#16273B] hover:text-[#FFFFFF] border border-[#D0E2F2] hover:border-[#2A6EB5] transition-colors cursor-pointer z-20 shadow-2xs"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pb-4 border-b border-[#D0E2F2] pr-10">
                <div className="flex items-center gap-2 text-xs font-sans-body text-[#2A6EB5] mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest">{activeCertModal.organization}</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#16273B]">
                  {activeCertModal.name}
                </h3>
                <p className="text-xs text-[#526B85] font-sans-body mt-1">
                  Issued to <strong className="font-medium text-[#16273B]">{PERSONAL_INFO.name}</strong> on{' '}
                  <strong className="font-medium text-[#16273B]">{activeCertModal.issueDate}</strong>
                </p>
              </div>

              {/* Certificate Image Frame */}
              <div className="p-4 sm:p-6 bg-[#FFFFFF] border-2 border-[#BED7F0] shadow-inner relative text-center">
                <div className="relative w-full aspect-[16/10] bg-[#F5F9FD] border border-[#D0E2F2] overflow-hidden flex items-center justify-center">
                  <img
                    src={activeCertModal.imagePath}
                    alt={`${activeCertModal.name} Certificate Full Preview`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(activeCertModal.id)}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Details under image */}
                <div className="mt-5 pt-4 border-t border-[#D0E2F2] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs font-sans-body">
                  <div className="p-2.5 bg-[#F5F9FD] border border-[#D0E2F2]">
                    <span className="text-[10px] text-[#526B85] block uppercase tracking-wider">Credential ID</span>
                    <span className="font-mono font-medium text-[#16273B]">{activeCertModal.badgeCode}</span>
                  </div>
                  <div className="p-2.5 bg-[#F5F9FD] border border-[#D0E2F2]">
                    <span className="text-[10px] text-[#526B85] block uppercase tracking-wider">Verification Status</span>
                    <span className="font-medium text-[#2A6EB5] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {activeCertModal.verification || 'Verified Credential'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#F5F9FD] border border-[#D0E2F2]">
                    <span className="text-[10px] text-[#526B85] block uppercase tracking-wider">Asset File</span>
                    <span className="font-mono text-[11px] text-[#16273B] truncate block">{activeCertModal.imagePath}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-[#526B85] font-sans-body">
                  Target asset: <code className="text-[#2A6EB5]">{activeCertModal.imagePath}</code>
                </span>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="px-6 py-2.5 bg-[#16273B] text-[#FFFFFF] text-xs font-normal hover:bg-[#2A6EB5] transition-colors cursor-pointer border border-[#BED7F0] shadow-xs uppercase tracking-wider"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

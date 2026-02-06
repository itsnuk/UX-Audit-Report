import React from 'react';

const AuditHeader: React.FC = () => {
  return (
    <div className="bg-text text-white pt-12 pb-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[11px] font-semibold tracking-[2px] uppercase text-critical mb-3">
          UX Audit Report
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          Alfaplas Homepage Audit
        </h1>
        <div className="text-text-muted text-base mb-6">
          Lead generation analysis with prioritized findings and reference examples
        </div>
        <div className="flex gap-x-8 gap-y-2 flex-wrap text-[13px] text-text-muted">
          <div className="meta-item"><strong className="text-white font-semibold">Client:</strong> Alfaplas (thealfaplas.com)</div>
          <div className="meta-item"><strong className="text-white font-semibold">Scope:</strong> Homepage</div>
          <div className="meta-item"><strong className="text-white font-semibold">Goal:</strong> Generate leads & inquiries</div>
          <div className="meta-item"><strong className="text-white font-semibold">Audience:</strong> Architects, Distributors, Procurement</div>
          <div className="meta-item"><strong className="text-white font-semibold">Date:</strong> February 6, 2026</div>
        </div>
      </div>
    </div>
  );
};

export default AuditHeader;
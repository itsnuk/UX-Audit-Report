import React from 'react';
import { Finding, Severity } from '../types';

interface FindingCardProps {
  finding: Finding;
}

const getSeverityColors = (severity: Severity) => {
  switch (severity) {
    case 'critical': return { 
      bg: 'bg-critical', 
      text: 'text-critical', 
      border: 'border-critical',
      fixBg: 'bg-white' 
    };
    case 'high': return { 
      bg: 'bg-high', 
      text: 'text-high', 
      border: 'border-high',
      fixBg: 'bg-white' 
    };
    case 'medium': return { 
      bg: 'bg-medium', 
      text: 'text-medium', 
      border: 'border-medium',
      fixBg: 'bg-white' 
    };
    case 'low': return { 
      bg: 'bg-low', 
      text: 'text-low', 
      border: 'border-low',
      fixBg: 'bg-white' 
    };
  }
};

const EffortTag: React.FC<{ effort: Finding['effort'] }> = ({ effort }) => {
  let styles = 'bg-slate-100 text-slate-500';
  if (effort === 'Low') styles = 'bg-low-bg text-low';
  if (effort === 'Medium') styles = 'bg-high-bg text-high';
  if (effort === 'High') styles = 'bg-critical-bg text-critical';

  return (
    <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded ${styles}`}>
      {effort}
    </span>
  );
};

const FindingCard: React.FC<FindingCardProps> = ({ finding }) => {
  const colors = getSeverityColors(finding.severity);

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200">
      <div className="pt-5 px-5 pb-0 flex items-start gap-3">
        <div className={`w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
          {finding.id}
        </div>
        <div className="flex-1">
          <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${colors.text}`}>
            {finding.section}
          </div>
          <div className="text-[15px] font-semibold text-text leading-snug">
            {finding.title}
          </div>
        </div>
      </div>
      
      <div className="px-5 pb-5 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3.5">
          <div className="text-xs">
            <div className="font-semibold text-text-muted uppercase tracking-[0.5px] text-[10px] mb-0.5">Heuristic</div>
            <div className="text-text-secondary leading-normal">{finding.heuristic}</div>
          </div>
          <div className="text-xs">
            <div className="font-semibold text-text-muted uppercase tracking-[0.5px] text-[10px] mb-0.5">Effort</div>
            <div><EffortTag effort={finding.effort} /></div>
          </div>
        </div>

        {finding.impact && (
          <div className="text-xs mb-3.5">
            <div className="font-semibold text-text-muted uppercase tracking-[0.5px] text-[10px] mb-0.5">Impact</div>
            <div className="text-text-secondary leading-normal">{finding.impact}</div>
          </div>
        )}

        <div className={`bg-bg rounded-lg p-3.5 border-l-[3px] ${colors.border}`}>
          <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${colors.text}`}>Recommended Fix</div>
          <div className="text-[13px] text-text-secondary leading-relaxed">
            {finding.fix}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindingCard;
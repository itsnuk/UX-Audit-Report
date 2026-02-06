import React from 'react';
import AuditHeader from './components/AuditHeader';
import Wireframe from './components/Wireframe';
import FindingCard from './components/FindingCard';
import ReferenceCard from './components/ReferenceCard';
import QuickWins from './components/QuickWins';
import { FINDINGS, REFERENCES } from './constants';
import { Severity } from './types';

const App: React.FC = () => {
  // Group findings by severity for rendering order
  const criticalFindings = FINDINGS.filter(f => f.severity === 'critical');
  const highFindings = FINDINGS.filter(f => f.severity === 'high');
  const mediumFindings = FINDINGS.filter(f => f.severity === 'medium');
  const lowFindings = FINDINGS.filter(f => f.severity === 'low');

  const SeverityGroupLabel: React.FC<{ severity: Severity; label: string }> = ({ severity, label }) => {
    let colorClass = '';
    switch(severity) {
        case 'critical': colorClass = 'text-critical'; break;
        case 'high': colorClass = 'text-high'; break;
        case 'medium': colorClass = 'text-medium'; break;
        case 'low': colorClass = 'text-low'; break;
    }
    return (
        <div className={`text-xs font-bold uppercase tracking-[1.5px] py-2 mt-2 first:mt-0 ${colorClass}`}>
            {label}
        </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-text">
      <AuditHeader />

      <div className="max-w-[1400px] mx-auto p-6 md:p-10">
        
        {/* LEGEND */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-critical"></div> Critical
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-high"></div> High Impact
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-medium"></div> Medium Impact
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-low"></div> Lower Priority
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 mb-14">
          
          <Wireframe />

          <div className="flex flex-col gap-4">
            
            <SeverityGroupLabel severity="critical" label="Critical — Fix Immediately" />
            {criticalFindings.map(f => <FindingCard key={f.id} finding={f} />)}

            <SeverityGroupLabel severity="high" label="High Impact" />
            {highFindings.map(f => <FindingCard key={f.id} finding={f} />)}

            <SeverityGroupLabel severity="medium" label="Medium Impact" />
            {mediumFindings.map(f => <FindingCard key={f.id} finding={f} />)}

            <SeverityGroupLabel severity="low" label="Lower Priority" />
            {lowFindings.map(f => <FindingCard key={f.id} finding={f} />)}
            
          </div>
        </div>

        {/* REFERENCES */}
        <div className="my-14">
            <div className="text-[11px] font-semibold tracking-[2px] uppercase text-text-muted mb-3">
                Design References
            </div>
            <div className="text-2xl font-bold mb-6">
                What good looks like — real B2B examples to study
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {REFERENCES.map((ref, idx) => (
                    <ReferenceCard key={idx} reference={ref} />
                ))}
            </div>
        </div>

        {/* QUICK WINS */}
        <QuickWins />

      </div>
    </div>
  );
};

export default App;
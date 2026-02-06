import React from 'react';
import { WIREFRAME_SECTIONS } from '../constants';
import { WireframeSection, Severity } from '../types';

const getSeverityColor = (severity: Severity) => {
  switch (severity) {
    case 'critical': return 'bg-critical';
    case 'high': return 'bg-high';
    case 'medium': return 'bg-medium';
    case 'low': return 'bg-low';
    default: return 'bg-gray-400';
  }
};

const getSectionStyle = (type: WireframeSection['type']) => {
  switch (type) {
    case 'hero':
      return 'bg-gradient-to-br from-red-600 to-red-800 h-[72px] text-white';
    case 'products':
      return 'bg-slate-100 h-[56px] text-text-muted';
    case 'vision':
      return 'bg-slate-800 h-[48px] text-slate-400';
    case 'numbers':
      return 'bg-slate-100 h-[56px] text-text-muted';
    case 'factory':
      return 'bg-gradient-to-br from-red-600 to-red-700 h-[48px] text-white';
    case 'sustainability':
      return 'h-[40px] text-text-muted';
    case 'nav':
      return 'bg-slate-800 h-[28px] text-slate-400';
    case 'full':
      return 'bg-red-50 h-[40px] border-none';
    default:
      return 'bg-slate-100 h-[48px] text-text-muted';
  }
};

const Wireframe: React.FC = () => {
  return (
    <div className="wireframe-col lg:sticky lg:top-6 self-start">
      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-text-muted mb-3">
        Homepage Map
      </div>
      <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
        {/* Browser Bar */}
        <div className="bg-slate-100 px-3.5 py-2.5 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
          <span className="font-mono text-[10px] text-text-muted ml-2">thealfaplas.com</span>
        </div>
        
        {/* Body */}
        <div className="p-0">
          {WIREFRAME_SECTIONS.map((section, idx) => (
            <div 
              key={idx} 
              className={`relative px-3.5 py-4 border-b border-border hover:bg-slate-50 transition-colors cursor-pointer ${section.type === 'full' ? 'border-b-0' : ''}`}
            >
              <div className="text-[11px] font-semibold text-text-secondary mb-1.5">
                {section.name}
              </div>
              <div className={`rounded-md flex items-center justify-center gap-1.5 relative ${getSectionStyle(section.type)}`}>
                {section.content && (
                  <span className={`text-[9px] font-semibold uppercase tracking-wider ${section.type === 'hero' || section.type === 'factory' ? 'text-white' : ''}`}>
                    {section.content}
                  </span>
                )}
                
                {/* Markers */}
                <div className={`absolute flex gap-1 flex-wrap justify-end max-w-[80px] ${section.type === 'full' ? 'static transform-none max-w-none' : 'right-2 top-1/2 -translate-y-1/2'}`}>
                  {section.markers.map(marker => (
                    <div 
                      key={marker.id}
                      className={`w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center shadow-sm flex-shrink-0 ${getSeverityColor(marker.severity)}`}
                    >
                      {marker.id}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
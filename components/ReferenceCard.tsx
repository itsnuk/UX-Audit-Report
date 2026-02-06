import React from 'react';
import { ReferenceItem } from '../types';

interface ReferenceCardProps {
  reference: ReferenceItem;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference }) => {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <div className={`h-[140px] flex items-center justify-center relative ${reference.bgGradient}`}>
        {/* Use cloneElement to pass down colors if needed, but here we just render the node */}
        {reference.icon}
        <div className="absolute bottom-3 left-3 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
           {reference.title}
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold mb-1.5">{reference.title}</div>
        <div className="text-xs text-text-secondary leading-relaxed mb-2.5">
          {reference.description}
        </div>
        <div className="flex gap-2">
            {reference.fixes.map(fixId => (
                 <span key={fixId} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Fixes #{fixId}
                 </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;
import React from 'react';
import { QUICK_WINS } from '../constants';

const QuickWins: React.FC = () => {
  return (
    <div className="bg-text text-white rounded-2xl p-10 mb-14">
      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-critical mb-3">
        Week 1
      </div>
      <h3 className="text-2xl font-bold mb-6 text-white">Three quick wins to ship first</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {QUICK_WINS.map((win) => (
          <div key={win.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-critical mb-2">{win.id}</div>
            <div className="text-[15px] font-semibold mb-2">{win.title}</div>
            <div className="text-[13px] text-text-muted leading-relaxed">
              {win.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickWins;
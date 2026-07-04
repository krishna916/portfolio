import { useState, useEffect } from 'react';

export default function TerminalDecor() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-8 bg-surface-container-lowest border-t border-outline-variant/20 items-center px-gutter justify-between z-40 hidden md:flex">
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <span className="font-label-code text-[10px] text-on-surface-variant tracking-wider uppercase">System: Operational</span>
        </div>
        <span className="font-label-code text-[10px] text-on-surface-variant/50 tracking-wider uppercase">Node: Prod-Ahm-01</span>
      </div>
      <div className="font-label-code text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
        <span id="clock">{timeString}</span> UTC+5:30
      </div>
    </div>
  );
}

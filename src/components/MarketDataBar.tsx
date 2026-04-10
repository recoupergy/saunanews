'use client';

const dataPoints = [
  { label: 'Sauna Equipment Market', value: '$905M', change: '+6.3% CAGR', up: true },
  { label: 'Harvia Q1 Revenue', value: '€52M', change: '+22.7%', up: true },
  { label: 'Cold Plunge Market', value: '$380M', change: '+18%', up: true },
  { label: 'Wellness Real Estate', value: '$584B', change: '+33% YoY', up: true },
  { label: 'Plunge (brand)', value: '$100M rev', change: '2024', up: true },
  { label: 'Longevity VC', value: '$8.5B', change: '2024', up: true },
];

export default function MarketDataBar() {
  return (
    <div className="bg-slate border-b border-cream/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-10 gap-8 overflow-x-auto scrollbar-hide">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cream/30 shrink-0">
            Market Pulse
          </span>
          {dataPoints.map((dp) => (
            <div key={dp.label} className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] text-cream/40 font-medium">{dp.label}</span>
              <span className="text-[11px] text-cream/70 font-semibold">{dp.value}</span>
              <span className={`text-[11px] font-semibold flex items-center gap-0.5 ${dp.up ? 'text-emerald-400' : 'text-red-400'}`}>
                {dp.up ? (
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                ) : (
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                  </svg>
                )}
                {dp.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

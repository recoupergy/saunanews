'use client';

import { useEffect, useRef } from 'react';

interface HarviaStockChartProps {
  height?: number;
}

export default function HarviaStockChart({ height = 400 }: HarviaStockChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    if (!containerRef.current) return;
    mountedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbols: [['Harvia Plc (HARVIA)', 'OMXHEX:HARVIA|12M']],
      chartOnly: false,
      width: '100%',
      height,
      locale: 'en',
      colorTheme: 'light',
      autosize: false,
      showVolume: true,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: '10',
      noTimeScale: false,
      valuesTracking: '1',
      changeMode: 'price-and-percent',
      chartType: 'area',
      maLineColor: '#2962FF',
      maLineWidth: 1,
      maLength: 9,
      lineWidth: 2,
      lineType: 0,
      dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
    });

    containerRef.current.appendChild(script);
  }, [height]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright text-[10px] text-stone-dark/70 mt-2 text-center">
        <a
          href="https://www.tradingview.com/symbols/OMXHEX-HARVIA/"
          rel="noopener nofollow"
          target="_blank"
          className="hover:underline"
        >
          <span className="blue-text">HARVIA stock chart</span>
        </a>
        {' '}by TradingView
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useReportWebVitals } from 'next/web-vitals';

type VitalsMetricName = 'LCP' | 'INP' | 'CLS';

type VitalsBudget = {
  articleTemplate: {
    mobile: Partial<Record<VitalsMetricName, number>>;
  };
};

const VITALS_BUDGETS: VitalsBudget = {
  articleTemplate: {
    mobile: {
      LCP: 2500,
      INP: 200,
      CLS: 0.1,
    },
  },
};

export default function WebVitalsBudget() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const isMobileRef = useRef(false);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const syncViewport = () => {
      isMobileRef.current = mediaQuery.matches;
    };

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);

    return () => {
      mediaQuery.removeEventListener('change', syncViewport);
    };
  }, []);

  useReportWebVitals((metric) => {
    const onArticleTemplate = pathnameRef.current?.startsWith('/article/');
    if (!onArticleTemplate || !isMobileRef.current) return;

    const budget = VITALS_BUDGETS.articleTemplate.mobile[metric.name as VitalsMetricName];
    if (budget === undefined) return;

    if (metric.value > budget) {
      console.warn(
        `[CWV budget] ${metric.name} exceeded mobile article budget (${metric.value.toFixed(2)} > ${budget})`,
        {
          route: pathnameRef.current,
          id: metric.id,
          value: metric.value,
          rating: metric.rating,
          navigationType: metric.navigationType,
        }
      );
    }
  });

  return null;
}

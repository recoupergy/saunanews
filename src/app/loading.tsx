export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream dark:bg-dark-bg">
      <div className="flex flex-col items-center gap-5">
        {/* Pulsing brand mark */}
        <div className="animate-pulse">
          <div className="flex items-baseline gap-1">
            <span className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
              Sauna
            </span>
            <span className="font-editorial text-2xl font-bold text-green dark:text-brass">
              News
            </span>
          </div>
        </div>

        {/* Subtle skeleton lines */}
        <div className="flex w-64 flex-col items-center gap-2.5">
          <div className="h-2 w-full animate-pulse rounded-full bg-stone/40 dark:bg-dark-border" />
          <div className="h-2 w-4/5 animate-pulse rounded-full bg-stone/30 dark:bg-dark-border/70 [animation-delay:150ms]" />
          <div className="h-2 w-3/5 animate-pulse rounded-full bg-stone/20 dark:bg-dark-border/50 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

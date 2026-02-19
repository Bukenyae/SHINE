import { useEffect, useState, type ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type Props = {
  icon: ReactNode;
  value?: string;
  tooltip: string;
  className?: string;
  label: string;
};

export function MetricBadgeTooltip({ icon, value, tooltip, className = '', label }: Props) {
  const [isTouchLike, setIsTouchLike] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setIsTouchLike(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <Tooltip open={isTouchLike ? open : undefined} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <span
          tabIndex={0}
          role="button"
          aria-label={label}
          className={className}
          onClick={(e) => {
            if (!isTouchLike) return;
            e.preventDefault();
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen((prev) => !prev);
            }
          }}
        >
          {icon}
          {value ? <span>{value}</span> : null}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        className="max-w-[240px] text-xs"
        onPointerDownOutside={() => setOpen(false)}
        onEscapeKeyDown={() => setOpen(false)}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

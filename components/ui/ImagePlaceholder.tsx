import { Image as ImageIcon, type LucideIcon } from "lucide-react";
type Props = { label: string; description?: string; ratio?: string; Icon?: LucideIcon; className?: string };
/** Swap for <Image/> when real photographs arrive; keep the aspect-ratio wrapper. */
export default function ImagePlaceholder({ label, description, ratio = "aspect-[4/3]", Icon = ImageIcon, className = "" }: Props) {
  return (
    <div role="img" aria-label={label} className={`${ratio} ${className} relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden border border-line bg-light-gray p-6 text-center`}>
      <div className="pointer-events-none absolute inset-2 border border-dashed border-muted/40" />
      <Icon className="h-7 w-7 text-gold" aria-hidden />
      <p className="max-w-xs text-xs font-semibold uppercase tracking-[0.14em] text-heading">{label}</p>
      {description && <p className="max-w-xs text-xs text-muted">{description}</p>}
    </div>
  );
}

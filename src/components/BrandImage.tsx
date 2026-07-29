import { cn } from "@/lib/utils";

interface BrandImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** desktop-only hover zoom; disabled on touch/mobile widths */
  zoomOnHover?: boolean;
  /** tailwind scale utility used on desktop hover */
  hoverScale?: string;
  /** tailwind object-position utility, e.g. "object-top" */
  objectPosition?: string;
}

/**
 * Shared image wrapper: enforces overflow-hidden containers, object-cover,
 * explicit intrinsic dimensions and a desktop-only hover zoom.
 */
export function BrandImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  zoomOnHover = true,
  hoverScale = "lg:group-hover:scale-[1.04]",
  objectPosition = "object-center",
}: BrandImageProps) {
  return (
    <div className={cn("overflow-hidden bg-nude/40", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full object-cover transition-transform duration-[550ms] ease-out",
          objectPosition,
          zoomOnHover && hoverScale,
          imgClassName,
        )}
      />
    </div>
  );
}

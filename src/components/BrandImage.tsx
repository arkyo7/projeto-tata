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
  zoomOnHover?: boolean;
}

/**
 * Image wrapper with a nude fallback surface so the layout stays elegant
 * while the real photos are being added to /public/images.
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
}: BrandImageProps) {
  return (
    <div className={cn("overflow-hidden bg-nude/60", className)}>
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
          zoomOnHover && "group-hover:scale-[1.045]",
          imgClassName,
        )}
      />
    </div>
  );
}

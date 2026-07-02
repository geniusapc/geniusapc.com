import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  className = '',
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      className={`relative isolate aspect-square overflow-hidden rounded-xl bg-[#0b1224] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none"
      />
      <Image
        src="/img/geniusapc-logo2.png"
        alt="GeniusAPC logo"
        fill
        priority={priority}
        sizes="160px"
        quality={95}
        className="scale-[1.55] object-cover brightness-[1.35] contrast-125 saturate-[1.35] transition-transform duration-300 group-hover:scale-[1.6]"
      />
    </div>
  );
}

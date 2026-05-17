interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "light" ? "#FFFFFF" : "#1B2A4A";
  const secondary = variant === "light" ? "rgba(255,255,255,0.8)" : "#0A0A0A";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="28" height="28" stroke={primary} strokeWidth="2" />
        <rect x="5" y="5" width="20" height="20" stroke={primary} strokeWidth="1.5" />
        <rect x="9" y="9" width="12" height="12" stroke="#9B1C1C" strokeWidth="1.5" />
      </svg>
      <div className="flex items-baseline gap-1.5">
        <span style={{ color: primary }} className="font-extrabold text-xl tracking-tight leading-none">
          KOO
        </span>
        <span style={{ color: "#9B1C1C" }} className="font-extrabold text-sm leading-none">
          ■
        </span>
        <span style={{ color: secondary }} className="font-light text-base tracking-wide leading-none">
          Design Build
        </span>
      </div>
    </div>
  );
}

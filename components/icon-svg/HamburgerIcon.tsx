// icon-svg/HamburgerIcon.tsx

interface IconProps {
  className?: string;
  width?: number | string;  // Cambiamos size por width
  height?: number | string; // Añadimos height
}

export const HamburgerIcon = ({ 
  className, 
  width = 24, 
  height = 24 
}: IconProps) => {
  return (
    <svg
      width={width}   // Usamos la prop width
      height={height} // Usamos la prop height
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://w3.org" // Corregido el xmlns que estaba cortado
      className={className}
    >
      {/* Pan Superior */}
      <path d="M102 240C102 140 180 60 256 60C332 60 410 140 410 240H102Z" fill="#E67E22" stroke="#000" strokeWidth="20" />
      
      {/* Semillas */}
      <path d="M180 120L190 130M250 100L250 115M320 120L310 130" stroke="#000" strokeWidth="15" strokeLinecap="round" />

      {/* Lechuga */}
      <path d="M90 240C90 240 120 280 170 240C220 200 290 280 340 240C390 200 422 240 422 240" stroke="#2ECC71" strokeWidth="25" strokeLinecap="round" />

      {/* Carne */}
      <rect x="102" y="280" width="308" height="40" rx="20" fill="#8D4925" stroke="#000" strokeWidth="15" />

      {/* Queso */}
      <path d="M102 320H410L390 360H122L122 390C122 390 150 420 180 380C210 340 240 430 270 380" fill="#F1C40F" stroke="#000" strokeWidth="10" />

      {/* Pan Inferior */}
      <path d="M102 400C102 450 170 480 256 480C342 480 410 450 410 400H102Z" fill="#E67E22" stroke="#000" strokeWidth="20" />
      
      {/* Bandera */}
      <path d="M256 60V10M256 15L310 35L256 55" stroke="#000" fill="#A2D149" strokeWidth="12" strokeLinejoin="round" />
    </svg>
  );
};

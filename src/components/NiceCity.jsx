// Cartoony postcard of Nice, filling the right edge of the stage: turquoise bay,
// the Colline du Château, ochre Vieux Ville facades, a Belle Epoque dome, palms.
export default function NiceCity() {
  return (
    <svg
      className="nice-city"
      viewBox="0 0 300 320"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="De stad Nice aan zee"
    >
      <defs>
        <linearGradient id="nc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfe3ff" />
          <stop offset="1" stopColor="#ffe6c0" />
        </linearGradient>
        <linearGradient id="nc-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#45c2cf" />
          <stop offset="1" stopColor="#1c7f9c" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="300" height="320" fill="url(#nc-sky)" />

      {/* sun */}
      <circle cx="232" cy="58" r="26" fill="#fff2cf" />
      <circle cx="232" cy="58" r="17" fill="#ffdd83" />

      {/* Colline du Château */}
      <path d="M120 180 Q200 88 300 128 L300 214 L120 214 Z" fill="#8fbf6b" stroke="#5f8f45" strokeWidth="3" />
      <path d="M150 168 q40 -40 90 -30 q-40 4 -90 30 Z" fill="#a6d585" />

      {/* row of old-town facades */}
      <g stroke="#00000022" strokeWidth="2">
        <rect x="6" y="118" width="34" height="96" rx="3" fill="#e8a15c" />
        <rect x="40" y="98" width="30" height="116" rx="3" fill="#d9814c" />
        <rect x="70" y="128" width="30" height="86" rx="3" fill="#f0c079" />
        <rect x="100" y="104" width="34" height="110" rx="3" fill="#cf6a49" />
        <rect x="134" y="136" width="28" height="78" rx="3" fill="#e8a15c" />
        <rect x="162" y="118" width="30" height="96" rx="3" fill="#d9814c" />
        <rect x="192" y="150" width="26" height="64" rx="3" fill="#f0c079" />
      </g>
      {/* shutters */}
      <g fill="#5f3722">
        <rect x="14" y="132" width="7" height="12" />
        <rect x="25" y="132" width="7" height="12" />
        <rect x="14" y="160" width="7" height="12" />
        <rect x="25" y="160" width="7" height="12" />
        <rect x="48" y="116" width="7" height="12" />
        <rect x="59" y="116" width="7" height="12" />
        <rect x="108" y="122" width="8" height="13" />
        <rect x="120" y="122" width="8" height="13" />
        <rect x="108" y="150" width="8" height="13" />
        <rect x="120" y="150" width="8" height="13" />
        <rect x="170" y="138" width="7" height="11" />
        <rect x="181" y="138" width="7" height="11" />
      </g>

      {/* Belle Epoque dome */}
      <rect x="116" y="84" width="26" height="24" fill="#f3ead6" stroke="#00000022" strokeWidth="2" />
      <path d="M116 86 Q129 58 142 86 Z" fill="#2f6f8f" />
      <circle cx="129" cy="56" r="3" fill="#2f6f8f" />

      {/* promenade */}
      <rect x="0" y="214" width="300" height="16" fill="#f4e4c1" />

      {/* palms */}
      <g stroke="#3f7d3a" strokeWidth="6" fill="none" strokeLinecap="round">
        <path d="M46 200 q-20 -6 -28 4 M46 200 q20 -6 28 4 M46 200 q-8 -18 -2 -26 M46 200 q10 -16 22 -16" />
        <path d="M236 196 q-20 -6 -28 4 M236 196 q20 -6 28 4 M236 196 q-8 -18 -2 -26 M236 196 q10 -16 22 -16" />
      </g>
      <rect x="43" y="200" width="6" height="24" fill="#7a5230" />
      <rect x="233" y="196" width="6" height="28" fill="#7a5230" />

      {/* sea */}
      <rect x="0" y="230" width="300" height="90" fill="url(#nc-sea)" />
      <g stroke="#ffffff77" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M12 252 q10 -6 20 0 t20 0 t20 0" />
        <path d="M150 272 q10 -6 20 0 t20 0 t20 0" />
        <path d="M60 296 q10 -6 20 0 t20 0 t20 0" />
      </g>
    </svg>
  )
}

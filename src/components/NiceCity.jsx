// A stylised little postcard of Nice: turquoise bay, the Colline du Château,
// ochre Vieux Ville facades, a Belle Epoque dome and a couple of palms.
export default function NiceCity() {
  return (
    <svg
      className="nice-city"
      viewBox="0 0 300 320"
      role="img"
      aria-label="The city of Nice by the sea"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9c7" />
          <stop offset="1" stopColor="#ffd39b" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3fb9c8" />
          <stop offset="1" stopColor="#1f7f9c" />
        </linearGradient>
      </defs>

      {/* sky + sun */}
      <rect x="0" y="0" width="300" height="320" fill="url(#sky)" />
      <circle cx="235" cy="60" r="30" fill="#fff2cf" />
      <circle cx="235" cy="60" r="20" fill="#ffe08a" />

      {/* Colline du Château */}
      <path d="M150 175 Q210 90 300 130 L300 210 L150 210 Z" fill="#8fb26a" />
      <path d="M150 175 Q210 90 300 130 L300 160 Q220 120 150 190 Z" fill="#a7c77e" />

      {/* row of old-town facades */}
      <g stroke="#00000014" strokeWidth="1">
        <rect x="8" y="120" width="34" height="90" fill="#e8a15c" />
        <rect x="42" y="100" width="30" height="110" fill="#d98550" />
        <rect x="72" y="132" width="30" height="78" fill="#f0c07a" />
        <rect x="102" y="108" width="34" height="102" fill="#cf6f4e" />
        <rect x="136" y="140" width="28" height="70" fill="#e8a15c" />
        <rect x="164" y="122" width="30" height="88" fill="#d98550" />
        <rect x="194" y="150" width="28" height="60" fill="#f0c07a" />
      </g>
      {/* shutters */}
      <g fill="#6b3f2a">
        <rect x="16" y="134" width="7" height="12" />
        <rect x="27" y="134" width="7" height="12" />
        <rect x="16" y="160" width="7" height="12" />
        <rect x="27" y="160" width="7" height="12" />
        <rect x="50" y="118" width="7" height="12" />
        <rect x="61" y="118" width="7" height="12" />
        <rect x="110" y="126" width="8" height="13" />
        <rect x="122" y="126" width="8" height="13" />
        <rect x="110" y="154" width="8" height="13" />
        <rect x="122" y="154" width="8" height="13" />
        <rect x="172" y="140" width="7" height="11" />
        <rect x="183" y="140" width="7" height="11" />
      </g>

      {/* Belle Epoque dome */}
      <rect x="118" y="86" width="26" height="24" fill="#f3ead6" />
      <path d="M118 88 Q131 60 144 88 Z" fill="#2f6f8f" />
      <circle cx="131" cy="58" r="3" fill="#2f6f8f" />

      {/* promenade */}
      <rect x="0" y="210" width="300" height="16" fill="#f4e4c1" />

      {/* palms */}
      <g>
        <rect x="46" y="196" width="5" height="24" fill="#7a5230" />
        <path d="M48 196 q-18 -6 -26 4 M48 196 q18 -6 26 4 M48 196 q-8 -16 -2 -24 M48 196 q10 -14 20 -14"
              stroke="#3f7d3a" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
      <g>
        <rect x="238" y="192" width="5" height="28" fill="#7a5230" />
        <path d="M240 192 q-18 -6 -26 4 M240 192 q18 -6 26 4 M240 192 q-8 -16 -2 -24 M240 192 q10 -14 20 -14"
              stroke="#3f7d3a" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* sea */}
      <rect x="0" y="226" width="300" height="94" fill="url(#sea)" />
      <g stroke="#ffffff66" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M12 250 q10 -6 20 0 t20 0 t20 0" />
        <path d="M150 270 q10 -6 20 0 t20 0 t20 0" />
        <path d="M60 292 q10 -6 20 0 t20 0 t20 0" />
      </g>
    </svg>
  )
}

import Avatar from './Avatar'

// Aero "turbine" wheel cover — one of the Model 3's clearest side-view tells.
function AeroWheel({ cx, cy }) {
  const spokes = [0, 1, 2, 3, 4].map((i) => (
    <path
      key={i}
      d={`M${cx} ${cy} L${cx - 3.2} ${cy - 11} A11 11 0 0 1 ${cx + 3.2} ${cy - 11} Z`}
      fill="#9aa1aa"
      transform={`rotate(${i * 72} ${cx} ${cy})`}
    />
  ))
  return (
    <g>
      <circle cx={cx} cy={cy} r="17" fill="#1c1c1e" />
      <circle cx={cx} cy={cy} r="12" fill="#c7ccd3" />
      {spokes}
      <circle cx={cx} cy={cy} r="3.2" fill="#6b7280" />
    </g>
  )
}

// Side view of a Tesla Model 3 (Pearl White) carrying three friends.
export default function Car({ friends = [] }) {
  const seatX = [94, 118, 142]

  return (
    <svg
      className="vehicle car"
      viewBox="0 0 240 120"
      role="img"
      aria-label={`Tesla Model 3 met ${friends.map((f) => f?.alt).filter(Boolean).join(', ')}`}
    >
      {/* speed lines */}
      <g stroke="#ffffffb0" strokeWidth="4" strokeLinecap="round">
        <line x1="2" y1="58" x2="26" y2="58" />
        <line x1="0" y1="74" x2="20" y2="74" />
        <line x1="6" y1="90" x2="30" y2="90" />
      </g>

      {/* ground shadow */}
      <ellipse cx="122" cy="103" rx="104" ry="8" fill="#0b1c3322" />

      {/* lower body — blunt grille-less nose, short overhangs, one flowing line */}
      <path
        d="M14 82
           C12 71 17 63 30 60
           C34 52 40 47 52 45
           L66 44
           C80 34 100 29 124 29
           C150 29 168 38 184 55
           C193 55 202 57 210 61
           C220 65 224 73 221 83
           C220 89 215 91 209 91
           L26 91
           C18 91 14 88 14 82 Z"
        fill="#f4f5f7"
        stroke="#00000018"
        strokeWidth="2"
      />

      {/* one continuous glass canopy — low, long, peak just behind centre */}
      <path
        d="M70 55
           C82 36 102 29 124 29
           C150 29 168 39 182 55
           L172 56
           C150 44 100 45 80 57 Z"
        fill="#12161b"
      />
      {/* side glass with the rear-quarter kick-up */}
      <path d="M80 57 C102 46 150 45 172 56 L170 66 C150 60 150 58 132 58 L86 66 Z" fill="#28323d" />
      {/* blacked-out window trim */}
      <path d="M70 55 C82 36 102 29 124 29 C150 29 168 39 182 55"
            fill="none" stroke="#0d0f12" strokeWidth="3" strokeLinecap="round" />
      {/* B-pillar */}
      <rect x="118" y="33" width="3.5" height="33" fill="#0d0f12" opacity="0.9" />

      {/* beltline + flush door handle */}
      <line x1="34" y1="66" x2="200" y2="64" stroke="#00000022" strokeWidth="2" />
      <rect x="128" y="61" width="14" height="3" rx="1.5" fill="#c2c7cd" />

      {/* swept headlight, slim wrap tail light, Tesla "T" on the nose */}
      <path d="M15 70 q11 -7 22 -3 l-2 9 q-11 -3 -20 3 Z" fill="#eef1f4" />
      <path d="M203 60 q13 -1 17 6 q-4 6 -17 6 Z" fill="#d5372f" />
      <path d="M20 60 v-4 m-2 0 h4" stroke="#9aa1aa" strokeWidth="1.4" strokeLinecap="round" />

      {/* faint front intake (no grille) */}
      <rect x="16" y="83" width="24" height="3.5" rx="2" fill="#00000022" />

      {/* wheels + arch trims */}
      <AeroWheel cx={64} cy={92} />
      <AeroWheel cx={178} cy={92} />
      <path d="M44 92 a20 20 0 0 1 40 0" fill="none" stroke="#00000022" strokeWidth="3" />
      <path d="M158 92 a20 20 0 0 1 40 0" fill="none" stroke="#00000022" strokeWidth="3" />

      {/* friends in the greenhouse */}
      {friends.slice(0, 3).map((f, i) =>
        f ? <Avatar key={i} cx={seatX[i]} cy={51} r={9} photo={f.photo} alt={f.alt} /> : null,
      )}

      {friends.some(Boolean) && (
        <text x="120" y="117" textAnchor="middle" className="vehicle-names">
          {friends.map((f) => f?.alt).filter(Boolean).join(' · ')}
        </text>
      )}
    </svg>
  )
}

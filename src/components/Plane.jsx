import Avatar from './Avatar'

// Small airliner with two friends at the windows and a fading contrail.
export default function Plane({ friends = [] }) {
  return (
    <svg
      className="vehicle plane"
      viewBox="0 0 220 110"
      role="img"
      aria-label={`Vliegtuig met ${friends.map((f) => f?.alt).filter(Boolean).join(', ')}`}
    >
      {/* contrail */}
      <path
        d="M0 58 Q30 54 60 58 T120 58"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* fuselage */}
      <path
        d="M70 44 Q120 32 188 46 Q200 49 200 55 Q200 61 188 64 Q120 78 70 66 Q60 55 70 44 Z"
        fill="#f2f4f7"
        stroke="#00000022"
        strokeWidth="2"
      />
      {/* nose + cockpit */}
      <path d="M188 46 Q202 48 204 55 Q202 62 188 64 Z" fill="#d9dee6" />
      <path d="M182 48 q10 2 12 7 q-2 5 -12 7 Z" fill="#bfe9f2" />

      {/* tail fin + wing + stabiliser */}
      <path d="M70 44 Q58 20 46 20 Q52 40 62 52 Z" fill="#4c9be8" />
      <path d="M120 60 Q132 92 150 96 Q140 66 138 60 Z" fill="#c3ccd8" />
      <path d="M78 60 Q84 76 96 80 Q90 64 90 60 Z" fill="#c3ccd8" />

      {/* two friends at the windows */}
      <Avatar cx={116} cy={54} r={8} photo={friends[0]?.photo} alt={friends[0]?.alt} />
      <Avatar cx={144} cy={55} r={8} photo={friends[1]?.photo} alt={friends[1]?.alt} />

      {friends.some(Boolean) && (
        <text x="120" y="100" textAnchor="middle" className="vehicle-names">
          {friends.map((f) => f?.alt).filter(Boolean).join(' · ')}
        </text>
      )}
    </svg>
  )
}

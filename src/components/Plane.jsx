import { PLANE_IMAGE } from '../config'
import Avatar from './Avatar'
import SvgFace from './SvgFace'

// Cartoony airliner facing RIGHT (toward Nice), contrail trailing left.
// The two flyers look out of the big windows — friends[0] (Zanen) up front.
// Set PLANE_IMAGE in config to swap the drawing for a picture.

const SEATS = [
  { cx: 152, cy: 55 }, // front window
  { cx: 124, cy: 55 }, // rear window
]

export default function Plane({ friends = [] }) {
  const flyers = friends.filter(Boolean)
  const label = `Vliegtuig met ${flyers.map((f) => f.alt).join(', ')}`

  if (PLANE_IMAGE) {
    return (
      <div className="plane">
        <div className="crew plane-crew">
          {flyers.map((f, i) => (
            <Avatar key={i} photo={f.photo} alt={f.alt} focus={f.focus} />
          ))}
        </div>
        <img className="plane-photo" src={PLANE_IMAGE} alt={label} />
      </div>
    )
  }

  return (
    <div className="plane">
      <svg className="plane-svg" viewBox="0 0 240 120" role="img" aria-label={label}>
        <defs>
          <linearGradient id="pl-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.6" stopColor="#eef2f6" />
            <stop offset="1" stopColor="#cfd8e2" />
          </linearGradient>
          <linearGradient id="pl-fin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5aa7f0" />
            <stop offset="1" stopColor="#2f6fb8" />
          </linearGradient>
        </defs>

        {/* contrail trailing left */}
        <g stroke="#ffffff" strokeLinecap="round" fill="none">
          <path d="M2 62 Q26 58 50 62 T96 62" strokeOpacity="0.75" strokeWidth="9" />
          <path d="M10 74 Q30 71 48 74" strokeOpacity="0.5" strokeWidth="6" />
        </g>

        {/* tail fin */}
        <path
          d="M58 56 Q48 22 66 16 Q80 34 88 48 Z"
          fill="url(#pl-fin)"
          stroke="#255a94"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* horizontal stabiliser */}
        <path d="M52 60 Q40 52 34 54 Q40 62 54 66 Z" fill="#b9c6d4" stroke="#8a99a9" strokeWidth="2" />

        {/* fuselage — nose right */}
        <path
          d="M52 56
             Q54 44 78 42
             L168 40
             Q206 41 220 52
             Q226 57 220 63
             Q204 74 168 74
             L78 72
             Q54 68 52 56 Z"
          fill="url(#pl-body)"
          stroke="#8a99a9"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* belly stripe */}
        <path d="M60 66 Q120 74 216 62 Q204 72 168 73 L78 71 Q62 69 60 66 Z" fill="#3f8fd8" opacity="0.85" />

        {/* cockpit windscreen */}
        <path d="M206 46 q12 3 13 9 q-2 5 -13 6 Z" fill="#28455e" />
        <path d="M207 48 q7 2 8 6 q-1 3 -8 4 Z" fill="#9fd3ef" />

        {/* small porthole row (behind the big windows) */}
        {[70, 88, 106].map((x) => (
          <circle key={x} cx={x} cy="53" r="4" fill="#9fc4e0" stroke="#5f8db4" strokeWidth="1.5" />
        ))}

        {/* the two flyers at their windows — friends[0] in front */}
        <SvgFace cx={SEATS[0].cx} cy={SEATS[0].cy} r={9.5} friend={flyers[0]} />
        <SvgFace cx={SEATS[1].cx} cy={SEATS[1].cy} r={9.5} friend={flyers[1]} />

        {/* wing sweeping toward the viewer */}
        <path
          d="M120 62 Q138 92 162 98 Q150 72 146 62 Z"
          fill="#d7dfe8"
          stroke="#8a99a9"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* engine pod */}
        <g>
          <ellipse cx="150" cy="94" rx="13" ry="8" fill="#c3ccd6" stroke="#8a99a9" strokeWidth="2" />
          <ellipse cx="139" cy="94" rx="3.4" ry="6" fill="#3a4654" />
        </g>
      </svg>
    </div>
  )
}

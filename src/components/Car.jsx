import { CAR_IMAGE } from '../config'
import Avatar from './Avatar'
import SvgFace from './SvgFace'

// Cartoony Tesla Model 3 facing RIGHT (toward Nice). The three riders sit in
// the glasshouse — friends[0] (Michael) up front, driving. Set CAR_IMAGE in
// config to swap the drawing for a picture.

// Window seats, front → rear, in viewBox coordinates.
const SEATS = [
  { cx: 150, cy: 51 }, // driver, at the wheel
  { cx: 117, cy: 51 }, // middle
  { cx: 85, cy: 51 }, // rear
]

export default function Car({ friends = [] }) {
  const riders = friends.filter(Boolean)
  const label = `Tesla Model 3 met ${riders.map((f) => f.alt).join(', ')} — ${
    riders[0]?.alt ?? '?'
  } rijdt`

  if (CAR_IMAGE) {
    return (
      <div className="car">
        <div className="crew car-crew">
          {riders.map((f, i) => (
            <Avatar key={i} photo={f.photo} alt={f.alt} focus={f.focus} />
          ))}
        </div>
        <img className="car-photo" src={CAR_IMAGE} alt={label} />
      </div>
    )
  }

  return (
    <div className="car">
      <svg className="car-svg" viewBox="0 0 260 132" role="img" aria-label={label}>
        <defs>
          <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff6d66" />
            <stop offset="0.45" stopColor="#e5343c" />
            <stop offset="1" stopColor="#b21e28" />
          </linearGradient>
          <linearGradient id="car-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d4c5e" />
            <stop offset="1" stopColor="#131920" />
          </linearGradient>
          <radialGradient id="car-rim" cx="0.5" cy="0.4" r="0.75">
            <stop offset="0" stopColor="#f2f5f8" />
            <stop offset="0.7" stopColor="#b7bfc9" />
            <stop offset="1" stopColor="#7d8794" />
          </radialGradient>
          <filter id="car-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* speed lines trailing behind (left) */}
        <g stroke="#ffffffb3" strokeWidth="5" strokeLinecap="round">
          <line x1="2" y1="58" x2="26" y2="58" />
          <line x1="6" y1="76" x2="24" y2="76" />
          <line x1="0" y1="94" x2="28" y2="94" />
        </g>

        {/* ground shadow */}
        <ellipse cx="134" cy="112" rx="100" ry="7" fill="#0b1c333a" filter="url(#car-shadow)" />

        {/* body — long hood right, fastback tail left */}
        <path
          d="M20 96
             C16 84 20 74 34 70
             L52 66
             C60 46 82 36 112 34
             C136 32 158 36 172 50
             L186 58
             C206 61 228 66 240 74
             C250 80 252 90 248 97
             C246 102 240 104 234 104
             L34 104
             C26 104 22 102 20 96 Z"
          fill="url(#car-body)"
          stroke="#8f1a20"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* hood highlight */}
        <path
          d="M182 58 C204 61 224 66 236 73 C226 70 204 66 184 64 Z"
          fill="#ffffff2e"
        />

        {/* glasshouse */}
        <path
          d="M62 64
             C70 48 88 40 112 38
             C134 36 152 41 166 54
             L160 62
             C138 50 92 52 72 64 Z"
          fill="url(#car-glass)"
          stroke="#8f1a20"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* window reflection streak */}
        <path d="M76 55 C90 45 116 41 134 43 L128 47 C110 46 90 50 80 58 Z" fill="#ffffff2b" />

        {/* faces at the windows — friends[0] drives */}
        <SvgFace cx={SEATS[0].cx} cy={SEATS[0].cy} r={11.5} friend={riders[0]} />
        <SvgFace cx={SEATS[1].cx} cy={SEATS[1].cy} r={11.5} friend={riders[1]} />
        <SvgFace cx={SEATS[2].cx} cy={SEATS[2].cy} r={11.5} friend={riders[2]} />

        {/* steering wheel in front of the driver */}
        <path
          d="M166 58 a10 10 0 0 1 0 14"
          fill="none"
          stroke="#20262e"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* B-pillar + beltline + flush handle */}
        <line x1="132" y1="40" x2="136" y2="64" stroke="#10151b" strokeWidth="3" />
        <line x1="40" y1="72" x2="230" y2="70" stroke="#8f1a2066" strokeWidth="2" />
        <rect x="138" y="66" width="15" height="3.4" rx="1.7" fill="#f4bfc1" />
        <rect x="96" y="66" width="15" height="3.4" rx="1.7" fill="#f4bfc1" />

        {/* side mirror */}
        <path d="M164 52 q9 -6 12 -1 q-1 6 -9 6 Z" fill="#b21e28" stroke="#8f1a20" strokeWidth="2" />

        {/* headlight (front) + tail light (rear) */}
        <path d="M236 74 q11 2 12 9 q-2 6 -13 5 Z" fill="#fff3c4" stroke="#c9a02c" strokeWidth="2" />
        <path d="M21 76 q-8 1 -9 7 q2 5 10 4 Z" fill="#ff7b74" stroke="#8f1a20" strokeWidth="2" />

        {/* front intake */}
        <rect x="216" y="96" width="26" height="4" rx="2" fill="#00000033" />

        {/* wheels — aero turbine style */}
        {[68, 198].map((wx) => (
          <g key={wx}>
            <circle cx={wx} cy="102" r="18.5" fill="#15161a" />
            <circle cx={wx} cy="102" r="10.5" fill="url(#car-rim)" />
            {[0, 72, 144, 216, 288].map((a) => (
              <path
                key={a}
                d={`M${wx} 102 L${wx - 2.8} ${102 - 9.5} A9.5 9.5 0 0 1 ${wx + 2.8} ${102 - 9.5} Z`}
                fill="#6d7681"
                transform={`rotate(${a} ${wx} 102)`}
              />
            ))}
            <circle cx={wx} cy="102" r="2.8" fill="#39404a" />
          </g>
        ))}
        {/* wheel arches */}
        <path d="M48 102 a20 20 0 0 1 40 0" fill="none" stroke="#8f1a20" strokeWidth="4" />
        <path d="M178 102 a20 20 0 0 1 40 0" fill="none" stroke="#8f1a20" strokeWidth="4" />
      </svg>
    </div>
  )
}

import { PLANE_IMAGE } from '../config'
import Avatar from './Avatar'

// Drawn airliner (or a photo, if PLANE_IMAGE is set in config) with the two
// flyers as photo bubbles above it.
export default function Plane({ friends = [] }) {
  const flyers = friends.filter(Boolean)
  const label = `Vliegtuig met ${flyers.map((f) => f.alt).join(', ')}`

  return (
    <div className="plane">
      <div className="crew plane-crew">
        {flyers.map((f, i) => (
          <Avatar key={i} photo={f.photo} alt={f.alt} focus={f.focus} />
        ))}
      </div>

      {PLANE_IMAGE ? (
        <img className="plane-photo" src={PLANE_IMAGE} alt={label} />
      ) : (
        <svg className="plane-svg" viewBox="0 0 220 110" role="img" aria-label={label}>
          <path
            d="M0 58 Q30 54 60 58 T120 58"
            stroke="#ffffff"
            strokeOpacity="0.7"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 44 Q120 32 188 46 Q200 49 200 55 Q200 61 188 64 Q120 78 70 66 Q60 55 70 44 Z"
            fill="#f2f4f7"
            stroke="#00000022"
            strokeWidth="2"
          />
          <path d="M188 46 Q202 48 204 55 Q202 62 188 64 Z" fill="#d9dee6" />
          <path d="M182 48 q10 2 12 7 q-2 5 -12 7 Z" fill="#bfe9f2" />
          <path d="M70 44 Q58 20 46 20 Q52 40 62 52 Z" fill="#4c9be8" />
          <path d="M120 60 Q132 92 150 96 Q140 66 138 60 Z" fill="#c3ccd8" />
          <path d="M78 60 Q84 76 96 80 Q90 64 90 60 Z" fill="#c3ccd8" />
        </svg>
      )}
    </div>
  )
}

import { CAR_IMAGE } from '../config'
import Avatar from './Avatar'

// Cartoony Tesla Model 3, facing RIGHT (toward the city), with the three
// riders as photo bubbles above the roof. Set CAR_IMAGE in config to swap the
// drawing for a picture.
export default function Car({ friends = [] }) {
  const riders = friends.filter(Boolean)
  const label = `Tesla Model 3 met ${riders.map((f) => f.alt).join(', ')}`

  return (
    <div className="car">
      <div className="crew car-crew">
        {riders.map((f, i) => (
          <Avatar key={i} photo={f.photo} alt={f.alt} focus={f.focus} />
        ))}
      </div>

      {CAR_IMAGE ? (
        <img className="car-photo" src={CAR_IMAGE} alt={label} />
      ) : (
        <svg className="car-svg" viewBox="0 0 240 130" role="img" aria-label={label}>
          {/* speed lines trailing behind (left) */}
          <g stroke="#ffffffb3" strokeWidth="5" strokeLinecap="round">
            <line x1="0" y1="60" x2="24" y2="60" />
            <line x1="2" y1="78" x2="22" y2="78" />
            <line x1="0" y1="96" x2="26" y2="96" />
          </g>

          <ellipse cx="122" cy="106" rx="102" ry="8" fill="#0b1c3322" />

          {/* body */}
          <path
            d="M20 92
               C18 79 25 70 40 68
               C46 51 63 41 98 39
               C122 33 152 33 174 42
               C192 49 204 57 216 68
               C224 73 226 82 223 92
               C222 96 217 98 212 98
               L30 98
               C24 98 20 96 20 92 Z"
            fill="#e5484d"
            stroke="#a5262b"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* glass canopy, one arc */}
          <path
            d="M62 66
               C72 47 94 40 122 39
               C148 38 168 45 182 62
               L172 64
               C150 52 96 52 74 66 Z"
            fill="#15181d"
            stroke="#a5262b"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect x="120" y="41" width="4" height="24" fill="#0d0f12" opacity="0.85" />

          {/* headlight (front, right) + tail light (rear, left) */}
          <path d="M214 70 q9 -1 12 5 q-3 6 -12 6 Z" fill="#fff4cf" stroke="#a5262b" strokeWidth="2" />
          <path d="M20 72 q-8 0 -10 5 q2 5 10 5 Z" fill="#7a1d20" />

          {/* wheels */}
          <g>
            <circle cx="66" cy="98" r="17" fill="#1c1c1e" />
            <circle cx="66" cy="98" r="7" fill="#c7ccd3" />
            <circle cx="186" cy="98" r="17" fill="#1c1c1e" />
            <circle cx="186" cy="98" r="7" fill="#c7ccd3" />
          </g>
          {/* arch trims */}
          <path d="M47 98 a19 19 0 0 1 38 0" fill="none" stroke="#a5262b" strokeWidth="4" />
          <path d="M167 98 a19 19 0 0 1 38 0" fill="none" stroke="#a5262b" strokeWidth="4" />
        </svg>
      )}
    </div>
  )
}

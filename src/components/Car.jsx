import { CAR_IMAGE } from '../config'
import Avatar from './Avatar'

// The Tesla as a photo card on the road, with the three riders as photo
// bubbles above the roof.
export default function Car({ friends = [] }) {
  const riders = friends.filter(Boolean)
  return (
    <div className="car">
      <div className="crew car-crew">
        {riders.map((f, i) => (
          <Avatar key={i} photo={f.photo} alt={f.alt} focus={f.focus} />
        ))}
      </div>
      <img
        className="car-photo"
        src={CAR_IMAGE}
        alt={`Tesla Model 3 met ${riders.map((f) => f.alt).join(', ')}`}
      />
    </div>
  )
}

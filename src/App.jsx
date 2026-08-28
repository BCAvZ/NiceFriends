import {
  START_DATE,
  CAR_ARRIVAL_DATE,
  PLANE_ARRIVAL_DATE,
  FRIENDS,
  CAR_CREW,
  PLANE_CREW,
  CITY_IMAGE,
} from './config'
import { useJourney } from './useJourney'
import NiceCity from './components/NiceCity'
import Car from './components/Car'
import Plane from './components/Plane'
import { Flames, Nuke, CityCrew } from './components/CityEffects'

// Travel bands, as a % of the stage from the left edge. Start hugging the far
// left; end at (car) or into (plane) the city on the right.
const CAR_START = -2
const CAR_END = 40 // pulls up at the city edge, nose tucking in
const PLANE_START = -8
const PLANE_END = 68 // dives into the city…
const PLANE_TOP_START = 7 // …descending diagonally from up high
const PLANE_TOP_END = 34
const PLANE_TILT = 14 // constant nose-down angle, matching the descent

const lerp = (from, to, t) => from + (to - from) * t

function formatDate(value) {
  const [y, m, d] = String(value).split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
  })
}

export default function App() {
  const car = useJourney(START_DATE, CAR_ARRIVAL_DATE)
  const plane = useJourney(START_DATE, PLANE_ARRIVAL_DATE)

  const carFriends = CAR_CREW.map((id) => FRIENDS[id])
  const planeFriends = PLANE_CREW.map((id) => FRIENDS[id])

  const carLeft = lerp(CAR_START, CAR_END, car.progress)
  const planeLeft = lerp(PLANE_START, PLANE_END, plane.progress)
  const planeTop = lerp(PLANE_TOP_START, PLANE_TOP_END, plane.progress)
  const planeTilt = PLANE_TILT

  const allArrived = car.hasArrived && plane.hasArrived
  // The overall wait runs until the last group lands.
  const overall = plane
  const dayNumber = Math.min(Math.max(overall.elapsedDays, 0), overall.totalDays)

  return (
    <div className="page">
      <header className="hud">
        <h1>Op weg naar Nice</h1>

        {allArrived ? (
          <p className="hud-big">Iedereen is in Nice! 🎉🔥💥</p>
        ) : (
          <p className="hud-big">
            🚗{' '}
            {car.hasArrived ? (
              <strong>in Nice!</strong>
            ) : (
              <>
                <span className="count">{car.daysLeft}</span>
                {car.daysLeft === 1 ? 'dag' : 'dagen'}
              </>
            )}
            <span className="hud-sep"> · </span>✈️{' '}
            {plane.hasArrived ? (
              <strong>in Nice!</strong>
            ) : (
              <>
                <span className="count">{plane.daysLeft}</span>
                {plane.daysLeft === 1 ? 'dag' : 'dagen'}
              </>
            )}
          </p>
        )}

        <div className="progress">
          <div className="progress-fill" style={{ width: `${overall.progress * 100}%` }} />
        </div>
        <p className="hud-sub">
          Dag {dayNumber} van {overall.totalDays} · 🚗 {formatDate(CAR_ARRIVAL_DATE)} · ✈️{' '}
          {formatDate(PLANE_ARRIVAL_DATE)}
        </p>
      </header>

      <div className={`stage${plane.hasArrived ? ' boom' : ''}`}>
        <div className="city">
          {CITY_IMAGE ? (
            <>
              <img className="city-photo" src={CITY_IMAGE} alt="De stad Nice aan zee" />
              <div className="city-fade" />
            </>
          ) : (
            <NiceCity />
          )}
          {car.hasArrived && <Flames />}
          {car.hasArrived && <CityCrew friends={carFriends} />}
          {plane.hasArrived && <Nuke />}
        </div>

        {/* the plane crashes into the city — the explosion takes its place */}
        {!plane.hasArrived && (
          <div
            className="track plane-track"
            style={{ left: `${planeLeft}%`, top: `${planeTop}%` }}
          >
            <Plane friends={planeFriends} tilt={planeTilt} />
          </div>
        )}

        <div className="road" />

        <div className="track car-track" style={{ left: `${carLeft}%` }}>
          <Car friends={car.hasArrived ? [] : carFriends} />
        </div>

        {plane.hasArrived && <div className="nuke-flash" />}
      </div>
    </div>
  )
}

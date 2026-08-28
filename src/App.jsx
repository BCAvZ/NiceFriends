import { START_DATE, VACATION_DATE, FRIENDS, CAR_CREW, PLANE_CREW } from './config'
import { useJourney } from './useJourney'
import NiceCity from './components/NiceCity'
import Car from './components/Car'
import Plane from './components/Plane'

// Where each vehicle sits along the stage, as a % from the left edge.
// The plane starts and ends further left so it always reads as "further back".
const CAR_START = 1
const CAR_END = 60 // stops just short of the city
const PLANE_START = -16
const PLANE_END = 46

const lerp = (from, to, t) => from + (to - from) * t

function formatDate(value) {
  const [y, m, d] = String(value).split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function App() {
  const { progress, daysLeft, totalDays, elapsedDays, hasStarted, hasArrived } =
    useJourney(START_DATE, VACATION_DATE)

  const carFriends = CAR_CREW.map((id) => FRIENDS[id])
  const planeFriends = PLANE_CREW.map((id) => FRIENDS[id])

  const carLeft = lerp(CAR_START, CAR_END, progress)
  const planeLeft = lerp(PLANE_START, PLANE_END, progress)
  const dayNumber = Math.min(Math.max(elapsedDays, 0), totalDays)

  return (
    <div className="page">
      <header className="hud">
        <h1>Op weg naar Nice</h1>

        {hasArrived ? (
          <p className="hud-big">Iedereen is in Nice! 🎉🏖️</p>
        ) : hasStarted ? (
          <p className="hud-big">
            <span className="count">{daysLeft}</span>
            {daysLeft === 1 ? ' dag' : ' dagen'} te gaan
          </p>
        ) : (
          <p className="hud-big">De reis begint op {formatDate(START_DATE)}</p>
        )}

        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
        <p className="hud-sub">
          Dag {dayNumber} van {totalDays} · aankomst {formatDate(VACATION_DATE)}
        </p>
      </header>

      <div className={`stage${hasArrived ? ' arrived' : ''}`}>
        <div className="city">
          <NiceCity />
        </div>

        <div className="track plane-track" style={{ left: `${planeLeft}%` }}>
          <Plane friends={planeFriends} />
        </div>

        <div className="road" />

        <div className="track car-track" style={{ left: `${carLeft}%` }}>
          <Car friends={carFriends} />
        </div>

        {hasArrived && <div className="party">🎉</div>}
      </div>

      <footer className="foot">
        Pas <code>src/config.js</code> aan voor je eigen datums en foto's.
      </footer>
    </div>
  )
}

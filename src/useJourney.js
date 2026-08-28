import { useEffect, useState } from 'react'

const MS_PER_DAY = 24 * 60 * 60 * 1000

// Parse "YYYY-MM-DD" as a local-midnight date (no timezone surprises).
function parseLocalDate(str) {
  const [y, m, d] = String(str).split('-').map(Number)
  return new Date(y, (m || 1) - 1, d || 1)
}

function startOfToday() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function wholeDaysBetween(a, b) {
  return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY)
}

/**
 * Turns the start / vacation dates into a single 0..1 progress value that
 * steps forward once per calendar day.
 */
export function useJourney(startDate, vacationDate) {
  const [today, setToday] = useState(startOfToday)

  // Roll the value over when the calendar day changes while the tab is open.
  useEffect(() => {
    const tick = () => setToday(startOfToday())
    const id = setInterval(tick, 60 * 1000)
    const onVisible = () => document.visibilityState === 'visible' && tick()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const start = parseLocalDate(startDate)
  const arrival = parseLocalDate(vacationDate)

  const totalDays = Math.max(1, wholeDaysBetween(start, arrival))
  const elapsedDays = wholeDaysBetween(start, today)

  const clampedElapsed = Math.min(Math.max(elapsedDays, 0), totalDays)
  const progress = clampedElapsed / totalDays

  const daysLeft = Math.max(totalDays - elapsedDays, 0)

  return {
    progress, // 0 at the start, 1 on arrival day
    daysLeft, // whole calendar days still to wait
    totalDays,
    elapsedDays,
    hasStarted: elapsedDays >= 0,
    hasArrived: daysLeft === 0,
    arrival,
  }
}

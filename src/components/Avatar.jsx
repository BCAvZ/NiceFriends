import { useId } from 'react'

// A round friend photo, clipped to a circle, for use inside an SVG scene.
export default function Avatar({ cx, cy, r, photo, alt }) {
  const rawId = useId()
  const clipId = 'avatar-clip-' + rawId.replace(/:/g, '')

  return (
    <g>
      <clipPath id={clipId}>
        <circle cx={cx} cy={cy} r={r} />
      </clipPath>
      <circle cx={cx} cy={cy} r={r + 1.5} fill="#ffffff" />
      <image
        href={photo}
        x={cx - r}
        y={cy - r}
        width={r * 2}
        height={r * 2}
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      >
        <title>{alt}</title>
      </image>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0000002e" strokeWidth="1.5" />
    </g>
  )
}

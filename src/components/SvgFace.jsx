// A circular friend photo embedded inside an SVG drawing, positioned in
// viewBox coordinates. Uses foreignObject so the CSS `focus` (object-position)
// crop from config.js keeps working.
export default function SvgFace({ cx, cy, r, friend, ring = '#ffffff' }) {
  if (!friend) return null
  const d = r * 2
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 1.6} fill={ring} />
      <foreignObject x={cx - r} y={cy - r} width={d} height={d}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}
        >
          <img
            src={friend.photo}
            alt={friend.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: friend.focus || 'center 40%',
              display: 'block',
            }}
          />
        </div>
      </foreignObject>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#00000030" strokeWidth="1.2" />
    </g>
  )
}

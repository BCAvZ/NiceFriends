// Cartoon end-state mayhem, drawn as overlays that share NiceCity's viewBox so
// everything lines up with the rooftops regardless of screen size.

const CITY_VIEWBOX = '0 0 300 320'

function Flame({ x, y, s = 1, delayClass = '' }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${s})`}>
      <g className={`flame ${delayClass}`.trim()}>
        <path
          d="M0 -46 C7 -36 15 -28 15 -16 C15 -6 8 0 0 0 C-8 0 -15 -6 -15 -16 C-15 -28 -7 -36 0 -46 Z"
          fill="#ff7b2d"
          stroke="#c2410c"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M0 -34 C4 -28 8 -23 8 -16 C8 -10 4 -6 0 -6 C-4 -6 -8 -10 -8 -16 C-8 -23 -4 -28 0 -34 Z"
          fill="#ffd23e"
        />
      </g>
    </g>
  )
}

// The car has arrived: rooftop fires across the old town.
export function Flames() {
  return (
    <svg
      className="city-overlay"
      viewBox={CITY_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Flame x={56} y={98} s={0.65} delayClass="f2" />
      <Flame x={85} y={128} s={0.55} delayClass="f1" />
      <Flame x={117} y={104} s={0.75} delayClass="f3" />
      <Flame x={129} y={82} s={0.45} delayClass="f4" />
      <Flame x={177} y={118} s={0.6} delayClass="f5" />
      <Flame x={205} y={150} s={0.55} delayClass="f1" />
    </svg>
  )
}

// The plane has arrived: one big cartoon mushroom cloud over the city.
export function Nuke() {
  return (
    <svg
      className="city-overlay"
      viewBox={CITY_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="mushroom">
        {/* dust ring at the base */}
        <ellipse cx="150" cy="212" rx="52" ry="11" fill="#d9c3a3" stroke="#6e5b49" strokeWidth="3" />
        <circle cx="104" cy="204" r="9" fill="#cdb99b" stroke="#6e5b49" strokeWidth="2.5" />
        <circle cx="196" cy="202" r="8" fill="#cdb99b" stroke="#6e5b49" strokeWidth="2.5" />

        {/* stem */}
        <path
          d="M136 212
             C130 188 133 168 142 150
             L136 146
             C149 138 163 138 174 146
             L168 150
             C176 168 179 188 172 212 Z"
          fill="#f9a24b"
          stroke="#6e5b49"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M146 208 C142 186 145 168 152 152 L158 152 C150 170 148 188 152 208 Z" fill="#ffd23e" />

        {/* cap */}
        <path
          d="M80 126
             C68 104 90 86 112 92
             C114 68 148 58 168 72
             C190 58 218 72 216 94
             C236 98 238 124 220 132
             C226 146 206 156 190 148
             C180 162 148 164 136 152
             C116 162 92 154 94 138
             C84 138 76 134 80 126 Z"
          fill="#cfc6ba"
          stroke="#6e5b49"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* hot underside */}
        <path
          d="M104 132 C104 116 128 106 150 106 C174 106 196 118 196 132 C196 144 174 150 150 150 C126 150 104 144 104 132 Z"
          fill="#ff9d3b"
        />
        <path
          d="M124 134 C124 124 136 118 150 118 C166 118 178 126 176 134 C174 142 162 146 150 146 C136 146 124 142 124 134 Z"
          fill="#ffd23e"
        />
      </g>
    </svg>
  )
}

// A round friend photo. `focus` is a CSS object-position that decides which
// part of the (usually off-centre) photo lands inside the circle.
export default function Avatar({ photo, alt, focus = 'center 40%', className = '' }) {
  return (
    <span className={`avatar ${className}`.trim()}>
      {photo ? (
        <img src={photo} alt={alt} style={{ objectPosition: focus }} loading="lazy" />
      ) : (
        <span className="avatar-fallback" aria-label={alt}>
          {(alt || '?').charAt(0)}
        </span>
      )}
    </span>
  )
}

import './SkeletonLoader.css'

function SkeletonLoader({ type = 'text', count = 1 }) {
  if (type === 'card') {
    return (
      <div className="sk-card">
        <div className="sk-icon" />
        <div className="sk-lines">
          <div className="sk-line sk-line--short" />
          <div className="sk-line sk-line--long" />
        </div>
      </div>
    )
  }

  if (type === 'anuncio') {
    return (
      <div className="sk-anuncio">
        <div className="sk-line sk-line--label" />
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="sk-row">
            <div className="sk-line sk-line--tag" />
            <div className="sk-line sk-line--long" />
          </div>
        ))}
      </div>
    )
  }

  if (type === 'verso') {
    return (
      <div className="sk-verso">
        <div className="sk-line sk-line--short" />
        <div className="sk-line sk-line--long" />
        <div className="sk-line sk-line--medium" />
      </div>
    )
  }

  if (type === 'himno') {
    return (
      <div className="sk-himno">
        <div className="sk-line sk-line--title" />
        <div className="sk-line sk-line--medium" />
        <div className="sk-himno-body">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="sk-section">
              <div className="sk-line sk-line--label" />
              <div className="sk-line sk-line--full" />
              <div className="sk-line sk-line--full" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'tesoro') {
    return (
      <div className="sk-tesoro">
        <div className="sk-line sk-line--label" />
        <div className="sk-line sk-line--long" />
        <div className="sk-line sk-line--medium" />
      </div>
    )
  }

  if (type === 'plan') {
    return (
      <div className="sk-plan">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="sk-plan-item">
            <div className="sk-icon sk-icon--small" />
            <div className="sk-line sk-line--long" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="sk-text">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`sk-line ${i === count - 1 ? 'sk-line--short' : 'sk-line--full'}`} />
      ))}
    </div>
  )
}

export default SkeletonLoader

export const PlanetDisplay = ({ img, title, content, source }) => {


  return (
    <section className="planet-display">
      <figure>
        <img
          src={ img.replace("./", "/") }
          alt={`${title} display`}
          className={title.toLowerCase()}
        />
      </figure>
      <h2>{ title.toUpperCase() }</h2>
      <p>{ content }</p>

      <div className="source-container">
        <span>Source :</span>
        <a href={ source } >Wikipedia</a>
        <img src="/assets/icon-source.svg" alt="Arrow Icon" />
      </div>
    </section>
  )
}

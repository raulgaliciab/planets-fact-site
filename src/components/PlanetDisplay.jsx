export const PlanetDisplay = ({ img, title, content, source }) => {


  return (
    <>
      <section className="planet-img">
        <figure>
          <img
            src={ img.replace("./", "/") }
            alt={`${title} display`}
            className={title.toLowerCase()}
          />
        </figure>

      </section>
      <section className="planet-info">
        <h2>{ title.toUpperCase() }</h2>
        <p>{ content }</p>

        <div className="source-container">
          <span>Source :</span>
          <a href={ source } >Wikipedia</a>
          <img src="/assets/icon-source.svg" alt="Arrow Icon" />
        </div>
      </section>
    </>
  )
}

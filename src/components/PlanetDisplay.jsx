export const PlanetDisplay = ({ img, title, content, source }) => {


  return (
    <>
      <img
        src={ img.replace("./", "/") }
        alt={`${title} display`}
      />
      <h2>{ title.toUpperCase() }</h2>
      <p>{ content }</p>
      <div>
        <span>Source:</span>
        <a href={ source } >Wikipedia</a>
      </div>
    </>
  )
}

export const Home = () => {
  return (
    <section className="home-page">
      <h2>Welcome to the Planets App</h2>
      <p>Click on any planet in the menu to look at its information</p>
      <figure>
        <img
          src="assets/planet-earth.svg"
          alt="Planet Earth"
          className="earth"
        />
      </figure>
    </section>
  )
}

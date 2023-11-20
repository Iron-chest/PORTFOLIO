export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Akintayo Tolani</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">DevOps</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          Seasoned DevOps Engineer with extensive experience orchestrating seamless collaboration,
          automating deployment pipelines, and optimizing infrastructure to accelerate software delivery and ensure system reliability.
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

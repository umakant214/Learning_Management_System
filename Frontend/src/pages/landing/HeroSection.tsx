import { FaRegCirclePlay } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className="hero-section mb-5">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-lg-6  py-5 text-center text-lg-start">
            <h1 className="hero-title ">
              Limitless learning at your
              <span className="highlight ms-2">
                <img src="/fingertips.png" alt="" height={90} />
              </span>
            </h1>

            <p className="hero-text">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn hero-btn px-4 py-2">Get Started</button>

              <button className="btn btn-dark d-flex align-items-center gap-2 px-4 py-2">
                <FaRegCirclePlay /> Watch video
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0 ">
            <img
              src="/person1.webp"
              alt="hero"
              className="img-fluid hero-img "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

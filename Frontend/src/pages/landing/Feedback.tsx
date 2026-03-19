import { FaStar } from "react-icons/fa";
const Feedback = () => {
  return (
    <div className="feedback-section py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-6 position-relative mb-5">
            <div className="feedback-card card-1">
              <img src="/user1.jpg" className="user-img" alt="" />
              <p>
                “Moonlight newspaper up its enjoyment agreeable depending. Timed
                voice share led him.”
              </p>
              <div className="stars">
                <FaStar className="fs-5 " />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
              </div>
              <h6>Carolyn Ortiz</h6>
            </div>
            <div className="feedback-card card-2">
              <img src="/user2.jpg" className="user-img" alt="" />
              <p>
                “At weddings believed laughing although the Moonlight
                newspaper.”
              </p>
              <div className="stars">
                {" "}
                <FaStar className="fs-5 " />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
                <FaStar className="fs-5 ms-1" />
              </div>
              <h6>Dennis Barrett</h6>
            </div>
            <div className="rating-box ">
              <h5>4.5/5.0</h5>
              <div>
                <FaStar className="fs-5 stars" />
                <FaStar className="fs-5 ms-1 stars" />
                <FaStar className="fs-5 ms-1 stars" />
                <FaStar className="fs-5 ms-1 stars" />
              </div>
              <small>Based on 3265 ratings</small>
            </div>
          </div>

          <div className="col-md-6 text-light">
            <h1 className="fw-bold mb-3 ">
              Some valuable feedback <br />
              from our students
            </h1>

            <p className="text-secondary mb-4">
              Supposing so be resolving breakfast am or perfectly. It drew a
              hill from me. Valley by oh twenty direct me so. Departure
              defective arranging rapturous did believe him all had supported.
              Supposing so be resolving breakfast am or perfectly. It drew a
              hill from me. Valley by oh twenty direct me so. Departure
              defective arranging rapturous did believe him all had supported.
            </p>

            <button className="btn btn-primary">View Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

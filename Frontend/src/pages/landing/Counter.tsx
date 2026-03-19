import {
  FaTv,
  FaUserTie,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";

const Counter = () => {
  return (
    <div className="container my-5 ">
      <div className="row ">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            <div className="col-sm-3">
              <div className="counter-card bg-yellow">
                <FaTv className="icon text-warning" />
                <div>
                  <h4>10K</h4>
                  <p>Online Courses</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="counter-card bg-darkblue">
                <FaUserTie className="icon text-primary" />
                <div>
                  <h4>200+</h4>
                  <p>Expert Tutors</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="counter-card bg-purple">
                <FaGraduationCap className="icon text-info" />
                <div>
                  <h4>60K+</h4>
                  <p>Online Students</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="counter-card bg-green">
                <FaCheckCircle className="icon text-success" />
                <div>
                  <h4>60K+</h4>
                  <p>Certified Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
const TrendingCourse = () => {
  const courses = [
    {
      title: "Full Stack Web Development Bootcamp",
      level: "All level",
      rating: "4.5",
      time: "12h 56m",
      lectures: " 15 lectures",
      img: "/tranding1.jpg",
      badgeColor: "purple",
    },
    {
      title: "React JS Complete Guide (Beginner to Advanced)",
      level: "Beginner",
      rating: "4.5",
      time: "9h 56m",
      lectures: " 65 lectures",
      img: "/tranding2.jpg",
      badgeColor: "green",
    },
    {
      title: "Node.js & Express API Development",
      level: "Beginner",
      rating: "4.5",
      time: "5h 56m",
      lectures: " 32 lectures",
      img: "/tranding3.jpg",
      badgeColor: "green",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-light mb-2 fw-bold fs-1">
        Our Trending Courses
      </h2>
      <p className="text-center text-secondary mb-5">
        Check out most 🔥 courses in the market
      </p>

      <div className="row">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            {courses.map((course, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                key={index}
              >
                <div className="custom-card">
                  <div className="card-img-wrapper">
                    <img src={course.img} alt="" />
                  </div>

                  <div className="p-3">
                    <span className={`badge badge-${course.badgeColor}`}>
                      {course.level}
                    </span>

                    <h5 className="mt-2 text-light">{course.title}</h5>

                    <div className="rating">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      <FaStar />
                      <span>{course.rating}/5.0 </span>
                    </div>

                    <div className="card-footer-custom mt-3">
                      <span>
                        <FaClock className="text-danger " /> {course.time}
                      </span>
                      <span>
                        <FaRegCalendarAlt className="text-warning " />
                        {course.lectures}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourse;

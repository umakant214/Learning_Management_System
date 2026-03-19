import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
const MostPopularCourse = () => {
  const courses = [
    {
      title: "Sketch from A to Z: for app designer",
      level: "All level",
      rating: "4.5",
      time: "12h 56m",
      lectures: " 15 lectures",
      img: "/course.jpg",
      badgeColor: "purple",
    },
    {
      title: "Graphic Design Masterclass Session",
      level: "Beginner",
      rating: "4.5",
      time: "9h 56m",
      lectures: " 65 lectures",
      img: "/course1.jpg",
      badgeColor: "green",
    },
    {
      title: "Create a Design System in Figma",
      level: "Beginner",
      rating: "4.5",
      time: "5h 56m",
      lectures: " 32 lectures",
      img: "/course3.jpg",
      badgeColor: "green",
    },
    {
      title: "Deep Learning with React-Native",
      level: "Beginner",
      rating: "4.0",
      time: "18h 56m",
      lectures: " 99 lectures",
      img: "/course4.jpg",
      badgeColor: "green",
    },
    {
      title: "Build Responsive Websites with HTML",
      level: "Beginner",
      rating: "4.0",
      time: "18h 56m",
      lectures: " 99 lectures",
      img: "/course5.jpg",
      badgeColor: "green",
    },
    {
      title: "Build Websites with HTML And CSS",
      level: "Beginner",
      rating: "4.0",
      time: "18h 56m",
      lectures: " 99 lectures",
      img: "/course6.jpg",
      badgeColor: "green",
    },
    {
      title: "Learn Invision and Linkedin Content",
      level: "Beginner",
      rating: "4.0",
      time: "18h 56m",
      lectures: " 99 lectures",
      img: "/course7.jpg",
      badgeColor: "green",
    },
    {
      title: "JavaScript: Full Understanding",
      level: "Beginner",
      rating: "4.0",
      time: "18h 56m",
      lectures: " 99 lectures",
      img: "/course8.jpg",
      badgeColor: "green",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-light mb-2 fw-bold fs-1">
        Most Popular Courses
      </h2>
      <p className="text-center text-secondary mb-5">
        Choose from hundreds of courses from specialist organizations
      </p>

      <div className="row">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            {courses.map((course, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
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

export default MostPopularCourse;

import { IoSearch } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  custom-navbar px-5 py-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo-light.svg" alt="logo" className="logo" />
        </a>

        {/* Category Button */}
        <button className="btn category-btn p-2 px-3 ">
          <TbCategory className="fs-5" /> Category
        </button>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* ✅ FIXED MENU */}
          <ul className="ms-auto me-auto navbar-nav d-flex flex-column flex-lg-row gap-2 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Demos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Accounts
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Megamenu
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* Search */}
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <span className="search-icon">
                <IoSearch />
              </span>
            </div>

            {/* Profile */}
            <img src="/profile.jpg" className="profile-img" alt="profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

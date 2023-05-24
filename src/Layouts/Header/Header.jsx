import { Link, NavLink } from "react-router-dom";

// Css file
import "./Header.css";

const Header = () => {
  return (
    <div className="shadow-sm">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="show-tabs">
            <NavLink to="/" className="m-2 text-decoration-none text-dark">
              Clients Page
            </NavLink>

            <NavLink
              to="/classes"
              className="m-2 text-decoration-none text-dark"
            >
              ClassesPage
            </NavLink>
          </div>

          <div className="profile">
            <img src="/profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

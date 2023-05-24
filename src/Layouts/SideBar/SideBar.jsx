// css file
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <NavLink to="/">Clients</NavLink>

      <NavLink to="/classes">Classes</NavLink>
    </div>
  );
};

export default SideBar;

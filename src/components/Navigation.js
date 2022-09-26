import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>Rasivy</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/home">
            <li>Accueil</li>
          </NavLink>
          <NavLink className="navlink" to="/contact">
            <li>Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}

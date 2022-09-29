import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-link">
        <p>© 2022 Rasivy</p>
        <NavLink className="footer-linkk" to="/conditions">
          <p>Conditions d'utilisation</p>
        </NavLink>

        <NavLink className="footer-linkk" to="/politique">
          <p>Politique de confidentialité</p>
        </NavLink>
        <NavLink className="footer-linkk" to="/mentions">
          <p>Mentions légales</p>
        </NavLink>
      </div>
    </footer>
  );
}

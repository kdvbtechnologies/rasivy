import { NavLink } from "react-router-dom";

export default function Suggest() {
  return (
    <>
      <div className="suggest">
        <hr />
        <div className="title">
          <p>Nos recommandations</p>
        </div>
        <hr />
        <div className="a">
          <div className="b">
            <li>
              Pour la création de gros site internet nous recommandons React JS
              et NodeJS associé
            </li>
            <li>
              Pour la création de site internet à évolution long terme nous
              recommandons React JS
            </li>
            <li>
              Pour la création de site internet de taille moyenne nous
              recommandons HTML/CSS, Javascript et PHP associé
            </li>
            <li>
              Pour la création de petit site internet nous recommandons HTML5{" "}
            </li>
            <p>
              Soumettez votre projet, nous vous aiderons à estimer le coût total
              et le language de programmation le mieux adapté pour une évolution
              long terme.
            </p>
            <NavLink className="navlink" to="/contact">
              <button>Soumettez votre projet gratuitement</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

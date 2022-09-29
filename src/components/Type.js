import { NavLink } from "react-router-dom";

export default function Type() {
  return (
    <>
      <div className="type">
        <div className="a">
          <hr />
          <p>Types de Projet</p>
          <hr />
        </div>

        <div className="b">
          <div className="c">
            <p>Création de :</p>
          </div>
          <li>Site d'entreprise</li>
          <li>site de e-commerce</li>
          <li>site de rencontre </li>
          <li>Site de Réseau Social </li>
          <li>Site de visionnage de Vidéo Streaming </li>
          <li>Site d'agence imobilière</li>
          <li>Site d'agence de transfert d'argent</li>
          <li>Site d'agence de tourisme</li>
          <li>Site d'agence de voyage</li>
          <li>Site de Banque</li>
          <li>Site de cryptomonnaie</li>
          <li>Application Web Progressive (PWA)</li>
          <li>Site d'hotel</li>
          <li>Site de Restaurant</li>
          <li>Site de Magasin</li>
          <li>Site d'Ecole</li>
          <li>Site d'Eglise</li>
          <li>Site de Service public</li>
          <li>Site de Blog</li>
          <li>Site de mise en relation</li>
          <li>Site de Cabinet d'avocat</li>
          <li>Site de Cabinet dentaire</li>
          <li>Site d'hopital</li>
          <li>Site d'actualités</li>
          <li>Site d'annonces</li>
          <li>Panneau d'administration pour la bonne gestion du site</li>
        </div>
        <div className="d">
          <p>
            N.B : Les gros projets nécessitent la construction d'une API
            Restful.
          </p>
          <p>
            Soumettez votre projet, nous vous aiderons à estimer le coût total.
          </p>
        </div>
        <NavLink to="/contact">
          <button>Soumettez votre projet</button>
        </NavLink>
      </div>
    </>
  );
}

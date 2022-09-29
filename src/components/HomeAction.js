import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Suggest from "./suggest";
import Type from "./Type";
/*import { Helmet } from "react-helmet";
<Helmet>
        <body className="body-navbar"></body>
      </Helmet>

      
<footer>
  <p>Author: Hege Refsnes<br>
  <a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
      */

export default function HomeAction() {
  return (
    <>
      <div className="introduce">
        <div className="introduce-title">
          <p>
            Création des Applications rapides(PWA) et des sites internet à 100€
          </p>
        </div>
        <div className="introduce-mytitle">
          <p>Economisez de l'argent ! Gagnez du temps !</p>
          <p>
            Rasivy se charge de la création de votre site internet et vous le
            livre le plus rapidement possible pour seulement 100€.
          </p>
          <p>Vous payerez après la livraison !</p>
        </div>
      </div>

      <div className="display-cards">
        <div className="cards">
          <div className="card">
            <div className="celebrity">
              <p>Populaire</p>
            </div>
            <h3>HTML / CSS</h3>
            <hr />
            <div className="card-desc">
              <div className="subtitle">
                <p>Création de petit site internet avec HTML5</p>
              </div>
              <div className="price">
                <p>À partir de</p>
                <h1>100€</h1>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>PHP</h3>
            <hr />
            <div className="card-desc">
              <div className="subtitle">
                <p>Création de gros site internet avec PHP</p>
              </div>
              <div className="price">
                <p>À partir de</p>
                <h1>45€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>JavaScript</h3>
            <hr />
            <div className="card-desc">
              <div className="subtitle">
                <p>Création de gros site internet avec JS</p>
              </div>
              <div className="price">
                <p>À partir de</p>
                <h1>50€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>React JS</h3>
            <hr />
            <div className="card-desc">
              <div className="subtitle">
                <p>Création de gros site internet avec REACT</p>
              </div>
              <div className="price">
                <p>À partir de</p>
                <h1>70€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Responsive Design</li>
                <li>Optimisation SEO</li>
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Création de logo</li>
                <li>Certificat SSL</li>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Node JS</h3>
            <hr />
            <div className="card-desc">
              <div className="subtitle">
                <p>Création d'une API rapide et performante</p>
              </div>
              <div className="price">
                <p>À partir de</p>
                <h1>60€</h1>
                <p>par fonctionnalité</p>

                <NavLink to="/contact">
                  <button>Souscrire</button>
                </NavLink>
              </div>
              <div className="mydesc">
                <li>Code Source</li>
                <li>Facturation par fonctionnalité</li>
                <li>Paimenent après la livraison</li>
                <p className="bonus">Bonus</p>
                <li>Hébergement</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Type />
      <Suggest />
      <Footer />
    </>
  );
}

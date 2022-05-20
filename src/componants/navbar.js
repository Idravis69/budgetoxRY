import engrenage from '../images/engrenage.png';
import logobuisness from '../images/logobuisness.png';

function Header() {
    return (
    <nav class="nav Navbar">
    <a class="nav-link"><img src={logobuisness} className="imageNav"/></a>
    <a class="nav-link" href="./acceuil"><h1>My Finance</h1></a>
    <a class="nav-link" href="./connexion">Connexion</a>
    <a class="nav-link"><img src={engrenage} className="imageNav2"></img></a>
  </nav>
    );
}


export default Header;  
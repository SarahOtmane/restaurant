import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header row w-100">
            <h3><Link to='/' className="link">Le Maxime</Link></h3>

            <ul className="row">
                <li><Link className="link">Accueil</Link></li>
                <li><Link className="link">Réservation</Link></li>
                <li><Link className="link">Menu</Link></li>
                <li><Link className="link">Boissons</Link></li>
            </ul>
        </header>
    )
}

export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header(color){
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 50;
            if (isTop !== scrolling) {
                setScrolling(isTop);
            }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    let className = color.color;
    console.log(className);

    return(
        <header className={`header row w-100 justify-content-space-be ${scrolling ? '' : className}`}>
            <h3><Link to='/' className="link titre">Le Végétal</Link></h3>

            <ul className="row">
                <li><Link to='/accueil' className="link">Notre concept</Link></li>
                <li><Link to='/reservation' className="link">Réservation</Link></li>
                <li><Link to='/menu' className="link">Menu</Link></li>
                <li><Link to='/boisson' className="link">Carte des vins</Link></li>
                <li><Link to='/autres-restaurants' className="link">Nos restaurants</Link></li>
            </ul>
        </header>
    )
}

export default Header;
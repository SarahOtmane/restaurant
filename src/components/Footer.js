import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";

import { useState } from "react";

function Footer({color}){
    const [isOpenMention, setIsOpenMentions] = useState(false);
    const [isOpenDonnee, setIsOpenDonnee] = useState(false);

    const openPopup = (event) =>{
        if(event.target.name === 'mentions'){
            setIsOpenMentions(true)
        }else{
            setIsOpenDonnee(true)
        }
    }

    const closePopup = (event) =>{
        if(event.target.name === 'mentions'){
            setIsOpenMentions(false)
        }else{
            setIsOpenDonnee(false)
        }
    }

    return(
        <footer className='w-100 row justify-content-space-be'>
            <ul className="gauche">
                <li><button name='mentions' onClick={openPopup}>Mentions légales</button></li>
                    {isOpenMention && (
                        <div>
                            <div className="overlay" onClick={closePopup}></div>
                            <section className={`popup ${color}`}>
                            <h2 className="w-max-c m-auto">Mentions légales</h2>
                            <p>Nom et forme juridique de l'entreprise: <span>CHATS ASSOCIES</span></p>
                            <hr></hr>
                            <p>Numéro de téléphone : <span>03 25 46 67 12</span></p>
                            <hr></hr>
                            <p>Adresse e-mail : <span>restaurant.felix@hotmail.com</span></p>
                            <hr></hr>
                            <p>Numéro fiscal local : <span>FRXX 921 717 989</span></p>
                            <hr></hr>
                            <p>Numéro d'enregistrement pour cette autorité : <span>921 717 989 RCS Troyes</span></p>
                            <hr></hr>
                            <p>Responsable : <span>THOMAS DIJON</span></p>
                            <hr></hr>
                            <p>Capital Social : <span>10000</span></p>

                            <button name="mentions" onClick={closePopup}>Fermer</button>
                            </section>
                        </div>
                    )}
                <li name='donnee' onClick={openPopup}>Protection de données</li>

                <li>Test</li>
            </ul>
            <article className="droite">
                <div><FaLocationDot className='icon' /> <span>Vegetal, 9 Ruelle des Chats, 10000 Troyes</span></div>
                <div><BsFillTelephoneForwardFill className='icon' /> <span>03 25 46 67 12</span></div>
                <div><IoMdMailUnread className='icon' /></div>
            </article>
        </footer>
    )
}

export default Footer;
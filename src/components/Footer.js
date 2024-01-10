import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";

function Footer(){
    return(
        <footer className="w-100 row justify-content-space-be">
            <ul className="gauche">
                <li>Mentions légales</li>
                <li>Protection de données</li>
                <li>Test</li>
            </ul>
            <article className="droite">
                <div><FaLocationDot className='icon' /> <span>Vegetal, 9 Rle des Chats, 10000 Troyes</span></div>
                <div><BsFillTelephoneForwardFill className='icon' /> <span>03 25 46 67 12</span></div>
                <div><IoMdMailUnread className='icon' /></div>
            </article>
        </footer>
    )
}

export default Footer;
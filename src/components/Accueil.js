import accueil from '../assets/accueil.png';
import accueil_horaires from '../assets/accueil_horaires.jpeg';
import accueil_aboutUs from '../assets/accueil_about.jpg';
import accueil_galerie_1 from '../assets/accueil_galerie_1.jpeg';
import accueil_galerie_2 from '../assets/accueil_galerie_2.jpeg';
import accueil_galerie_3 from '../assets/accueil_galerie_3.jpeg';
import accueil_galerie_4 from '../assets/accueil_galerie_4.jpeg';
import accueil_galerie_5 from '../assets/accueil_galerie_5.jpeg';
import accueil_galerie_6 from '../assets/accueil_galerie_6.jpeg';
import accueil_galerie_7 from '../assets/accueil_galerie_7.jpeg';

import { GiCash } from "react-icons/gi";
import { FaWifi, FaCcVisa, FaUmbrellaBeach } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { SiAmericanexpress } from "react-icons/si";
import { MdAirplaneTicket, MdOutlinePets } from "react-icons/md";
import { BsTicketDetailed } from "react-icons/bs";
import { FaLocationDot, FaChampagneGlasses } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
// import { TbAirConditioning } from "react-icons/tb";
// import { GrWifi } from "react-icons/gr";

import Header from './Header';
import Footer from './Footer';

function Accueil(){
    return(
        <>
            <Header color='back_noir' />

            <main className="accueil back_noir h-100">
                <section className='section1 w-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                    <article>
                        <span>Découvrez notre restaurant</span>
                        <h1>Le Végétal</h1>
                    </article>
                </section>

                <section className='description'>
                    <h2 className='w-max-c m-auto'> Restaurant | Le Végétal | Troyes</h2>
                    <div className='row w-100'>
                        <article className='gauche'>
                            <p>
                                Bienvenue dans notre restaurant &#171;Le Végétal&#187;. <br></br> <br></br> L'endroit idéal pour une expérience gastronomique inoubliable ! 
                                <br></br><br></br>
                                Le concept : un menu flexitarien.
                                <br></br><br></br>
                                Une formule midi/soir ou en 5 actes, à travers les fruits, les légumes, viande ou poisson.
                            </p>
                        </article>
                        <article className='droite'>
                            <p>
                                Nous vous invitons à vous laisser guider par les idées et les envies du chef au gré des produits de saison.
                                <br></br><br></br>
                                Une diversité de plats exquis que vous pourrez savourer dans une atmosphère chaleureuse et conviviale. 
                            </p>
                            <p>
                                Profitez de douces soirées sur notre terrasse élégante et accueillante.
                            </p>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='horaires'>
                    <div className='w-100 row'>
                        <article>
                            <h2>Nos horaires d’ouverture :</h2>
                            <div className='joursOuv justify-content-space-be'>
                                <p>Mardi au Samedi </p>
                                <br></br>
                                <p>12h00 à 13h30</p>
                                <br></br>
                                <p>et 19h00 à 21h00</p>
                            </div>

                            <div className='icon'><FaLocationDot className='icon' /> Vegetal, 9 Ruelle des Chats, 10000 Troyes</div>
                        </article>
                        <img src={accueil_horaires} alt='' />
                    </div>
                </section>

                <hr></hr>

                <section className='paiement'>
                    <div className='row w-100 justify-content-space-be'>
                        <article className='column droite'>
                            <GiCash className='icon'></GiCash>
                            <span>Espèces</span>
                        </article>
                        <article className='column'>
                            <FaWifi className='icon'></FaWifi>
                            <span>Paiement sans contact</span>
                        </article>
                        <article className='column'>
                            <SiAmericanexpress className='icon'></SiAmericanexpress>
                            <span>American express</span>
                        </article>
                        <article className='column'>
                            <BsTicketDetailed className='icon'></BsTicketDetailed>
                            <span>Ticket restaurant</span>
                        </article>
                        <article className='column'>
                            <FaCcVisa className='icon'></FaCcVisa>
                            <span>Carte visa</span>
                        </article>
                        <article className='column'>
                            <MdAirplaneTicket className='icon'></MdAirplaneTicket>
                            <span>Chèque vacances</span>
                        </article>
                        <article className='column gauche'>
                            <CiCreditCard2 className='icon'></CiCreditCard2>
                            <span>Carte de débit</span>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='aboutUs'>
                    <div className='w-100 row'>
                        <img src={accueil_aboutUs} alt='' />
                        <article>
                            <h2>À propos du Végétal :</h2>
                            <article className='span'>
                                <span>Depuis 2023,</span>
                                <br></br>
                                <span> mais une expérience de plus de 20 ans !</span>
                            </article>
                            <p>
                                Le Végétal occupe une place privilégiée au cœur de la ruelle des Chats. 
                                <br></br><br></br>
                                Un choix audacieux autour d'un menu qui saura surprendre vos papilles.
                                <br></br><br></br>
                                Formule du midi ou du soir ou formule en 5 actes.
                                <br></br> <br></br>
                                En quête de qualité, Le Végétal privilégie les producteurs locaux. 
                                <br></br><br></br>
                                Nos principaux fournisseurs sont rigoureusement sélectionnés principalement dans l'Aube.
                                <br></br> <br></br>
                                Toute l'équipe du Végétal vous souhaite un moment agréable et gourmand, empreint de notre engagement envers la qualité et l'authenticité.
                            </p>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='paiement service'>
                    <h2 className='w-max-c m-auto'>Nos services</h2>
                    <div className='row w-100 justify-content-space-be'>
                        {/* <article className='column droite'>
                            <TbAirConditioning className='icon'></TbAirConditioning>
                            <span>Climatisation</span>
                        </article> */}
                        <article className='column droite'>
                            <FaUmbrellaBeach className='icon'></FaUmbrellaBeach>
                            <span>Terrasse</span>
                        </article>
                        <article className='column'>
                            <FaChampagneGlasses className='icon'></FaChampagneGlasses>
                            <span>Évènement privé</span>
                        </article>
                        <article className='column'>
                            <IoBag className='icon'></IoBag>
                            <span>Soirée prestige</span>
                        </article>
                        {/* <article className='column'>
                            <GrWifi className='icon'></GrWifi>
                            <span>Wifi gratuit</span>
                        </article>  */}
                        <article className='column gauche'>
                            <MdOutlinePets className='icon'></MdOutlinePets>
                            <span>Animaux autorisés</span>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='galerie'>
                    <h2 className='w-max-c m-auto'>Galerie</h2>
                    <div className='row w-100 justify-content-space-be'>
                        <figure className='gauche'>
                            <img src={accueil_galerie_1} alt='' />
                            <img src={accueil_galerie_2} alt='' className='imgMargin' />
                        </figure>
                        <figure>
                            <img src={accueil_galerie_4} alt='' />
                            <img src={accueil_galerie_3} alt='' className='imgMargin2' />
                            <img src={accueil_galerie_5} alt='' className='imgMargin2' />
                        </figure>
                        <figure className='droite'>
                            <img src={accueil_galerie_6} alt='' />
                            <img src={accueil_galerie_7} alt='' className='imgMargin' />
                        </figure>
                    </div>
                </section>
            </main>
            <Footer color='back_noir'/>
        </>
    )
}

export default Accueil;
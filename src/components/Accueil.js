import accueil from '../assets/accueil.png';
import accueil_horaires from '../assets/accueil_horaires.jpeg';
import accueil_aboutUs from '../assets/accueil_aboutUs.jpeg';
import accueil_galerie_1 from '../assets/accueil_galerie_1.jpeg';
import accueil_galerie_2 from '../assets/accueil_galerie_2.jpeg';
import accueil_galerie_3 from '../assets/accueil_galerie_3.jpeg';
import accueil_galerie_4 from '../assets/accueil_galerie_4.jpeg';
import accueil_galerie_5 from '../assets/accueil_galerie_5.jpeg';
import accueil_galerie_6 from '../assets/accueil_galerie_6.jpeg';
import accueil_galerie_7 from '../assets/accueil_galerie_7.jpeg';

import { GiCash } from "react-icons/gi";
import { FaWifi, FaCcMastercard, FaCcVisa, FaMoneyCheckAlt, FaUmbrellaBeach } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { MdAirplaneTicket, MdOutlinePets } from "react-icons/md";
import { BsTicketDetailed } from "react-icons/bs";
import { FaLocationDot, FaChampagneGlasses } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
// import { TbAirConditioning } from "react-icons/tb";
// import { GrWifi } from "react-icons/gr";

import Footer from './Footer';

function Accueil(){
    return(
        <>
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
                                Bienvenue chez Le Végétal, l'endroit idéal pour une expérience gastronomique inoubliable ! 
                                Si vous cherchez le lieu parfait pour un repas délicieux et une soirée mémorable, vous êtes au bon endroit. 
                                Au cœur de notre restaurant, découvrez une diversité de plats exquis que vous pourrez savourer dans une atmosphère chaleureuse et conviviale.
                            </p>
                            <p>
                                Nous sommes ouverts du mardi au samedi, et nous vous invitons à venir nous rendre visite à tout moment. 
                                Chez Le Végétal, chaque repas est une célébration de la bonne cuisine et de la convivialité.
                            </p>
                        </article>
                        <article className='droite'>
                            <p>
                                Un lieu de prédilection pour le déjeuner - Laissez-vous séduire par notre cuisine délicieuse et notre sélection rafraîchissante de boissons. 
                                Que ce soit pour un déjeuner gourmand ou un dîner exquis, nous mettons à votre disposition une connexion Wi-Fi gratuite pour rester connecté pendant votre repas.
                            </p>
                            <p>
                                Profitez de douces soirées sur notre terrasse élégante et accueillante, où chaque moment devient une expérience gastronomique exceptionnelle. 
                                Peu importe la météo, nos salles climatisées vous assurent un confort optimal à tout moment.
                            </p>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='horaires'>
                    <div className='w-100 row'>
                        <article>
                            <h2>Nos horaires d’ouverture :</h2>
                            <div className='row joursOuv justify-content-space-be'><span>Mardi :</span><span>12:00 à 13:30, 19:00 à 21:00</span></div>
                            <div className='row joursOuv justify-content-space-be'><span>Mercredi :</span><span>12:00 à 13:30, 19:00 à 21:00</span></div>
                            <div className='row joursOuv justify-content-space-be'><span>Jeudi :</span><span>12:00 à 13:30, 19:00 à 21:00</span></div>
                            <div className='row joursOuv justify-content-space-be'><span>Vendredi :</span><span>12:00 à 13:30, 19:00 à 21:00</span></div>
                            <div className='row joursOuv justify-content-space-be'><span>Samedi :</span><span>12:00 à 13:30, 19:00 à 21:00</span></div>

                            <div className='icon'><FaLocationDot className='icon' /> Vegetal, 9 Ruelle des Chats, 10000 Troyes</div>
                        </article>
                        <img src={accueil_horaires} alt='' />
                    </div>
                </section>

                <hr></hr>

                <section className='paiement'>
                    <h2 className='w-max-c m-auto'>Options de paiement disponible</h2>
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
                            <FaCcMastercard className='icon'></FaCcMastercard>
                            <span>Master card</span>
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
                            <FaMoneyCheckAlt className='icon'></FaMoneyCheckAlt>
                            <span>Carte ticket restaurant</span>
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
                            <span>Depuis 2023</span>
                            <p>
                            Le Maxime, un restaurant établi depuis 1989, occupe une place privilégiée au cœur historique de Troyes, niché dans un charmant immeuble à colombages du 17ème siècle, à proximité de l'église Saint-Jean-au-Marché sur la place du marché au pain.
                            <br></br> <br></br>
                            En quête de qualité, Le Maxime privilégie les producteurs locaux, mettant en avant les produits de l'agriculture biologique. Nos principaux fournisseurs sont situés dans l'Aube, avec un artisan cidrier dans la forêt d'Othe, un producteur de légumes à Fouchères, un vigneron indépendant pour le Champagne à Villenauxe la Grande, et Le Moulin St Martin pour toutes nos bières artisanales à St Martin de Bossenay.
                            <br></br> <br></br>
                            Toute l'équipe du Maxime vous souhaite un moment agréable et gourmand, empreint de notre engagement envers la qualité et l'authenticité.
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
                            <span>Évènements privés</span>
                        </article>
                        <article className='column'>
                            <IoBag className='icon'></IoBag>
                            <span>À emporter</span>
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
            <Footer />
        </>
    )
}

export default Accueil;
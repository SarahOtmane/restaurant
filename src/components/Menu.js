import Footer from './Footer';

import menu from '../assets/menu.png';

function Menu(){
    return(
        <>
            <main className="menu back_bleu h-100">
                <section className='section1 w-100'>
                    <center>
                        <img src={menu} alt='' />
                    </center>
                    <article>
                        <span>Jetez un coup d'oeil sur notre</span>
                        <h1>Carte menu !</h1>
                    </article>
                </section>

                <section className='concept'>
                    <h2 className='w-max-c m-auto'> Notre concept : Exploration culinaire saisonnière. !</h2>
                    <div className='row w-100'>
                        <article className='gauche'>
                            <p>
                                Découvrez une expérience gastronomique sans pareille au Végétal, où l'absence de carte traditionnelle vous permet de vous immerger dans un univers culinaire unique. 
                                Laissez-vous emporter par les idées novatrices et les inspirations du chef, qui façonne des plats délicieux au gré des produits de saison soigneusement sélectionnés.
                            </p>
                            <p>
                                Notre engagement envers la satisfaction de nos clients se reflète dans notre adaptabilité à chaque régime alimentaire. 
                                Que vous soyez végétarien, végétalien, ou que vous ayez des préférences alimentaires spécifiques, notre équipe est prête à personnaliser votre expérience culinaire. 
                                Indiquez simplement vos souhaits lors de votre réservation ou de la prise de votre commande, et laissez-nous faire le reste.
                            </p>
                        </article>
                        <article className='droite'>
                            <p>
                                Au restaurant Le Végétal, nous croyons au plaisir sans contraintes. En l'absence d'une carte fixe, chaque repas devient une aventure délectable, une exploration des saveurs saisonnières qui éveilleront vos papilles. 
                                Libérez-vous des choix préétablis et faites confiance à notre chef pour vous surprendre avec des créations culinaires uniques.
                            </p>
                            <p>
                                Nous considérons chaque repas comme une collaboration entre notre chef talentueux et vous, nos invités. 
                                Votre participation commence dès la réservation ou la commande, où nous vous invitons à partager vos préférences alimentaires. Ensemble, créons une expérience gastronomique mémorable qui transcende les simples repas pour devenir une véritable célébration de la diversité des saveurs et des plaisirs gustatifs.
                            </p>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='formules'>
                    <h2 className='w-max-c m-auto'> Nos formules !</h2>
                    <article>
                        <h3 className='underline'>Formule &#171; Les Yeux Fermés &#187;</h3>
                        <span><strong>35&#128;</strong></span>
                        <p>Expérience de notre cuisine en 5 actes</p>
                        <p className='deco'>Options carnée : supplément de <strong>10&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p className='deco'>Assiete de fromages : <strong>5&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                    </article>

                    <article>
                        <h3 className='underline'>Formule du midi en semaine</h3>
                        <span><strong>20&#128;</strong></span>
                        <p>Expérience de notre cuisine en 3 actes</p>
                        <p className='deco'>Options carnée : supplément de <strong>10&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                    </article>

                    <article className='column'>
                        <h3 className='underline'>Formule Jeune Pousse</h3>
                        <span><strong>12&#128;</strong></span>
                        <p>Enfant de - 12 ans</p>
                    </article>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Menu;
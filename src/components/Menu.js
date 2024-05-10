import Header from './Header';
import Footer from './Footer';

import menu from '../assets/menu.png';

function Menu(){
    return(
        <>
            <Header color='back_bleu' />

            <main className="menu back_bleu h-100">
                <section className='section1 w-100'>
                    <center>
                        <img src={menu} className='imgTest menu' alt='' />
                    </center>
                    <article>
                        <span>Jetez un coup d'oeil sur notre</span>
                        <h1>Carte menu !</h1>
                    </article>
                </section>

                <section className='concept'>
                    <h2 className='w-max-c m-auto'> Notre concept : exploration culinaire saisonnière !</h2>
                    <div className='row w-100'>
                        <article className='gauche'>
                            <p>
                                Découvrez une expérience gastronomique sans pareille au Végétal, où l'absence de carte traditionnelle vous permet de vous immerger dans un univers culinaire unique. 
                            </p>
                            <p>
                                Au restaurant &#171; Le Végétal &#187;, nous croyons au plaisir sans contraintes. 
                            </p>
                        </article>
                        <article className='droite'>
                            <p>
                                La base du flexitarien repose sur l'alimentation du 21ème siècle : manger équilibré et varié avec des produits de qualités issus de filières durables et responsables.
                                Libérez-vous des choix préétablis et faites confiance à notre chef pour vous surprendre avec des créations culinaires uniques.
                            </p>
                        </article>
                    </div>
                </section>

                <hr></hr>

                <section className='formules'>
                    <h2 className='w-max-c m-auto'> Nos formules !</h2>
                    <article>
                        <h3 className='underline'>Formule du midi (lundi au vendredi) </h3>
                        <span><strong>26€</strong></span>
                        <p>Expérience de notre cuisine en 3 actes</p>
                        <p className='deco'>Option carnée : supplément de <strong>5€</strong></p>
                        <span>&bull; &bull; &bull;</span>
                    </article>
                    
                    <article>
                        <h3 className='underline'>Formule &#171; Les Yeux Fermés &#187;</h3>
                        <span><strong>39€</strong></span>
                        <p>Expérience de notre cuisine en 5 actes</p>
                        <p className='deco'>Option carnée : supplément de <strong>5€</strong></p>
                        {/* <span>&bull; &bull; &bull;</span>
                        <p className='deco'>Assiette de fromages : <strong>5€</strong></p>
                        <span>&bull; &bull; &bull;</span> */}
                    </article>

                    <article className='column'>
                        <h3 className='underline'>Formule Jeune Pousse</h3>
                        <span><strong>15€</strong></span>
                        <p>Enfant de - 12 ans</p>
                    </article>
                </section>
            </main>

            <Footer color='back_bleu' />
        </>
    )
}

export default Menu;
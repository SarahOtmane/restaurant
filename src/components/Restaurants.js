import Header from "./Header";
import Footer from "./Footer";

import restau from '../assets/restau.png';
import brut from '../assets/brut.jpeg';
import bam from '../assets/bam.jpeg';
import felix from '../assets/felix.jpg';
import lapin from '../assets/lapin.webp';
import maxime from '../assets/maxime.jpeg';
import { Link } from "react-router-dom";


function Restaurants(){
    return(
        <>
            <Header color='back_vert' />
            <main className="autresRestau h-100 back_vert">
                <section className='section1 w-100'>
                    <center>
                        <img src={restau} alt='' />
                    </center>
                    <article>
                        <span>Vous voulez d'autres adresses ?</span>
                        <h1>Nos autres restaurants !</h1>
                    </article>
                </section>
                <section className="restau row justify-content-space-be">
                    <article>
                        <Link to='https://www.chez-felix.fr/'>
                            <img src={felix}  alt='' />
                            <h2>Chez Félix</h2>
                        </Link>
                    </article>
                    <article>
                        <Link to='https://lemaxime.eatbu.com/?lang=fr'>
                            <img src={maxime}  alt='' />
                            <h2>Le Maxime</h2>
                        </Link>
                    </article>
                    <article>
                        <Link to='https://www.bamtroyes.fr/'>
                            <img src={bam}  alt='' />
                            <h2>Le Bam</h2>
                        </Link>
                    </article>
                    <article>
                        <Link to='https://www.brut-par-le-bam.fr/'>
                            <img src={brut}  alt='' />
                            <h2>Brut</h2>
                        </Link>
                    </article>
                    <article>
                        <Link to='https://le-lapin-bleu.fr/'>
                            <img src={lapin}  alt='' />
                            <h2>Le Lapin Bleu</h2>
                        </Link>
                    </article>
                </section>
            </main>
            <Footer color='back_vert' />
        </>
    )
}

export default Restaurants;
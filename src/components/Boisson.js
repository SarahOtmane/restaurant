

import Header from './Header';
import Footer from './Footer';

import accueil from '../assets/acceuil.png';

function Boisson(){
    return(
        <>
            <Header color='back_gris' />
            <main  className="boisson back_gris h-100">
                <section className='section1 w-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                    <article>
                        <span>Jetez un coup d'oeil sur notre</span>
                        <h1>Carte des vins !</h1>
                    </article>
                </section>

                <ul className='row list justify-content-space-be'>
                    <li><a className='link' href='#Champagne' >Champagnes</a></li>
                    <li><a className='link' href='#Blancs' >Vins Blancs</a></li>
                    <li><a className='link' href='#Rouges' >Vins Rouges</a></li>
                    <li><a className='link' href='#Autre' >Autres Brevages</a></li>
                </ul>

                <section className='champagne' id='Champagne'>
                    <h2 className='w-max-c m-auto'> Nos champagnes</h2>
                    <center><span>75cl</span></center>
                    <div className='row'>
                        <section>
                            <h3 className='underline'>La Champagne</h3>
                            <article>
                                <h4 className='underline'>Jacques Lassaigne <br></br> Montgueux</h4>
                                <p>"Cuvée les Vignes de Montgueux" ... <strong>58&#128;</strong></p>
                                <span>&bull; &bull; &bull;</span>
                                <p>"La ruelle des chats" ... <strong>48&#128;</strong></p>
                                <span>&bull; &bull; &bull;</span>
                                <p>"Le Grain de beauté" ... <strong>119&#128;</strong></p>
                            </article>
                            <article>
                                <h4 className='underline'>Elise Dechannes <br></br> Gyé Sur Seine</h4>
                                <p>"Absolue Grès" ... <strong>79&#128;</strong></p>
                                <span>&bull; &bull; &bull;</span>
                                <p>"Absolue Terre" ... <strong>79&#128;</strong></p>
                            </article>
                            <article>
                                <h4 className='underline'>Vouett & Sorbee<br></br> Buxières Sur Arce</h4>
                                <p>"Blanc d'argile" ... <strong>81&#128;</strong></p>
                            </article>
                        </section>
                        <section>
                            <h3 className='underline'>Les côteaux champenois</h3>
                            <span>Olivier Horiot <br></br> Les Riceys</span>
                            <article>
                                <h4 className='underline'>Rose des Riceys</h4>
                                <p>"En Valingrain" 2017 ... <strong>58&#128;</strong></p>
                                <span>&bull; &bull; &bull;</span>
                                <p>"En Barmont" 2017  ... <strong>58&#128;</strong></p>
                            </article>
                            <article>
                                <h4 className='underline'>Coteaux Champenois</h4>
                                <p>"Tranquille" 2018 ... <strong>78&#128;</strong></p>
                            </article>
                        </section>
                    </div>
                </section>
                <hr></hr>
                <section className='vin row'>
                    <div id='Blancs'>
                        <h2>Nos Vins Blancs</h2>
                        <center><span>75cl</span></center>
                        <h3 className='underline'>L'Alsace</h3>
                        <article>
                            <h4 className='underline'>Domaine Marcel Deiss</h4>
                            <p>Berckem 2019 ... <strong>53&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>Schoffweg 2017 "le chemin des brebis" ... <strong>59&#128;</strong></p>
                        </article>
                        <article>
                            <h4 className='underline'>Vignoble du rêveur</h4>
                            <p>"La Vigne en Rose" 2020 ... <strong>43&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Un Instant sur Terre" 2021  ... <strong>54&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Singulier" 2021  ... <strong>49&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Valée de la Loire</h3>
                        <article>
                            <h4 className='underline'>Domaine des Pothiers</h4>
                            <p>"Hors-pistes" 2021 ... <strong>44&#128;</strong></p>
                        </article>
                        <article>
                            <h4 className='underline'>Domaine Saint-Nicolas</h4>
                            <p>"Amphore" 2018 ... <strong>56&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Le haut des clous" 2021 ... <strong>52&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Bourgogne</h3>
                        <article>
                            <h4 className='underline'>Domaine La Croix Montjoie</h4>
                            <p>"Impatiente" 2020 ... <strong>41&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Élégante" 2021 ... <strong>44&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Savoie</h3>
                        <article>
                            <h4 className='underline'>Domaine Giachino</h4>
                            <p>Marius & Simone 2021 ... <strong>41&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>Apremont 2021 ... <strong>39&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Sud-Ouest</h3>
                        <article>
                            <h4 className='underline'>Domaine des 2 ânes</h4>
                            <p>"Les 2 ânes gris" 2021 ... <strong>44&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Les 10 ânes blancs" 2021 AOP Corbières ... <strong>39&#128;</strong></p>
                        </article>
                    </div>
                    <div id='Rouges'>
                        <h2>Nos Vins Rouges</h2>
                        <center><span>75cl</span></center>
                        <h3 className='underline'>Le Sud-Ouest</h3>
                        <article>
                            <h4 className='underline'>Elian Da Ros</h4>
                            <p>"Abouriou" 2020 ... <strong>41&#128;</strong></p>
                        </article>
                        <article>
                            <h4 className='underline'>Domaine des 2 ânes</h4>
                            <p>"Premiers-Pas" 2021 ... <strong>36&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Fontanilles" 2020  ... <strong>39&#128;</strong></p>
                        </article>
                        <h3 className='underline'>Le Beaujolais</h3>
                        <article>
                            <h4 className='underline'>Georges Descombes</h4>
                            <p>"Chiroubles" 2020 ... <strong>44&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Vallée de la Loire</h3>
                        <article>
                            <h4 className='underline'>Domaine des Huards</h4>
                            <p>"Pressoir" 2020 AOP Cheverny ... <strong>44&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Envol" 2020 AOP Cheverny ... <strong>42&#128;</strong></p>
                        </article>
                        <article>
                            <h4 className='underline'>Domaine des Pothiers</h4>
                            <p>"Les Grenettes" 2021 ... <strong>42&#128;</strong></p>
                        </article>
                        <article>
                            <h4 className='underline'>Domaine Saint-Nicolas</h4>
                            <p>"Cuvée Jacques" 2017 ... <strong>49&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Savoie</h3>
                        <article>
                            <h4 className='underline'>Domaine Giachino</h4>
                            <p>"Black Giac" 2021 ... <strong>41&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>"Ma Douce" 2021 ... <strong>40&#128;</strong></p>
                        </article>
                        <h3 className='underline'>Le Languedoc Roussillon</h3>
                        <article>
                            <h4 className='underline'>Domaine Galus</h4>
                            <p>Cuvée "G. de Galus" 20210... <strong>39&#128;</strong></p>
                        </article>
                        <h3 className='underline'>La Bourgogne</h3>
                        <article>
                            <h4 className='underline'>Domaine Sébastien Magnien</h4>
                            <p>Hautes Côtes de Beaune "Clos de la Perrière" 2020 ... <strong>43&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>Beaune 1er Cru "Les Aigrots" 2020 ... <strong>51&#128;</strong></p>
                            <span>&bull; &bull; &bull;</span>
                            <p>Pommard 2020 ... <strong>53&#128;</strong></p>
                        </article>
                    </div>
                </section>
                <hr></hr>
                <section className='autre' id="Autre">
                    <h2 className='w-max-c m-auto'>Autres breuvages</h2>
                    <h3 className='underline'>Nos Bières Artisanales</h3>
                    <p>33cl ... <strong>5&#128;</strong> </p>
                    <h3 className='underline'>Sans alcool</h3>
                    <article>
                        <h4 className='underline'>La Ferme d'Hotte</h4>
                        <p>Verre de jus de fruit local ... <strong>4&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>Limonade 33cl  ... <strong>4&#128;</strong></p>
                    </article>
                    <h3 className='underline'>Les classiques</h3>
                    <article>
                        <p>Perrier 33cl ... <strong>4&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>2vian / Carola 50cl  ... <strong>4&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>Cola / Cola Zéro 33cl ... <strong>4&#128;</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>Évian 1L / Carola 75cl ... <strong>5&#128;</strong></p>
                    </article>
                    <h3 className='underline'>Nos boissons chaudes</h3>
                    <article>
                        <p>Café / Déca / Allongé / Café noisette ... <strong>2&#128;80</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>Double expresso  ... <strong>4&#128;50</strong></p>
                        <span>&bull; &bull; &bull;</span>
                        <p>Sélection de thés et infusions ... <strong>4&#128;</strong></p>
                    </article>
                </section>
            </main>
            <Footer color='back_gris' />
        </>
    )
}

export default Boisson;
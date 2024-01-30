import Footer from "./Footer";

import reservation from '../assets/acceuil.png';
import reserv_info from '../assets/reserv_info.jpg';
import Header from "./Header";
// import reserv_info1 from '../assets/reserv_info1.jpeg';

function Reservation(){
    return(
        <>  
            <Header color='back_vert' />
            
            <main className="reservation h-100 back_vert">
                <section className='section1 w-100'>
                    <center>
                        <img src={reservation} alt='' />
                    </center>
                    <article>
                        <span>Vous voulez gouter nos plats ?</span>
                        <h1>Réservez maintenant !</h1>
                    </article>
                </section>

                <section className="info">
                    <center><img src={reserv_info} alt='' /></center>
                    <hr></hr>
                    <h2 className="w-max-c m-auto ">Réservez une table !</h2>
                    <article>
                        {/* <p className="w-max-c m-auto">Nous sommes désolé ! La réservation en ligne est pour le moment indisponible.</p> */}
                        <p className="w-max-c m-auto">Appelez nous au <a href='tel:0325466712' className="link">03 25 46 67 12 </a>pour faire votre réservation.</p>
                    </article>
                </section>
            </main>
            <Footer color='back_vert' />
        </>
    )
}

export default Reservation;
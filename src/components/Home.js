import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import Header from './Header';
import accueil from '../assets/acceuil.png';
import reservation from '../assets/acceuil.png';
import menu from '../assets/acceuil.png';

function Home(){

    return(
        <>
        <Header color='' />
        <main className="home">
            <Swiper pagination={{type: 'progressbar',}} navigation={true} modules={[Pagination, Navigation]} className='swiper h-100' >
                <SwiperSlide className='slide back_noir h-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                        <h2><Link to='/accueil' className='link titre'>Le Végétal</Link></h2>
                </SwiperSlide>
                <SwiperSlide className='slide back_vert h-100'>
                    <center>
                        <img src={reservation} alt='' />
                    </center>
                        <h2><Link to='/reservation' className='link titre'>Réservation</Link></h2>
                </SwiperSlide>
                <SwiperSlide className='slide back_bleu h-100'>
                    <center>
                        <img src={menu} className='imgTest menu' alt='' />
                    </center>
                        <h2><Link to='/menu' className='link titre'>Menu</Link></h2>
                </SwiperSlide>
                <SwiperSlide className='slide back_gris h-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                        <h2><Link to='/boisson' className='link titre'>Carte des vins</Link></h2>
                </SwiperSlide>
            </Swiper>
        </main>
        </>
    )
}

export default Home;

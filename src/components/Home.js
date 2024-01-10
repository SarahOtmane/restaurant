import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import accueil from '../assets/accueil.png';
import reservation from '../assets/reservation.png';
import menu from '../assets/menu.png';

function Home(){

    return(
        <main className="home">
            <Swiper pagination={{type: 'progressbar',}} navigation={true} modules={[Pagination, Navigation]} className='swiper h-100' >
                <SwiperSlide className='slide back_noir h-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                    <div>
                        <span>01</span>
                        <h2><Link to='/accueil' className='link'>Le Maxime</Link></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide back_vert h-100'>
                    <center>
                        <img src={reservation} alt='' />
                    </center>
                    <div>
                        <span>02</span>
                        <h2><Link to='/reservation' className='link'>Réservation</Link></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide back_bleu h-100'>
                    <center>
                        <img src={menu} alt='' />
                    </center>
                    <div>
                        <span>03</span>
                        <h2><Link to='/menu' className='link'>Menu</Link></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide back_gris h-100'>
                    <center>
                        <img src={accueil} alt='' />
                    </center>
                    <div>
                        <span>04</span>
                        <h2><Link to='/boisson' className='link'>Boissons</Link></h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Home;

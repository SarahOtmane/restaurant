import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import accueil from '../assets/accueil.png';

function Home(){

    return(
        <main className="home">
            <Swiper navigation={true} modules={[Navigation]} className='swiper h-100' >
                <SwiperSlide>
                    <img src={accueil} alt='' />
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Home;

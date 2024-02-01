import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Animation from './components/Animation';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import Boisson from './components/Boisson';
import Accueil from './components/Accueil';
import Restaurants from './components/Restaurants';

function App(){
    return(
        <BrowserRouter>
            <>  
                <Animation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/boisson' element={<Boisson />} />
                    <Route path='/autres-restaurants' element={<Restaurants />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App;
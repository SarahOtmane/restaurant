import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Animation from './components/Animation';
import Header from './components/Header';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import Boisson from './components/Boisson';
import Accueil from './components/Accueil';

function App(){
    return(
        <BrowserRouter>
            <>  
                <Header />
                <Animation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/boisson' element={<Boisson />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App;
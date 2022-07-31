import React, {useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import PageNotFound from './Components/PageNotFound';
import NavBar from './Components/NavBarComponent';
import ProductList from './Components/ProductList';

const App=()=>{

    return(<>

        <BrowserRouter>
        <NavBar/>
            <Routes>
            <Route path='AboutUs' element={<AboutUs/>}></Route>
            <Route path='Contact' element={<Contact/>}></Route>
            <Route path='Pricing' element={<Pricing/>}></Route>
            
            
          <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
            </BrowserRouter>
            </>
    )
}
export default App;


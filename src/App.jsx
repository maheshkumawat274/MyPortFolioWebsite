import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/'element={<Homepage/>}></Route>
        <Route path='/about'element={<AboutPage/>}></Route>
        <Route path='/service'element={<ServicesPage/>}></Route>
        <Route path='/contact'element={<ContactPage/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
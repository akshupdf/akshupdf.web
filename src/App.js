
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import Boxa from './components/box';
import { Footer } from './components/footer';
import About from './components/about';
import Invoice from './components/invoice';
import Menu2 from './components/menuV2';
import CubeWithWebSymbol from './components/worldsymbol';
import Contact from './components/contact';
import  Pricings from './components/pricing';
import Template from './components/template1';
import Template1 from './components/template2';


function App() {
  return (


    <div className="text-black h-screen ">
       
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/template1' element={<Template />} />
        <Route path='/template2' element={<Template1 />} />
        <Route path="/box" element={<Boxa />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/menuv2" element= {<Menu2 />} />
        <Route path="/web" element={<CubeWithWebSymbol />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricings />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;

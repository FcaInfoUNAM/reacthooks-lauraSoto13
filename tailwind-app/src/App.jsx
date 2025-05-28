import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from './NotFound';
import ProductGrid from './ProductGrid';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound/>}
        />
      <Route path="Contact" element={<ContactUs/>} />
      <Route path="Team" element={<TeamSection/>} />
      <Route path="About" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<ProductGrid/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
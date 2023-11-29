import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Pages/Layout'
import { Services } from './Pages/Services'
import Home from './Pages/Home'
import { Contact } from './Pages/Contact';
import { Protfolio } from './Pages/Protfolio/Protfolio';
import ScrollToTop from './components/helpers/ScrollToTop';
import { LandPlanning } from './Pages/Protfolio/Veiw/landplanning';
import { WaterProject } from './Pages/Protfolio/Veiw/waterporject';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="protfolio" element={<Protfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/protfolio/view/landplanning" element={<LandPlanning />} />
            <Route path="/protfolio/view/waterproject" element={<WaterProject />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter >



    </>
  )
}

export default App

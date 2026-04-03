import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import DiabetesPrediction from "./pages/DiabetesPrediction";
import HeartPrediction from "./pages/HeartPrediction";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const isPremium = false;

const PremiumRoute = ({children})=>{
 if(!isPremium){
  return <Navigate to="/pricing"/>
 }
 return children
}

export default function App(){

 return(
  <BrowserRouter>

  <Navbar/>

  <Routes>

   <Route path="/" element={<Home/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/diabetes" element={<DiabetesPrediction/>}/>

   <Route
    path="/heart"
    element={
      <PremiumRoute>
        <HeartPrediction/>
      </PremiumRoute>
    }
   />

   <Route path="/pricing" element={<Pricing/>}/>
   <Route path="/contact" element={<Contact/>}/>

  </Routes>

  <Footer/>

  </BrowserRouter>
 )
}
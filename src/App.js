import './App.css';
import {BrowserRouter,Routes,RouteProps, Route} from "react-router-dom";
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About"
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact"
import Experience from "./Components/experience/Experience"
import Testimonials from "./Components/testimonials/Testimonial"
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Home" element={"Home"}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      </BrowserRouter>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;

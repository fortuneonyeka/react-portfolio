import './App.css';
import {BrowserRouter,Routes,RouteProps, Route} from "react-router-dom";
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About"
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact"
import Experience from "./Components/experience/Experience"
import Recomendations from "./Components/recomendations/Recomendations"
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="app">
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
      <Recomendations/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;

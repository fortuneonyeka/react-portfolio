import './App.css';
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About"
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact"
import Experience from "./Components/experience/Experience"
import Recomendations from "./Components/recomendations/Recomendations"

function App() {
  return (
    <div className="app">
      <Header/>
      <Nav/>
      
      <About/>
      <Experience/>
      <Portfolio/>
      <Recomendations/>
      <Contact/>
     
      
    </div>
  );
}

export default App;

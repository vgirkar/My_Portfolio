import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <About/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

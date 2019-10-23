import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Servises from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'





function App() {
  return (
    <>
      {/* <WelcomePage /> */}
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Servises />
      <Contact />
      <Footer />
      
    </div>
    </>
  );
}

export default App;

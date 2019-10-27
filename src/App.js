import React, { Component } from 'react';
import './App.css';
// import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Servises from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'






class App extends Component {

state = {
  headerClass:'fixed-navigation',
  mobileViewNav: '',
  display: 'none',
  noneClass: 'none',
  menu: "fas fa-bars",
  // close: "fas fa-times"
}

screenChange = () => {
  let mql = window.matchMedia('(max-width: 800px)');
  if(mql.matches){
    this.setState({
      ...this.state.headerClass, 
      headerClass: "fixed-navigation mobile-fixed",
      ...this.state.mobileViewNav,
      mobileViewNav: '',
      ...this.state.display,
      display: 'block',
      ...this.state.noneClass,
      noneClass: 'none',
      ...this.state.menu,
      menu: 'fas fa-bars'

    });
  } else {
    // fixedNav = " fixed-navigation"
    this.setState({
      ...this.state.headerClass,
       headerClass: "fixed-navigation",
       ...this.state.navigationView,
       mobileViewNav: '',
       ...this.state.display,
       display: 'none',
       ...this.state.noneClass,
      noneClass: 'none'
      
    });
  }
}

toggleNavOpenHandler = () => {
  let mql = window.matchMedia('(max-width: 800px)');
  if(mql.matches){
    this.setState({
      ...this.state.mobileViewNav,
      mobileViewNav: 'mobile-li',
    });
  } else {
    this.setState({
      ...this.state.mobileViewNav,
      mobileViewNav: '',
      ...this.state.menu,
      menu: 'fas fa-bars'
    });
  }
}

toggleNavCloseHandler = () => {
  if(this.state.menu === 'fas fa-bars'){
    this.setState({
      ...this.state.menu,
      menu: 'fas fa-times',
      ...this.state.mobileViewNav,
      mobileViewNav: 'mobile-li',
    });

  } else{
    this.setState({
      ...this.state.menu,
      menu: 'fas fa-bars',
      ...this.state.mobileViewNav,
      mobileViewNav: '',
    });
  }
}

  render(){
    window.addEventListener('resize',this.screenChange)
    window.addEventListener('load', this.screenChange)
    return (
      <>
        {/* <WelcomePage /> */}
      <div className="App">
        <Header headerClass={this.state.headerClass} 
                mobileViewNav={this.state.mobileViewNav}
                display={this.state.display}
                toggleNavOpenHandler={this.toggleNavOpenHandler}
                noneClass={this.state.noneClass}
                toggleNavCloseHandler={this.toggleNavCloseHandler}
                menu={this.state.menu}
        />
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
}

export default App;

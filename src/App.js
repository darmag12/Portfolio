import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { projects } from './projectData'
import { projectDetail } from './projectData'
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Servises from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectOverview from './components/Projects/ProjectOverview'






class App extends Component {

state = {
  headerClass:'fixed-navigation',
  mobileViewNav: '',
  display: 'none',
  noneClass: 'none',
  menu: "fas fa-bars",
  // close: "fas fa-times"
  projectData: projects,
  projectDetail: projectDetail
 
}

screenChange = () => {
  let mql = window.matchMedia('(max-width: 800px)');
  if(mql.matches){
    this.setState({
      ...this.state.headerClass, 
      headerClass: "fixed-navigation mobile-fixed",
      // ...this.state.mobileViewNav,
      // mobileViewNav: '',
      ...this.state.display,
      display: 'block',
      ...this.state.noneClass,
      noneClass: 'none',
      // ...this.state.menu,
      // menu: 'fas fa-bars'

    });
  } else {
    // fixedNav = " fixed-navigation"
    this.setState({
      ...this.state.headerClass,
       headerClass: "fixed-navigation",
       ...this.state.mobileViewNav,
       mobileViewNav: '',
       ...this.state.display,
       display: 'none',
       ...this.state.noneClass,
      noneClass: 'none',
      ...this.state.menu,
      menu: 'fas fa-bars'
      
    });
  }
}

toggleNavOpenHandler = () => {
  let mql = window.matchMedia('(max-width: 800px)');
  let newMenu;
  newMenu = this.state.menu === 'fas fa-bars' ? 'fas fa-times' : 'fas fa-bars'
  let toggleMenu;
   toggleMenu = newMenu === 'fas fa-times' ? 'mobile-li' : ''
  if(mql.matches){
    this.setState({
      ...this.state.mobileViewNav,
      mobileViewNav: toggleMenu,
      ...this.state.menu,
      menu: newMenu
    });
  } else {
    this.setState({
      ...this.state.mobileViewNav,
      mobileViewNav: '',
    });
  }
}


  render(){
    window.addEventListener('resize',this.screenChange)
    window.addEventListener('load', this.screenChange)
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={WelcomePage}/>
        <Route path="/home" exact render={() => {
          return (     
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
              <Projects projectData={this.state.projectData}/>
              <Skills />
              <Servises />
              <Contact />
              <Footer />
            </div>
          )

        }}/>
        <Route path="/portfolio/:projectId" render={({match}) => {
          return <ProjectOverview projectDetail={this.state.projectDetail}
                                  match={match}/>
        }}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

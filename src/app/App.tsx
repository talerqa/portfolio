import React from 'react';
import './App.css';
import {Header} from '../header/Header';
import {Main} from '../main/Main';
import {Skills} from '../skills/Skills';
import {Projects} from '../projects/Projects';
import {Contact} from '../contact/Contact';
import {Footer} from '../footer/Footer';
import About from '../about/About';
import {state} from './state'

function App() {
  return (
    <div className="App">
      <Header state={state.socialLinks} />
      <Main/>
      <About/>
      <Skills state={state.skills}/>
      <Projects/>
      <Contact state={state.socialLinks}/>
      <Footer />
    </div>
  );
}

export default App;

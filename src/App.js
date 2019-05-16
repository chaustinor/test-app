import React from 'react';
import logo from './logo.svg';
import blair from './clients/blair.png';
import calamos from './clients/calamos.png';
import citadel from './clients/citadel.png';
import kehe from './clients/kehe.png';
import mesirow from './clients/mesirow.jpeg';
import nuveen from './clients/nuveen.png';
import rcg from './clients/rcg.png';
import usbank from './clients/usbank.png';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <a href="">Main</a>
          <a href="">Clients</a>
          <a href="">Our Work</a>
          <a href="">Technologies</a>
          <a href="">Contact</a>
        </div>
        <Particles height="350px" width="300px" style={{backgroundColor: "black", width:"100%"}} />
      </header>
      <h2>Who We Are</h2>
      <p className="intro-text"><span className="opaque">Optdesign mission statement. </span> 
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <h2>Clients</h2>
      <div className="clients">
        <div><img src={blair} className="App-logo" alt="logo" title='William Blair' /></div>
        <div><img src={calamos} className="App-logo" alt="logo" title="Calamos" /></div>
        <div><img src={citadel} className="App-logo" alt="logo" title="William Blair" /></div>
        <div><img src={kehe} className="App-logo" alt="logo" title="William Blair" /></div>
        <div><div>Mesirow</div><img src={mesirow} className="App-logo" alt="logo" title="William Blair" /></div>
        <div><div>Nuveen</div><img src={nuveen} className="App-logo" alt="logo" title="William Blair" /></div>
        <div><div>Rosenthal Collins</div><img src={rcg} className="App-logo" alt="logo" title="William Blair" /></div>
        <div><img src={usbank} className="App-logo" alt="logo" title="William Blair" /></div>
      </div>
      <h2>Technologies</h2>
      <h2>Contact</h2>

      <div className="footer">
        <section class="copyright">Copyright © 2019 Optdesign Inc.</section>
      </div>
    </div>
  );
}

export default App;

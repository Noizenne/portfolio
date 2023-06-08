import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    document.title = 'Portfolio | Karla Mae Rabe'
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

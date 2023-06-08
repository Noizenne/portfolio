import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Banner />
      <Projects />
    </div>
  );
}

export default App;

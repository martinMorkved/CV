import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { experiences } from './data/experiences';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Experience experiences={experiences} />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;

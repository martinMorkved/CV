import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;

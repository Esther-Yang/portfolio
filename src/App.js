import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experiences from "./components/Experiences"
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experiences />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

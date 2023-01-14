import Landing from "./components/Landing";
import { NavBar } from "./components/Navbar";
import { About } from "./components/About";
import "@fontsource/poppins"; 
import MyStrengths from "./components/MyStrengths";
import Experience from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Landing />
      <NavBar />
      <About />
      <MyStrengths />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

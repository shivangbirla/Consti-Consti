import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import SayProveDo from "./components/SayProveDo";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Founders from "./components/Founders";
import Contact from "./components/Contact";
import StarsCanvas from "./components/StarBackground";
import LocomotiveScroll from 'locomotive-scroll';
//@ts-ignore

const App = () => {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lenisOptions:{
      lerp:0.07
    }

  });
  console.log(locomotiveScroll)
  return (
    <div
      data-scroll-container
      className="bg-slate-950 font-satoshi scroll-smooth snap-mandatory  max-w-screen overflow-x-hidden   min-h-[100vh]"
    >
      <StarsCanvas />
      <Navbar />
      <Home />
      <Services />
      <About />
      <SayProveDo />
      <div className="hidden sm:flex">
        <Projects />
      </div>
      <div className="hidden sm:flex">
        <Founders />
      </div>
      <Clients />
      <Contact />
    </div>
  );
};

export default App;

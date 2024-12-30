import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import Highlights from "./components/highlights/Highlights";
import Model from "./components/iPhoneModel/Model";
import Navbar from "./components/main/Navbar";
import Features from "./components/main/Features";
import Chip from "./components/main/Chip";
import Footer2 from "./components/main/Footer2";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer2 />
      <Footer />
    </main>
  );
};

export default App;

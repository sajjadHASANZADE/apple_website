import Footer from "./components/main/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/highlights/Highlights";
import Model from "./components/iPhoneModel/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Footer />
    </main>
  );
};

export default App;

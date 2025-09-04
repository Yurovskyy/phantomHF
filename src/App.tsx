import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        {/* <QuoteForm /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

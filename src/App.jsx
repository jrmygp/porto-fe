import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col gap-40 px-20 sm:px-48">
      <Navbar />

      <section id="projects" className="h-96 ">
        <Hero />
      </section>

      <section id="technologies" className="h-96 "></section>

      <section id="about-me" className="h-96 "></section>
    </div>
  );
}

export default App;

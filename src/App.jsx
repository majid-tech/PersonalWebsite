import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/about"
import Projects from "./components/Projects"

function App() { 
  return (
    <>
      <div className="min-h-screen bg-slate-950 overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Home, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-zinc-950">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <Tech />
        <Experience />
        <div>
        <Works />
        <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

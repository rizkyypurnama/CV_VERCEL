import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Home, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-950">
        <div>
          <StarsCanvas/>
          <Navbar />
          <Home />
        </div>
        <About />
        <Tech />
        <Experience />
        <div>
        <Works />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

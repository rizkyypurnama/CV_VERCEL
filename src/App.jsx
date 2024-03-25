import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Home, Navbar, Tech, Works, StarsCanvas } from "./components"
import bg1 from "../src/assets/bg1.jpg"
import bg2 from "../src/assets/bg3.jpg"
import bg4 from "../src/assets/bg4.jpg"

const App = () => {
  return (
    <BrowserRouter>
        <div className=" bg-gray-400">
        <div style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar />
            <Home />
        </div>
        <div>
        <About />
        <Tech />
        <div className="bg-black">
        <Experience />
        </div>
        </div>
        <div>
        <Works />
        </div>
        <div className="bg-black">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

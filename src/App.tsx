import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home, About, Works, Contact, ProjectDetail } from "./Pages"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/Official_Portfolio/" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App

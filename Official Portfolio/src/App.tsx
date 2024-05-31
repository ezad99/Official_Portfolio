import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar"
import { Home, About, Works, Contact, ProjectDetail } from "./Pages"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router basename="Official Portfolio">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

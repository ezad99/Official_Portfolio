import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home, Works, Contact } from "./Pages"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../components/pages/Home"
import Photos from "../components/pages/Photos"
import PhotoDetails from "../components/pages/PhotoDetails"
import About from "../components/pages/About"
import NotFound404 from "../components/pages/NotFound404"

const Routings = () => (
    <Router>
      <main>
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/photos' element={<Photos/>} />
            <Route path='/photo-details/:id' element={<PhotoDetails/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NotFound404/>} />
          </Routes>
        <Footer />
      </main>
    </Router>
)

export default Routings
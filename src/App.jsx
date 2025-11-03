import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Listings from "./pages/Listings"
import ListingDetail from "./pages/ListingDetail"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  )
}

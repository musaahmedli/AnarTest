import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Country } from "./pages/Country";
import { Destination } from "./pages/Destination";
// import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="destination">
              <Route index element={<Destination />} />
              <Route path=":country" element={<Country />} />
            </Route>
          </Route>
          <Route path="404" element={<h1>404Page</h1>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./companents/navbar";
import { Home } from "./pages/home/home";
import { Favorite } from "./pages/favorite/favorite";
import { Details } from "./pages/details/details";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
            <Route path="/item/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

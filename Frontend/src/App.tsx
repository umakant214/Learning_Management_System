import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/landing/Home";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

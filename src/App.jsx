import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AiHomepage from "./pages/AiHomepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ai" element={<AiHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

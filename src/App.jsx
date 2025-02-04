import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Papers from "./components/Papers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="papers" element={<Papers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

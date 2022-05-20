import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx";
import Appoinment from "./Pages/Appoinment/Appoinment.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
      </Routes>
    </div>
  );
}

export default App;

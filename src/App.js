import Navbar from "./Pages/Shared/Navbar.jsx";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx";
import Appoinment from "./Pages/Appoinment/Appoinment.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Login/Register.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </div>
  );
}

export default App;

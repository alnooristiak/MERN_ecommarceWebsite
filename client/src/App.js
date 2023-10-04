import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivetPolicy from "./pages/PrivetPolicy";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPass from "./pages/Auth/ForgotPass";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* protected user route start */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          {/* protected user route end */}
          {/* protected admin route start */}
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
          {/* protected admin route end */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<PrivetPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

      {/* Add the ToastContainer component */}
      <ToastContainer />
    </>
  );
}

export default App;

import ProtectedRoutes from "./components/Protected-Routes";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/user-dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Notfound from './components/Notfound/Notfound';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Rtip from './pages/rtip/Rtip';
import RedirectManual from './components/RedirectManual';

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<RedirectManual/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/rtip" element={<Rtip/>}></Route>
          <Route exact path="/cs" element={<ComingSoon/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </div>
    </Router>

    
    </>
  );
}


export default App;

import Calculate from './pages/Calculate.jsx';
import Landingpage from './pages/Landingpage.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route} from "react-router-dom";

const App =() => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calculate" element={<Calculate />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;

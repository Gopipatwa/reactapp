import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Loginpage from './components/Loginpage';
import SignUp from './components/SignUp';
import { Homepage } from './components/Homepage';
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <NavBar/>
      {/* <Route path="/" element={<NavBar/>} /> */}
    <Routes>
      <Route path="home" exact element = {<Homepage authorized={false}/>}/>
      <Route path="login" exact element={<Loginpage/>} />
      <Route path="signup" exact element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

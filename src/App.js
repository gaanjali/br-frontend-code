
import './App.css';
import SignInn from './component/SignInn';
import Login from './component/Login'
//import { Router } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import ForgetPage from './component/ForgetPage';
import ResetPage from './component/ResetPage';
import VarifictionPage from './component/VarifictionPage';
import VarifictionPage2 from './component/VarifictionPage2';


function App() {
  return (
<>
  <Router>
    <Link to="/"></Link>
    <Routes>
      <Route path="/" element={<SignInn/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgetpage" element={<ForgetPage/>}></Route>
      <Route path="/ResetPage" element={<ResetPage/>}></Route>
      <Route path="/VarifictionPage" element={<VarifictionPage/>}></Route>
      <Route path="/VarifictionPage2" element={<VarifictionPage2/>}></Route>

      
    </Routes>
   </Router>
   
   </>
  );
}

export default App;

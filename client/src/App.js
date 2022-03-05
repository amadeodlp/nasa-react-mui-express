import './styling/App.css';
import './styling/normalize.css';
import '@fontsource/roboto/300.css';
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useDispatch, useSelector} from 'react-redux'
import { authSuccess } from "./state/reducers/authReducer";
import Photos from "./components/Photos";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const dispatch = useDispatch();
  dispatch(authSuccess())
  const { token } =  useSelector(state => state.auth)
  if(token === null) {
  return <Login/>
  }
  return (
        <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/marsphotos" element={<Photos/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App;

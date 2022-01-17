import './styling/App.css';
import './styling/normalize.css';
import '@fontsource/roboto/300.css';
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useDispatch, useSelector} from 'react-redux'
import { authSuccess } from "./state/reducers/authReducer";
import Money from "./components/Money";

function App() {
  const dispatch = useDispatch();
  dispatch(authSuccess())
  const { token } =  useSelector(state => state.auth)
  if(token === null) {
  return <Login/>
  }
  return (
        <BrowserRouter>
          <Money />            
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App;

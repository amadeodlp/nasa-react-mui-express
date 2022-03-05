import Money from "../components/Money";
import Logo from "../components/Logo";
import { Container } from '@mui/material';
import { useSelector } from "react-redux";
import Progress from "../components/Progress";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../state/reducers/loadingReducer";
import LoginForm from "../components/LoginForm";
import '../styling/Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.loading)
  const {fulfilled} = useSelector(state => state.money)

  useEffect(() => {
    if (fulfilled === true) {
      dispatch(setLoading(false))
    }
  }, [dispatch])

  return (
        <div className='login-container'>
        <Money />            
        {loading ?
        <Container sx={{height: '100%', backgroundColor:'0F2833'}}>
          <Progress />
        </Container>
        :
        <Container
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
          <Logo height='15%' />
          <LoginForm/>
        </Container>
          }  
        </div>         
    )
}

export default Login;

import { Box, Button, TextField} from "@mui/material";
import ModalBox from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../state/reducers/modalReducer";
import {login} from '../state/reducers/authReducer';
import { useFormik } from 'formik';
import * as yup from 'yup'
import '../styling/LoginForm.css'

const LoginForm = () => {
  
    const dispatch = useDispatch();
    const {open} = useSelector(state => state.modal)

    const schema = yup.object().shape({
      username: yup.string()
        .required('Email is required'),
      password: yup.string()
        .required('Password is required')
      });

    const handleSubmit = async (values) => {
        await dispatch(login({
          values
        }))
        ;
      };

      const formik = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        validationSchema: schema,
        onSubmit: handleSubmit
      });

    return (
        <form className="login-form"onSubmit={formik.handleSubmit}>
          <Box 
          sx={{
            margin: 4, 
            padding: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3, 
            textAlign: 'center', 
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', 
            border:'solid black', 
            backgroundColor: '#0F2833'}}
          >
          {open && <ModalBox/>}
            <TextField
                sx={{ input: { color: '#fff', minWidth: '25vw' } }} 
                id="username"
                name="username"
                variant="outlined"
                placeholder="Username" 
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
                sx={{ input: { color: '#fff', minWidth: '25vw' } }}
                id="password"
                name="password"
                variant="outlined"
                placeholder="Password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button onClick={()=> dispatch(setModal(true))}>Forgot password?</Button>
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ 
                maxWidth: '10vw', 
                alignSelf:'center' }}
                >
                Submit</Button>
          </Box>
        </form>
    )
}

export default LoginForm;

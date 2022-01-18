import { Box, Button, TextField, Modal, Typography, Link } from "@mui/material";
import { setModal, setMessage } from "../state/reducers/modalReducer";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';

const RecoverModal = () => {
    const dispatch = useDispatch();
    const {open, message} = useSelector(state => state.modal)

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email")
      .required('Email is required')
    });

    const handlePasswordReset = () => {
        dispatch(setMessage("An email was sent with the steps to recover your account."))
        setTimeout(()=> {
            dispatch(setModal(false))
            dispatch(setMessage(""))
        }, 3000)
    }

    const formik = useFormik({
        initialValues: {
            email: ''
          },
        validationSchema: schema,
        onSubmit: handlePasswordReset
    });

    return (
        <Modal
            open={open}
            onClose={() => dispatch(setModal(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh', 
                    backgroundColor: 'grey.900', }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Write your email down here. We will send you the steps to recover your password.
                    </Typography>
                    <TextField
                        sx={{ padding: 3, input: { color: '#fff' }, minWidth: '25vw' }}
                        id="email"
                        name="email"
                        variant="outlined" 
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} 
                    />
                    <Button type="submit" variant="contained" disableElevation>Submit</Button>
                    {message && 
                    <Typography sx={{
                        color: '#FF1700', 
                        position: 'absolute', 
                        mt: '500px'}} variant="h6" 
                        component="h2">
                            <strong>{message}</strong>
                    </Typography>
                    }
                    <Typography 
                        id="modal-modal-description" 
                        variant="h6" 
                        component="h2" 
                        sx={{
                        mt: '50px'}}
                    >
                    If you need any assistance please contact us on 
                    <Link underline="hover" href="mailto:support@ortex.com"> support@ortex.com</Link>
                    </Typography>
                </Box>
            </form>  
        </Modal>
    )
}

export default RecoverModal

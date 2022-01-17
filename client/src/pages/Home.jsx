import { Box, Typography, Link, Button } from "@mui/material";

const Home = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 4}}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
            You are in home page now.
            </Typography>
            <Typography id="modal-modal-description" variant="h6" component="h2">
            You can contact us via <Link underline="hover" href="mailto:support@ortex.com">support@ortex.com</Link>
            </Typography>
        </Box>
    )
}

export default Home;

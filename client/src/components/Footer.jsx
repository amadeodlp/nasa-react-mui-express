import { Box, Typography, Link } from "@mui/material";
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem' 
    }}>
        <Typography id="modal-modal-description" variant="h6" component="h2" sx={{textAlign: 'center', color:'#fff'}}>
                You can contact us via <Link underline="hover" href="mailto:support@ortex.com">support@ortex.com</Link>
        </Typography>
    </Box>
  )
}

export default Footer
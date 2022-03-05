import { Box, Typography } from "@mui/material";
import React from 'react'

const Header = () => {
  return (
    <Box sx={{
        width: '100%',
        height: '2.5rem',
        marginTop: '50px'
    }}>
        <Typography id="modal-modal-title" variant="h4" component="h2" sx={{textAlign: 'center', color:'#fff'}}>
        Latest news
        </Typography>
    </Box>
  )
}

export default Header
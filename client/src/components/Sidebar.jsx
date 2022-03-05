import { IconButton, Box, AppBar, Drawer, Link, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <Box sx={{top: 0}}>
      <AppBar sx={{height: '8vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2 }}
            onClick={() => setOpen(!open)}
          >
          <MenuIcon/>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
          >
            <Box sx={{width: 250, height: '100%', backgroundColor:'#099', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Link sx={{color:'white', marginTop: '10px'}} onClick={() => navigate('/')}><HomeIcon/>Home</Link>
              <Link sx={{color:'white', padding: '10px'}} onClick={() => navigate('/about')}><InfoIcon/>About</Link>
              <Link sx={{color:'white'}} onClick={() => navigate('/contact')}><ContactSupportIcon/>Contact</Link>
            </Box>
          </Drawer>
        </IconButton>
        <Button href='https://www.nasa.gov' target='_blank'><Logo height='80px'/></Button>
      </AppBar>
    </Box>
  )
}

export default Sidebar
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
      };
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={linkStyle}>User Management</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button sx={{ color: '#fff' }}>
                <Link to="/" style={linkStyle}>Home</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
                <Link to="/about" style={linkStyle}>About</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
                <Link to="/contact" style={linkStyle}> Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;
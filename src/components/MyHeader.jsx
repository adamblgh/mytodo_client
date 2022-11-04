import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const MyHeader=({isLoggedIn,setIsLoggedIn})=> {
  const [userpw,setUserpw]=useState('')
  

  const handleLogin=()=> {
    if(userpw==process.env.REACT_APP_PW)
      setIsLoggedIn(true)
      setUserpw('')
  };

  const handleLogout=()=>{
    setIsLoggedIn(false)
    setUserpw('')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Welcome to my todo app
          </Typography>
          <Search>
            <StyledInputBase type='password'
              placeholder="Password..."
              value={userpw}
              inputProps={{ 'aria-label': 'search' }} 
              onChange={(e)=>setUserpw(e.target.value)}
            />
            {isLoggedIn? 
              <Button sx={{color:"white",border:'1px solid white'}} onClick={handleLogout}>Logout</Button>
              :
              <Button sx={{color:"white",border:'1px solid white'}} onClick={handleLogin}>Login</Button>
            }
            </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
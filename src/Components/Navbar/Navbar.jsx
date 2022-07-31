//import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const token = localStorage.getItem('token')
  const classes = useStyles();
  const navigate = useNavigate()

  function logout(){
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Teachers Paradise
        </Typography>
        {
          token?
          <Button color="inherit" onClick={logout}>Logout
          </Button>:<div><Button color="inherit" onClick={()=>navigate('/login')}>
            Login 
          </Button> <Button color="inherit" onClick={()=>navigate('/register')}>Register 
          </Button></div>
        }
          
      </Toolbar>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
  );
};

export default Navbar;
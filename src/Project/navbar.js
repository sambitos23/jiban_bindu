import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Icon } from '@material-ui/core';
import logo from "./style/images/appbar/jiban.png";
import logo2 from "./style/images/appbar/logo2.png";
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  nav: {
      fontSize: 20,
      marginRight:20,
      fontFamily: 'Philosopher'
  },
  nav1: {
    paddingRight: 90 ,
    fontFamily: 'Philosopher',
    color:'#707070'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const [a, setA] = useState(props.val);
  const [b, setB] = useState(props.valb);
  console.log(b)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to ="/Login" style={{textDecoration: 'none'}}><MenuItem style={{paddingRight: 90, color:'#707070'}} onClick={handleMenuClose}><b>Login</b></MenuItem></Link>
      <Link to ="/Signup" style={{textDecoration: 'none'}}><MenuItem style={{paddingRight: 90, color:'#707070'}} onClick={handleMenuClose}><b>Sign Up</b></MenuItem></Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to ="/" style={{textDecoration: 'none'}}>
      <MenuItem className={classes.nav1}>
         <p>Home</p>
      </MenuItem>
      </Link>
      <MenuItem className={classes.nav1} >
        <p>Purpose</p>
      </MenuItem>
      <Link to ={{pathname:"/Blog",  state:{a: b}}} style={{textDecoration: 'none'}}>
      <MenuItem className={classes.nav1} >
        <p>Blog</p>
      </MenuItem>
      </Link>
      <MenuItem className={classes.nav1} onClick={handleProfileMenuOpen}>
        <p>Account</p>
        <Icon>
          keyboard_arrow_down
        </Icon>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{
          height: 0
      }}>
        <Toolbar>
            <div >
                <img style={{
                    width:150,
                    marginLeft: 15,
                    marginTop: 5
                }} src={a==='1'?
                logo2
               :
               logo} alt="Logo"/>
            </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link to ="/" style={{textDecoration: 'none'}}>
            <IconButton className={classes.nav}>
              {a==='1'?
                 <p style={{color:'white'}}>Home</p>
                :
                <p>Home</p>
                }
            </IconButton>
            </Link>
            <IconButton className={classes.nav}>
              {a==='1'?
                  <p style={{color:'white'}}>Purpose</p>
                  :
                  <p>Purpose</p>
                  }
            </IconButton>
            <Link to ={{pathname:"/Blog",  state:{a: b}}} style={{textDecoration: 'none'}}>
            <IconButton className={classes.nav}>
              {a==='1'?
                  <p style={{color:'white'}}>Blog</p>
                  :
                  <p>Blog</p>
                  }
            </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.nav}
            >
              {a==='1'?
                 <Icon style={{color:'white'}}>
                 account_circle
                 </Icon>
                :
                <Icon>
                 account_circle
                </Icon>
                }
              {a==='1'?
                 <p style={{color:'white'}}>Account</p>
                :
                <p>Account</p>
                }
                {a==='1'?
                 <Icon style={{color:'white'}}>
                  keyboard_arrow_down
                 </Icon>
                :
                 <Icon>
                  keyboard_arrow_down
                 </Icon>
                }
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              {a==='1'?
                 <Icon style={{color:'white'}}>
                  more_vert
                 </Icon>
                :
                 <Icon>
                  more_vert
                 </Icon>
                }
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Icon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo2 from "./style/images/appbar/logo2.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  nav: {
    fontSize: 20,
    marginRight:20,
    fontFamily: 'Philosopher',
    color: 'white'
},
nav1: {
  paddingRight: 90 ,
  fontFamily: 'Philosopher',
  color: '#707070'
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

export default function PrimarySearchAppBar2(props) {
  const [a, setA] = useState(props.val);
  const [c, setC] = useState(props.valc);
  const classes = useStyles();
  const [state, setState] = React.useState({
     left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" aria-label="main mailbox folders" style={{paddingTop:'80%'}}>
        <ListItem button>
          <ListItemIcon>
            <Icon>leaderboard</Icon>
          </ListItemIcon>
          {a==='1'?
               <Link to ="/BloodCount" style={{textDecoration: 'none'}}>
               <ListItemText primary="Blood Count"/>
               </Link>
              :
              <Link to ="/BloodcampInfo" style={{textDecoration: 'none'}}>
              <ListItemText primary="Bloodcamp Info"/>
              </Link>
          }
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>sports_handball</Icon>
          </ListItemIcon>
          {a==='1'?
               <Link to ="/Helprequest" style={{textDecoration: 'none'}}>
               <ListItemText primary="Help Requests"/>
               </Link>
              :
              <Link to ="/SeekHelp" style={{textDecoration: 'none'}}>
              <ListItemText primary="Seek Help"/>
              </Link>
          }
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>rate_review</Icon>
          </ListItemIcon>          
          <Link to ={{pathname:"/Feedback",  state:{a: c}}} style={{textDecoration: 'none'}}>
          <ListItemText primary="Feedback" />
        </Link>  
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>power_settings_new</Icon>
          </ListItemIcon>
          <Link to ="/" style={{textDecoration: 'none'}}>
          <ListItemText primary="Logout" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

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
      <ul>
      <MenuItem onClick={handleMenuClose}> <li>welcome to Jiban Bindu</li></MenuItem>
      <MenuItem onClick={handleMenuClose}> <li>Some patients is waiting for you :) </li></MenuItem>
      </ul>
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
      {a==='1'?
             <Link to ="/BloodCount" style={{textDecoration: 'none'}}>
                   <MenuItem className={classes.nav1}>
                    <p>Home</p>
                  </MenuItem>
            </Link>
            :
            <Link to ="/BloodcampInfo" style={{textDecoration: 'none'}}>
                    <MenuItem className={classes.nav1}>
                      <p>Home</p>
                    </MenuItem>
            </Link>
          }
      <MenuItem className={classes.nav1} >
        <p>Purpose</p>
      </MenuItem>
      <Link to ={{pathname:"/Blog",  state:{a: c}}} style={{textDecoration: 'none'}}>
      <MenuItem className={classes.nav1} >
        <p>Blog</p>
      </MenuItem>
      </Link>
      <MenuItem className={classes.nav1} onClick={handleProfileMenuOpen}>
        <p>Notification</p>
        <Icon>
        notifications_active
        </Icon>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{height: 0}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
             {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Icon onClick={toggleDrawer(anchor, true) } style={{color:'white'}}>menu</Icon>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </IconButton>
          <div >
                <img style={{
                    width:150,
                    marginTop: 5,
                    marginLeft:5
                }} src={logo2} alt="Logo"/>
            </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {a==='1'?
             <Link to ="/BloodCount" style={{textDecoration: 'none'}}>
             <IconButton className={classes.nav}>
                <p>Home</p>              
            </IconButton>
            </Link>
            :
            <Link to ="/BloodcampInfo" style={{textDecoration: 'none'}}>
             <IconButton className={classes.nav}>
                <p>Home</p>              
            </IconButton>
            </Link>
          }  
          
            <IconButton className={classes.nav}>
                  <p>Purpose</p>
            </IconButton>
            <Link to ={{pathname:"/Blog",  state:{a: c}}} style={{textDecoration: 'none'}}>
            <IconButton className={classes.nav}>
                  <p>Blog</p>
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
                 <Icon>
                 notifications_active
                </Icon>
                <p>Notification</p>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

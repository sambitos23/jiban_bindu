import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from './style/images/footer/navlogo.png';
import fb from './style/images/footer/fb.png';
import what from './style/images/footer/whatsapp.png';
import twet from './style/images/footer/twitter.png';
import inst from './style/images/footer/insta.png';
import button from './style/images/footer/button.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F6F7FC',
  },
  p: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: '#585151',
    marginLeft: 60
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item  sm={12} md={3} lg={3}>
          <p className={classes.p}>
               <img style={{
                    width:130,
                    marginLeft: -5,
                }} src={logo} alt="logo"/><br/>
 
                Kolkata, West Bengal<br/>
                Pin: 700001<br/>
                111-888-212159 <br/><br/>
                <Grid container spacing={3}>
                    <Grid item>
                    <img style={{
                        width:25,
                    }} src={fb} alt="Facebook"/>
                    </Grid>
                    <Grid item>
                    <img style={{
                        width:25,
                    }} src={what} alt="Whatsapp"/>
                    </Grid>
                    <Grid item>
                    <img style={{
                        width:25,
                    }} src={inst} alt="Instagram"/>
                    </Grid>
                    <Grid item>
                    <img style={{
                        width:25,
                    }} src={twet} alt="Twitter"/> 
                    </Grid>
                </Grid>

          </p>
        </Grid>
        <Grid item  sm={12} md={3} lg={3}>
          <p className={classes.p}>
               <h3 style={{color: '#4C507D', marginTop:0}}>Explore</h3>
              <p style={{marginTop:-10}}>
                Features<br/>
                About us<br/>
                FAQ<br/>
                Contact<br/>
                Blog  
             </p>     
          </p>
        </Grid>
        <Grid item  sm={12} md={2} lg={3}>
          <p className={classes.p}>
               <h3 style={{color: '#4C507D', marginTop:0}}>Legal</h3>
              <p style={{marginTop:-10}}>
                Terms & Condition<br/>
                Privacy policy
             </p> 
          </p>
        </Grid>
        <Grid item  sm={12} md={4} lg={3}>
          <p className={classes.p} >
               <h3 style={{color: '#4C507D', marginTop:0}}>Subscribe</h3>
              <p style={{marginTop:-10}}>
                Subscribe to get <br/>
                latest news from us<br/><br/>
                <Grid item>
                <input style={{
                    display: 'inline-block',
                    position: 'relative',
                    borderRadius:10,
                    borderColor:'#707070',
                    outline: 'none',
                    marginLeft: -7,
                    opacity: 0.5
                }} placeholder=" enter your email"/>
                </Grid>
                
                <Grid item>
                <Button style={{position: "relative",
                                display: 'inline-block',
                                marginLeft: 130,
                                marginTop:-40,
                            }}
                >
                    <img style={{
                            width:25,
                           }} src={button} alt="Click"/> 
                </Button>
                </Grid>
                       
             </p> 
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

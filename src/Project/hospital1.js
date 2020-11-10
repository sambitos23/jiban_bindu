import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import "./style/css/hospital1.css";
import comp1 from "./style/images/hospital1/medical1.jpg";
import PrimarySearchAppBar2 from './navbar2';


const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  input: {
    width: 42,
  },
});

export default function Hospital() {
  const classes = useStyles();
  const [a, seta] = useState('');
  const [value1, setValue1] = React.useState(10);
  const [value2, setValue2] = React.useState(20);
  const [value3, setValue3] = React.useState(12);
  const [value4, setValue4] = React.useState(5);
  const [value5, setValue5] = React.useState(10);
  const [value6, setValue6] = React.useState(32);
  const [value7, setValue7] = React.useState(21);
  const [value8, setValue8] = React.useState(8);

  return (
       <div >
          <PrimarySearchAppBar2
             val={a}
          />
          <Grid container className="background">
             <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',marginBottom:'5%'}}>
              <div style={{margin: 'auto'}}>
              <h1 className="heading">Blood Bank Condition</h1>
              <div style={{backgroundColor: '#FEE9D4', padding: '10%', paddingBottom: '5%',paddingTop:'5%',width:'70%', borderRadius:20 ,margin: 'auto'}}>
                  <Grid container spacing={2} alignItems="center" >
                    <Grid item>
                      <b>A+</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value1 === 'number' ? value1 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value1}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>A-</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value2 === 'number' ? value2 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value2}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>B+</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value3 === 'number' ? value3 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value3}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>B-</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value4 === 'number' ? value4 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value4}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>O+</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value5 === 'number' ? value5 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value5}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>O-</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value6 === 'number' ? value6 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value6}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>

                  </Grid> <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>AB+</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value7=== 'number' ? value7 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value7}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>

                    </Grid> <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <b>AB+</b>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value8=== 'number' ? value8 : 0}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value8}
                        margin="dense"
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </Grid>           
              </div>  
                  <div className="container"><b>Address:</b> 88, College St, Calcutta Medical College, College Square, Kolkata, West Bengal 700073<br/>
                            <b>Phone:</b> 033 2255 1621
                    </div>
                  <div className="container"><b>Medical Officer:</b> Bidhan Chandra Roy<br/><b>ID</b>: 1001</div>  
            </div>
             </Grid>
             <Grid item  sm={12} md={6} lg={6}>
                    <img className="comp1" src={comp1}/>
               </Grid>
          </Grid>
       </div>
  );
}

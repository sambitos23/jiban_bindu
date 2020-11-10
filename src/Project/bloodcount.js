import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import "./style/css/sekk.css";
import comp1 from "./style/images/seek/comp1.png";
import PrimarySearchAppBar2 from './navbar2';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  input: {
    width: 42,
  },
});

export default function BloodCount() {
  const classes = useStyles();
  const [a, seta] = useState('1');
  const [c, setC] = useState('1');
  const [value1, setValue1] = React.useState(10);
  const [value2, setValue2] = React.useState(10);
  const [value3, setValue3] = React.useState(10);
  const [value4, setValue4] = React.useState(10);
  const [value5, setValue5] = React.useState(10);
  const [value6, setValue6] = React.useState(10);
  const [value7, setValue7] = React.useState(10);
  const [value8, setValue8] = React.useState(10);


  const handleSliderChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleInputChange1 = (event) => {
    setValue1(event.target.value1 === '' ? '' : Number(event.target.value1));
  };
  const handleBlur1 = () => {
    if (value1 < 0) {
      setValue1(0);
    } else if (value1 > 100) {
      setValue1(100);
    }
  };

  const handleSliderChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const handleInputChange2 = (event) => {
    setValue2(event.target.value2 === '' ? '' : Number(event.target.value2));
  };
  const handleBlur2 = () => {
    if (value2 < 0) {
      setValue2(0);
    } else if (value2 > 100) {
      setValue2(100);
    }
  };

  const handleSliderChange3 = (event, newValue) => {
    setValue3(newValue);
  };
  const handleInputChange3 = (event) => {
    setValue3(event.target.value3 === '' ? '' : Number(event.target.value3));
  };
  const handleBlur3 = () => {
    if (value3 < 0) {
      setValue3(0);
    } else if (value3 > 100) {
      setValue3(100);
    }
  };

  const handleSliderChange4 = (event, newValue) => {
    setValue4(newValue);
  };
  const handleInputChange4 = (event) => {
    setValue4(event.target.value4 === '' ? '' : Number(event.target.value4));
  };
  const handleBlur4 = () => {
    if (value4 < 0) {
      setValue4(0);
    } else if (value4 > 100) {
      setValue4(100);
    }
  };

  const handleSliderChange5 = (event, newValue) => {
    setValue5(newValue);
  };
  const handleInputChange5 = (event) => {
    setValue5(event.target.value5 === '' ? '' : Number(event.target.value5));
  };
  const handleBlur5 = () => {
    if (value5 < 0) {
      setValue5(0);
    } else if (value5 > 100) {
      setValue5(100);
    }
  };

  const handleSliderChange6 = (event, newValue) => {
    setValue6(newValue);
  };
  const handleInputChange6 = (event) => {
    setValue6(event.target.value6 === '' ? '' : Number(event.target.value6));
  };
  const handleBlur6 = () => {
    if (value6 < 0) {
      setValue6(0);
    } else if (value6 > 100) {
      setValue6(100);
    }
  };

  const handleSliderChange7 = (event, newValue) => {
    setValue7(newValue);
  };
  const handleInputChange7 = (event) => {
    setValue7(event.target.value7 === '' ? '' : Number(event.target.value7));
  };
  const handleBlur7 = () => {
    if (value7 < 0) {
      setValue7(0);
    } else if (value7 > 100) {
      setValue7(100);
    }
  };

  const handleSliderChange8 = (event, newValue) => {
    setValue8(newValue);
  };
  const handleInputChange8 = (event) => {
    setValue8(event.target.value8 === '' ? '' : Number(event.target.value8));
  };
  const handleBlur8 = () => {
    if (value8 < 0) {
      setValue8(0);
    } else if (value8 > 100) {
      setValue8(100);
    }
  };
  return (
       <div >
          <PrimarySearchAppBar2
             val={a}
             valc={c}
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
                        onChange={handleSliderChange1}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value1}
                        margin="dense"
                        onChange={handleInputChange1}
                        onBlur={handleBlur1}
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
                        onChange={handleSliderChange2}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value2}
                        margin="dense"
                        onChange={handleInputChange2}
                        onBlur={handleBlur2}
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
                        onChange={handleSliderChange3}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value3}
                        margin="dense"
                        onChange={handleInputChange3}
                        onBlur={handleBlur3}
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
                        onChange={handleSliderChange4}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value4}
                        margin="dense"
                        onChange={handleInputChange4}
                        onBlur={handleBlur4}
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
                        onChange={handleSliderChange5}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value5}
                        margin="dense"
                        onChange={handleInputChange5}
                        onBlur={handleBlur5}
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
                        onChange={handleSliderChange6}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value6}
                        margin="dense"
                        onChange={handleInputChange6}
                        onBlur={handleBlur6}
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
                        onChange={handleSliderChange7}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value7}
                        margin="dense"
                        onChange={handleInputChange7}
                        onBlur={handleBlur7}
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
                        onChange={handleSliderChange8}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes.input}
                        value={value8}
                        margin="dense"
                        onChange={handleInputChange8}
                        onBlur={handleBlur8}
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
                  <Button style={{display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            color:'white',
                                            backgroundColor: '#D15950',
                                             borderRadius: 20,
                                            width: 150,}}>     
                                Update Count
                  </Button>
              </div>    
            </div>
             </Grid>
             <Grid item  sm={12} md={6} lg={6}>
                    <img className="comp01" style={{ width: '38%'}} src={comp1}/>
               </Grid>
          </Grid>
       </div>
  );
}

import { Button, Grid} from '@material-ui/core';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import "./style/css/sekk.css";
import comp1 from "./style/images/seek/comp1.png"
import PrimarySearchAppBar2 from './navbar2';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class SeekHelp extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                   open: false,
                }
        }

        onFocus= ()=> {

            this.setState({
              type: 'date'
            });
          };

        handleClickOpen = () => {
          this.setState({
            open: true
          })
        };  

        handleClose = () => {
          this.setState({
            open: false
          })
        };  

    render(){
        return(
            <div>       
             <PrimarySearchAppBar2
                val={this.state.a}
             />
             <Grid className="background01" container>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>

                            <h1 className="heading">Blood Request Form</h1>                           
                            <input type="text" name="fname" placeholder="Full Name" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}} />
                            <select type="text" name="gender" required className="select" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}>
                               <option disabled="disabled" selected="selected">Gender</option>
                               <option>Male</option>
                               <option>Female</option>
                               <option>other</option>                                                  
                            </select>
                            
                            <input type={ this.state.type } name="DOB" placeholder="Date of Birth" onFocus={ this.onFocus } required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/>                                                                                
                            <input type="address" name="Address" placeholder="Enter nearest hospital name with hospital ID" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/> 
                            <input type="number" name="Contact" placeholder="Contact No." required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/> 
                            <input type="email" name="Email" placeholder="Enter your disease" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/> 
                            <select type="text" name="blood" required className="select" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}>
                               <option disabled="disabled" selected="selected">Blood Group</option>
                               <option>A+</option>
                               <option>A-</option>
                               <option>B+</option>
                               <option>B-</option>
                               <option>AB+</option>
                               <option>AB-</option>   
                               <option>O+</option> 
                               <option>O-</option>                                                 
                            </select>                                                                                                           
                            
                            <Button style={{display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            color:'white',
                                            backgroundColor: '#D15950',
                                            marginBottom: 20,
                                            borderRadius: 20,
                                            width: 120,}} onClick={this.handleClickOpen} >     
                                SignUp
                            </Button> 
                            <Dialog
                              open={this.state.open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={this.handleClose}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle id="alert-dialog-slide-title">{"Continue the request press Agree"}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                Your request is successfully registered.<br/>

                                Pls come in the blood bank with proper authenticity 
                                and Doctor's recomendation
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                  Disagree
                                </Button>
                                <Button onClick={this.handleClose} color="primary">
                                  Agree
                                </Button>
                              </DialogActions>
                            </Dialog>                                                                                                                
               </Grid>
               <Grid item  sm={12} md={6} lg={6}>
                    <img className="comp01" src={comp1}/>
               </Grid>
             </Grid>
            </div>
        )
    }
}
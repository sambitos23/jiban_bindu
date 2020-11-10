import { Button, Grid} from '@material-ui/core';
import React from 'react';
import "./style/css/registration2.css";
import comp1 from "./style/images/regi2/comp1.png"
import PrimarySearchAppBar from './navbar';


export default class RegistrationPD extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                   a:'1',
                   b:true
                }
        }

        onFocus= ()=> {

            this.setState({
              type: 'date'
            });
          }

    render(){
        return(
            <div>       
             <PrimarySearchAppBar
                val={this.state.a}
                valb={this.state.b}
             />
             <Grid className="background100" container>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>
                    <img className="comp001" src={comp1}/>
               </Grid>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>

                            <h1 className="heading">Register Yourself</h1>                           
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
                            <input type="address" name="Address" placeholder="Address" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/> 
                            <input type="number" name="Contact" placeholder="Contact No." required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/> 
                            <input type="email" name="Email" placeholder="Email Address" required className="input" style={{display: 'block',
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
                                                                                                           
                            <input type="password" name="Password" placeholder="Password" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/>                            
                            <Button style={{display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            color:'white',
                                            backgroundColor: '#D15950',
                                            marginBottom: 20,
                                            borderRadius: 20,
                                            width: 120,}} >     
                                SignUp
                            </Button>                                                                                                                 
               </Grid>
             </Grid>
            </div>
        )
    }
}
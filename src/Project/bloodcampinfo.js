import { Button, Grid} from '@material-ui/core';
import React from 'react';
import { Link} from "react-router-dom";
import "./style/css/sekk.css";
import comp1 from "./style/images/bloodcamp/donate.gif"
import medi1 from "./style/images/hospital1/medical1.jpg"
import medi2 from "./style/images/hospital1/medical2.jpg"
import PrimarySearchAppBar2 from './navbar2';


export default class BloodcampInfo extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                   open: false,
                }
        }

        handleClickOpen=()=>{
            this.setState({
                open: true
            })
        }

    render(){
        return(
            <div>      
             <PrimarySearchAppBar2/>
             <Grid className="background01" container>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>

                            <h1 className="heading">Blood Request Form</h1>                           
                            
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
                            <input type="address" name="Address" placeholder="Enter Your Address" required className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}/>                                                                                                          
                            
                            <Button style={{display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            color:'white',
                                            backgroundColor: '#D15950',
                                            marginBottom: 20,
                                            borderRadius: 20,
                                            width: 120,}}
                                            onClick={this.handleClickOpen} 
                                            >     
                                Check
                            </Button>  

                            {this.state.open=== true &&
                               <div>
                                   <Link to ="/Hospital" style={{textDecoration: 'none'}}>
                                   <div className="container">
                                   <h2>Kolkata Medical College</h2>
                                   id: 1001
                                   <img src={medi1} style={{position: 'relative',marginLeft: '70%',width:'30%',marginTop:'-95px',borderRadius: 50}}/>
                                   </div>
                                   </Link>
                                   <div className="container" style={{marginBottom:50}}>
                                   <h2>N.R.S Medical College</h2>
                                   id: 1004
                                   <img src={medi2} style={{position: 'relative',marginLeft: '65%',width:'35%',marginTop:'-150px',borderRadius: 50}}/>
                                   </div>
                               </div>
                            }                                                                                                                  
               </Grid>
               <Grid item  sm={12} md={6} lg={6} >
                    <img style={{width: '60%',marginTop: '25%',paddingBottom: '10%', marginLeft: '21%',position: 'relative'}} src={comp1}/>
               </Grid>
             </Grid>
            </div>
        )
    }
}
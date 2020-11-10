import { Button, Grid} from '@material-ui/core';
import React from 'react';
import "./style/css/registration2.css";
import comp1 from "./style/images/regi2/comp3.png"
import PrimarySearchAppBar from './navbar';


export default class RegistrationA extends React.Component{
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
                    <img className="comp001"  src={comp1}/>
               </Grid>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>

                            <h1 className="heading">Authority Registration</h1>                           
                            <input type="text" name="fname" placeholder="Hospital Name" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required />
                            <input type="text" name="mo" placeholder="Hospital MO Name" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/>                             
                            <input type={ this.state.type } name="DOB" placeholder="Hospital ESTD" onFocus={ this.onFocus } className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/>                                                                                
                            <input type="address" name="Address" placeholder="Hospital Address" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/> 
                            <input type="number" name="Contact" placeholder="Hospital Contact No." className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/> 
                            <input type="email" name="Email" placeholder="Hospital Email Address" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/>  
                            <input type="number" name="Contact" placeholder="Capacity of Recieving Blood" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/>                                                                                                                                                                                         
                            <input type="password" name="Password" placeholder="Password" className="input" style={{display: 'block',
                                                                                                            marginLeft: 'auto',
                                                                                                            marginRight: 'auto',}}required/>                            
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
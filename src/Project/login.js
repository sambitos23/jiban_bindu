import { Button, Grid} from '@material-ui/core';
import React from 'react';
import { Redirect} from "react-router-dom";
import "./style/css/login.css";
import comp1 from "./style/images/login/comp1.png"
import PrimarySearchAppBar from './navbar';


export default class Login extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                   a:'1',
                   email: "",
                   password: "",
                   b:true
                }
        }

        handelEmail=(e)=>{
            this.setState({
                email: e.target.value
            })
        }
    
        handelPassword=(e)=>{
            this.setState({
                password: e.target.value
            })
        }

        checkLogin =() =>{
            if(this.state.email === "sambit@gmail.com" && this.state.password === "sambit"){
                this.setState({
                    login:true
                })
            } else if(this.state.email === "sambit28@gmail.com" && this.state.password === "sambit123"){
                this.setState({
                    login: false
                })
            }
        }


    render(){

        if(this.state.login === true){
            return <Redirect to ="BloodcampInfo" />
        } else if(this.state.login === false){
            return <Redirect to ="BloodCount" />
        }

        return(
            <div>     
             <PrimarySearchAppBar
                val={this.state.a}
                valb={this.state.b}
             />
             <Grid className="background1" container>
               <Grid item  sm={12} md={6} lg={6}>
                    <img className="comp100" src={comp1}/>
               </Grid>
               <Grid item  sm={12} md={6} lg={6} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>
            
                <div className="main1">
                    <p className="log" align="center">LOGIN</p><br/>
                    <input className="un " type="email" placeholder="Email" onChange={this.handelEmail}  style={{display: 'block',
                                                                            marginLeft: 'auto',
                                                                            marginRight: 'auto',}}/>
                    <input className="pass" type="password" placeholder="Password" onChange={this.handelPassword}  style={{display: 'block',
                                                                                            marginLeft: 'auto',
                                                                                            marginRight: 'auto',}}/>

{/* 
                    {(this.state.email === "sambit@gmail.com" && this.state.password === "sambit123")?
                    <Link to ="/BloodcampInfo" style={{textDecoration: 'none'}}>                                                                        
                    <Button className="submit" 
                    style={{color:'white',
                            borderRadius: 20,
                            width: 120,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            }}
                    // disabled={(this.state.email === "" || this.state.password === "" ? true : false)}        
                    >
                        Login
                    </Button>
                    </Link>
                    :
                    <Link to ="/BloodCount" style={{textDecoration: 'none'}}>                                                                         */}
                    <Button className="submit" 
                    style={{color:'white',
                            borderRadius: 20,
                            width: 120,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            }}
                            onClick={() => {
                                this.checkLogin();
                            }}      
                    disabled={(this.state.email === "" || this.state.password === "" ? true : false)}        
                    >
                        Login
                    </Button>
                    {/* </Link>
                    } */}
                    <p className="forgot" align="center">Forgot Password?</p>                               
                </div>
               </Grid>
             </Grid>
            </div>
        )
    }
}
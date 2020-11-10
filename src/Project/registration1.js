import { Button, Grid} from '@material-ui/core';
import React from 'react';
import { Link} from "react-router-dom";
import "./style/css/registration1.css";
import comp1 from "./style/images/regi1/comp1.png"
import PrimarySearchAppBar from './navbar';

export default class Registration1 extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                   a:'',
                   b:true
                }
        }

    render(){
        return(
            <div>
             <PrimarySearchAppBar
                val={this.state.a}
                valb={this.state.b}
             />
             <Grid container>
               <Grid item  sm={12} md={8} lg={8}>
                    <img className="comp0001" src={comp1}/>
               </Grid>
               <Grid item  sm={12} md={4} lg={4} style={{display: 'block',
                                                        marginLeft: 'auto',
                                                        marginRight: 'auto',}}>
                  
                <div className="main">
                    <p className="log" align="center">Sign In As</p><br/>
                    <Link to ="/Registration" style={{textDecoration: 'none'}}>
                    <Button 
                     style={{color:'white',
                            backgroundColor:'#3C51C2',
                            borderRadius: 20,
                            width: 120,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}      
                    >
                        Donar
                    </Button>
                    </Link><br/> 

                    <Link to ="/Registration" style={{textDecoration: 'none'}}>
                    <Button 
                     style={{color:'white',
                            backgroundColor:'#3C51C2',
                            borderRadius: 20,
                            width: 120,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}      
                    >
                        Reciver
                    </Button> 
                    </Link><br/>

                    <Link to ="/Authority" style={{textDecoration: 'none'}}>
                    <Button 
                     style={{color:'white',
                            backgroundColor:'#3C51C2',
                            borderRadius: 20,
                            width: 120,
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}      
                    >
                        Authority
                    </Button> 
                    </Link><br/>             
                </div>
               </Grid>
             </Grid>
            </div>
        )
    }
}
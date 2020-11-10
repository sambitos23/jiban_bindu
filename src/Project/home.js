import { Grid } from '@material-ui/core';
import React from 'react';
import "./style/css/home.css";
import comp1 from './style/images/home/comp1.png';
import comp2 from './style/images/home/comp2.png';
import comp3 from './style/images/home/comp3.png';
import comp4 from './style/images/home/comp4.png';
import comp5 from './style/images/home/comp5.png';
import comp6 from './style/images/home/comp6.png';
import comp7 from './style/images/home/comp7.png';
import comp8 from './style/images/home/giphy.gif';
import comp9 from './style/images/home/comp9.png';
import comp10 from './style/images/home/comp10.png';
import comp12 from './style/images/home/comp12.png';
import comp11 from './style/images/home/blood change.gif';
import comp13 from './style/images/home/heath all.gif';
import PrimarySearchAppBar from './navbar';
import AOS from 'aos';
AOS.init({
        offset: 200,
        duration: 300,
        easing: 'ease-in-sine',
        delay: 50,
      });
AOS.refresh();


export default class HomePage extends React.Component{
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
             <Grid className="first-p" container>
                <Grid item  sm={12} md={6} lg={6}>
                        <img className="compfir" src={comp1}/>
                    <p className="text1">
                        Makes You Proud
                    </p>
               </Grid>
               <Grid item  sm={12} md={6} lg={6}>
                    <img className="comp2" src={comp2}/>
               </Grid>
             </Grid>  
             <Grid item  sm={12} md={12} lg={12}>
                <img className="comp3" src={comp3}/>
             </Grid>
             <div style={{
                 fontFamily: 'Keania One',
                 textAlign: 'center',
                 color: '#FE465A',
                 fontSize: 50,
                 paddingBottom:50,
                 paddingTop:50,
            }}>
                 The Process Through Our Help
             </div>
             <div>
                 <img className="comp4" src={comp4}/>
             </div>
             <Grid container className="gridstyle1" >
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-right" className="comp5" src={comp5}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-left" className="comp6" src={comp6}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-up" className="comp7" src={comp7}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-down" className="comp6" src={comp8}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-up-right" className="comp5" src={comp9}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-up-right" className="comp6" src={comp10}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-down-right" className="comp7" src={comp12}/>
                </Grid>
                <Grid item  sm={6} md={6} lg={6}>
                        <img data-aos="fade-down-right" className="comp6" src={comp11}/>
                </Grid>
             </Grid>
             <Grid item  sm={12} md={12} lg={12}>
                <img data-aos="fade-down" className="comp13" src={comp13}/>
             </Grid>
            </div>
        )
    }
}
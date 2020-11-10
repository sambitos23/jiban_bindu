import React from 'react';
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import HomePage from "../Project/home";
import Login from "../Project/login";
import Registration1 from "../Project/registration1";
import RegistrationPD from "../Project/registration2";
import  RegistrationA  from "../Project/registration3";
import Blog from "./blog";
import BloodcampInfo from "./bloodcampinfo";
import BloodCount from "./bloodcount";
import SeekHelp from "./seekhelp";
import Help from "./helprequest";
import Feedback from "./feedback";
import Hospital from "./hospital1";
import Footer from './footer';
import Chat from './chat';

export default class Router extends React.Component{
    render(){
        return(
            <div style={{margin: 0}}>
                <Chat/>
                <BrowserRouter>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Signup" component={Registration1}/>
                    <Route path="/Registration" component={RegistrationPD}/>
                    <Route path="/Authority" component={ RegistrationA }/>
                    <Route path="/Blog" component={Blog}/>
                    <Route path="/BloodcampInfo" component={ BloodcampInfo }/>
                    <Route path="/BloodCount" component={ BloodCount }/>
                    <Route path="/SeekHelp" component={ SeekHelp }/>
                    <Route path="/Helprequest" component={ Help }/>
                    <Route path="/Feedback" component={ Feedback }/>
                    <Route path="/Hospital" component={ Hospital }/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}
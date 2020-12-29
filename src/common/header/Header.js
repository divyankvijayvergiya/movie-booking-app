import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from "../../assets/logo.svg";
class Header extends Component{
    render(){
        return(
            <div className="div-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <Button className="login-button" variant = "contained" color = "default">Login</Button>
            </div>
        )
    }
}

export default Header;
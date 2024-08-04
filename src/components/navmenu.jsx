import React from "react";
import logo from '../img/logo.svg';



function Navmenu()
{
    return(
        <div className="nav-menu">
            <a href="#main-section" className ='logo-link'>
            <img src={logo} alt="logo" className="nav-logo"/>
            </a>
            <div className="nav-container">
                <a href="#about" className="nav-item">О нас</a>
                <a href="#doing" className="nav-item">Что мы делаем</a>
                <a href="#services" className="nav-item">Услуги</a>
                <a href="#advantages" className="nav-item">Преимущества</a>
                <a href="" className="nav-item">Портфолио</a>
                <a href="#contact-us" className="nav-item">Связаться</a>
            </div>
        </div>
    )
}

export default Navmenu
import React from "react";
import circleBordered from '../img/background/circle-bordered.svg'
import circleDasheBorder from  '../img/background/circle-dashed-border.svg'
import circle1 from '../img/background/circle1.svg'
import circle2 from '../img/background/circle2.svg'
import circle3 from '../img/background/circle3.svg'
import octagon from '../img/background/octagon.svg'
import triangle from '../img/background/triangle.svg'

function Mainsection()
{
    return (
        <div className="main-section" id = "main-section">
            <div className="main-content">
                <h1 className="main-content-text">Мы создаем сайты</h1>
                <a href="" className="main-content-btn">Познакомиться с нами</a>
            </div>
            <div className="main-background">
                <img src = {circle1} className ="circle1" />
                <img src = {circle2} className ="circle2" />
                <img src = {circle3} className ="circle3" />
                <img src = {circleBordered} className ="circle-bordered" />
                <img src = {circleDasheBorder} className ="circle-dashed-border" />
                <img src = {triangle} className ="triangle" />
                <img src = {octagon} className ="octagon" />
            </div>
        </div>
    )
}

export default Mainsection
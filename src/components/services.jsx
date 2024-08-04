import React from "react";
import design from '../img/icons/design.svg'
import development from '../img/icons/development.svg'
import support from '../img/icons/support.svg'


function Services()
{
    return(
        <div className="services" id = "services">
            <div className="container">
                <h2 className="section-title services-title">Наши основные услуги</h2>
                <div className="services-card card1">
                    <img className ="services-icon" src={design} />
                    <h3 className="services-card-title">Дизайн сайта</h3>
                    <hr className = "card-hr" />
                    <p className="section-text services-text">
                        Создание дизайн-макета, по вашим пожеланиям.
                    </p>
                </div>
                <div className="services-card card2">
                    <img className ="services-icon" src={development} />
                    <h3 className="services-card-title">Верстка</h3>
                    <hr className = "card-hr" />
                    <p className="section-text services-text">
                        Полноценная верстка сайта, его настройка и проверка на баги.
                    </p>
                </div>
                <div className="services-card card3">
                    <img className ="services-icon" src={support} />
                    <h3 className="services-card-title">Поддержка</h3>
                    <hr className = "card-hr" />
                    <p className="section-text services-text">
                        Поддержка сайта во время работы.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
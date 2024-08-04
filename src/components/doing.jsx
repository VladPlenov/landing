import React from "react";
import pic from '../img/background/pic.svg'


function Doing()
{
    return(
        <div className="doing" id = "doing">
            <div className="container">
                <div className="doing-left">
                    <h2 className="section-title doing-title">Что мы делаем?</h2>
                    <p className="section-text doing-text">
                        Обращаясь к нам, вы можете рассчитывать на создание отличного сайта. В наши услуги входит полный цикл разработки сайта. Мы поможем вам созать
                        дизайн сайта и подготовим необходимые исходники. Далее происходит верстка и написание логики сайта. Дальше сайт поступает в ваше распоряжение и
                        вы распоряжаетесь им на свое усмотрение. 
                        При возникновении потребности мы можем осуществлять поддержку сайта и его сопровождение, в течении всего жизненного цикла.
                    </p>
                </div>
                <div className="doing-right">
                    <img src={pic} alt="illustration" />
                </div>
            </div>
        </div>
    )
}

export default Doing
import React from "react";
import advantages_bg_1 from '../img/background/advantages_bg_1.svg'
import advantages_bg_2 from '../img/background/advantages_bg_2.svg'


function Advantages()
{
    return(
        <div className="advantages" id = "advantages">
            <div className="container">
                <div className="advantages-content">
                    <h2 className="section-title advantages-title">Почему мы хороши?</h2>
                    <div className="advantages-card adv-card1">
                        <h3 className="advantages-card-title">В дизайне</h3>
                        <ul className="advantages-list">
                            <li className="section-text">Опытная команда дизайнеров</li>
                            <li className="section-text">Внимание к деталям</li>
                            <li className="section-text">Фильтрация идей</li>
                        </ul>
                    </div>
                    <div className="advantages-card adv-card2">
                        <h3 className="advantages-card-title">В разработке</h3>
                        <ul className="advantages-list">
                            <li className="section-text">Огромный багаж собственных библиотек и плагинов</li>
                            <li className="section-text">Мы любим чистый, красивый и масштабируемый код</li>
                            <li className="section-text">Планируем архитектуру сайта</li>
                        </ul>
                    </div>
                    <div className="advantages-card adv-card3">
                        <h3 className="advantages-card-title">В поддержке</h3>
                        <ul className="advantages-list">
                            <li className="section-text">Самые дружелюбная тех поддержка</li>
                            <li className="section-text">Работаем 24/7</li>
                            <li className="section-text">Чем дольше поддержка, тем дешевле стоимость</li>
                        </ul>
                    </div>
                </div>
                <div className="advantages-bg">
                    <img src={advantages_bg_1} className="advangages-circle" />
                    <img src={advantages_bg_2} className="advangages-hexagon" />
                </div>
            </div>
        </div>
    )
}

export default Advantages
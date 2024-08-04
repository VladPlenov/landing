import React from "react";
import site1 from '../img/portfolio/site1.png'
import site2 from '../img/portfolio/site2.png'
import site3 from '../img/portfolio/site3.png'
import site4 from '../img/portfolio/site4.png'

function Portfolio()
{
    return(
        <div className="portfolio">
            <div className="container">
                <h2 className="section-title">Наши работы</h2>
                <table className="portfolio-table">
                    <tr className="portfolio-row">
                        <td className="portfolio-cell cell1"></td>
                        <td className="portfolio-cell cell2"></td>
                    </tr>
                    <tr className="portfolio-row">
                        <td className="portfolio-cell cell3"></td>
                        <td className="portfolio-cell cell4"></td>
                    </tr>
                </table>
                <div className="portfolio-mobile">
                    <img src={site1} className="portfolio-mobile-cell" />
                    <img src={site2} className="portfolio-mobile-cell" />
                    <img src={site3} className="portfolio-mobile-cell" />
                    <img src={site4} className="portfolio-mobile-cell" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio 
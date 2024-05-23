import React from 'react'
import style from './ForecastHome.module.scss'

function ForecastHome({forecast}) {


  return (
    <div className={style.container}>
        <div className={style.boxContainer}>
            {forecast?.map((day, index) => {
                        const time = day.dt_txt.split(" ")[1];
                        const hour = time.split(":")[0]; 
                            return(
                                <div key={index} className={style.box}>
                                    <h2>{hour}hs</h2>
                                    <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="icono" />
                                    <p>Temp: <span>{Number((day.main.temp_max + day.main.temp_max) / 2).toFixed(1)}°C</span></p>
                                    <p>Nubosidad: <span>{day.clouds.all}%</span></p>
                                </div>
                            );
                        })}
        </div>
    </div>
  )
}

export default ForecastHome

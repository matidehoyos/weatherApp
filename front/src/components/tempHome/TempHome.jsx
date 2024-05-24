import { useEffect, useState } from 'react';
import style from './TempHome.module.scss'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';


function TempHome({temp}) {

  let iconUrl;
  if (temp && temp.weather && temp.weather[0]) {
    iconUrl = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  }
   
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const day = days[now.getDay()];
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        setCurrentDateTime(`${day}, ${hours}:${minutes}hs`);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className={style.container}>
          {
              temp && <div className={style.tempBox}>
                      <div className={style.ubicacion}>
                          <h3 className={style.city}><FaMapMarkerAlt className={style.cityIcon} />{temp.name}, {temp?.sys?.country}. </h3> 
                          <p className={style.fecha}><FaRegClock className={style.fechaIcon} />{currentDateTime}</p> 
                      </div>
                      <div className={style.informacion}>
                        <div className={style.first}>
                          <div className={style.info1}>
                              <img src={iconUrl} alt="icon del tiempo" />
                              <p>{temp?.weather[0]?.description}</p>
                          </div>
                          <div className={style.temperatura}>
                              <p className={style.actual}>Actual:</p>
                              <p className={style.temperature}>{Number(temp.main.temp.toFixed(1))}°<span>c</span></p>
                              <p className={style.termica}>Térmica: <span>{temp.main.feels_like}</span>°c</p>   
                          </div>
                        </div>
                         <div className={style.detalles}>
                            <p>Viento: <span className={style.deta}>{Number(temp.wind.speed.toFixed(1))}Km/h</span></p>
                            <p>Hum.: <span className={style.deta}>{temp.main.humidity}%</span></p>
                            <p>Nub.: <span className={style.deta}>{temp.clouds.all}%</span></p>
                            <p>Visib.: <span className={style.deta}>{temp.visibility}m</span></p>
                            <p>Pres.: <span className={style.deta}>{temp.main.pressure}hp</span></p>
                        </div>
                      </div>
              </div>
          } 
          </div>
)}

export default TempHome

import React, { useState } from 'react';
import style from './Home.module.scss'
import TempHome from '../tempHome/TempHome';
import ExtendidoHome from '../extendidoHome/ExtendidoHome';
import ForecastHome from '../forecastHome/ForecastHome';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Home({temp, ext}) {
    const [filtro, setFiltro] = useState('dias'); 
    const today = new Date().toISOString().split('T')[0];
    const todayForecast = ext?.list?.filter(item => item.dt_txt.startsWith(today));
    
    const cambiarFiltro = (nuevoFiltro) => {
        setFiltro(nuevoFiltro);
    }

  return (
    <div className={style.container}>

        {
            temp ?
            <div className={style.subcontainer}>
                        <div className={style.current}>
                            <TempHome temp={temp} />
                        </div>
                        <div className={style.extendido}>
                            <button onClick={() => cambiarFiltro('dias')}>Por días</button>
                            <button onClick={() => cambiarFiltro('horas')}>Por horas</button>
                            {filtro === 'dias' ? <ExtendidoHome ext={ext} /> : <ForecastHome forecast={todayForecast}/>}
                            <FaLongArrowAltRight className={style.arrow} />
                        </div>
            </div>    
            : null
        }
    </div>
  )
}

export default Home;

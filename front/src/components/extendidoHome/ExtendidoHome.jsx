import style from './ExtendidoHome.module.scss'

function ExtendidoHome({ext}) {
    const today = new Date().toISOString().split('T')[0];
    const todayForecast = ext?.list?.filter(item => item.dt_txt.startsWith(today));
    const futureForecast = ext?.list?.filter(item => {
        const forecastDate = item.dt_txt.split(' ')[0];
        return forecastDate > today;
      });
    
      const groupedByDay = futureForecast?.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0]; 
        if (!acc[date]) {
          acc[date] = {
            items: [], 
            icon: item.weather[0].icon,
          };
        }
        acc[date].items.push(item); 
        return acc;
      }, {});
      
      let dailyTemps;

      if(groupedByDay){
            dailyTemps = Object.entries(groupedByDay).map(([date, { items, icon }]) => {
            const temps = items.map(item => item.main.temp);
            return {
            date,
            minTemp: Math.min(...temps),
            maxTemp: Math.max(...temps),
            icon, 
            };
        });
      }
      
      

    function formatearFecha(fecha) {
        const fechaObj = new Date(fecha);
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const nombreDia = dias[fechaObj.getDay()];
        const dia = fechaObj.getDate().toString().padStart(2, '0');
        const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
        return `${nombreDia} ${dia}`;
      }
        
    return (
    <div className={style.container}>
                <div className={style.boxContainer}>
                {dailyTemps?.map((day, index) => {
                      const iconUrl = `http://openweathermap.org/img/wn/${day.icon}.png`;
                    const fechaFormateada = formatearFecha(day.date);
                    return(
                        <div key={index} className={style.box}>
                            <h2>{fechaFormateada}</h2>
                            <div className={style.data} >
                                <img src={iconUrl} alt="Icono del clima" />
                                <div className={style.dataTemp} >
                                    <p>Max <span>{Number(day.maxTemp).toFixed(0)}°c</span></p>
                                    <p>Min <span>{Number(day.minTemp).toFixed(0)}°c</span></p>
                                </div>
                            </div>
                        </div>  
                    );
                    })}
                </div>
    </div> 
  )
}

export default ExtendidoHome;


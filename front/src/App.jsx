import { useEffect, useState } from 'react'
import './App.scss'
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home';
import axios from 'axios';

function App() {
  const [currentWeather, setCurrent] = useState(null);
  const [forecastWeather, setForecast] = useState({});
  const [homeWeather, setHomeWeather] = useState(null);
  const [homeExt, setHomeExt] = useState(null);
  const city = 'buenos aires';

  const bringData = async () => {
    const response = await axios(`weatherapp-production-2bb8.up.railway.app/${city}`);
    setHomeWeather(response.data);
    const responseExt = await axios(`weatherapp-production-2bb8.up.railway.app/extendido/${city}`);
    setHomeExt(responseExt.data);
  }

  useEffect(() => {
    bringData();
  }, []);

  return (
    <>
      <NavBar setCurrent={setCurrent} setForecast={setForecast} />
      {
        currentWeather ?
        <Home temp={currentWeather} ext={forecastWeather}/>
        : <Home temp={homeWeather} ext={homeExt}/>
      }
    </>
  )
}

export default App

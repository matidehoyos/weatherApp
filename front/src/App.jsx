import { useEffect, useState } from 'react'
import './App.scss'
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home';
import axios from 'axios';
import weatherProvider from './provider/weatherProvider';
axios.defaults.baseURL = 'https://weatherapp-production-2bb8.up.railway.app'


function App() {
  const [currentWeather, setCurrent] = useState(null);
  const [forecastWeather, setForecast] = useState({});
  const [homeWeather, setHomeWeather] = useState(null);
  const [homeExt, setHomeExt] = useState(null);
  const city = 'buenos aires';

  const bringData = async () => {
    const response = await weatherProvider.getCurrentWeather(city);
    setHomeWeather(response);
    const responseExt = await weatherProvider.getExtendido(city);
    setHomeExt(responseExt);
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

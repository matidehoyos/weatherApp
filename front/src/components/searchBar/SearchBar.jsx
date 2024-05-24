import React, { useState } from 'react'
import axios from 'axios'
import style from './SearchBar.module.scss'
import { FaSearch } from 'react-icons/fa';
import weatherProvider from '../../provider/weatherProvider';


const SearchBar = ({setCurrent, setForecast}) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const currentWeather = await weatherProvider.getCurrentWeather(city);
      setCurrent(currentWeather);
      const foreinWeather = await weatherProvider.getExtendido(city);
      setForecast(foreinWeather)
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={style.container}>
      <div>
        <input type="text" value={city} onChange={handleInputChange} onBlur={handleSearch} placeholder="Buscar: Ej Londres" />
        <button onClick={handleSearch}><FaSearch /></button>
      </div>
    </div>
  );
};

export default SearchBar;

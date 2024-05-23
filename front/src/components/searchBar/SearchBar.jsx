import React, { useState } from 'react'
import axios from 'axios'
import style from './SearchBar.module.scss'
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({setCurrent, setForecast}) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const currentWeather = await axios.get(`weatherapp-production-2bb8.up.railway.app/${city}`);
      setCurrent(currentWeather.data);
      const foreinWeather = await axios.get(`weatherapp-production-2bb8.up.railway.app/extendido/${city}`);
      setForecast(foreinWeather.data)
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={style.container}>
      <label>Busca el clima en tu ciudad:</label>
      <input type="text" value={city} onChange={handleInputChange} onBlur={handleSearch} placeholder="Ej. Londres" />
      <button onClick={handleSearch}><FaSearch /></button>
    </div>
  );
};

export default SearchBar;

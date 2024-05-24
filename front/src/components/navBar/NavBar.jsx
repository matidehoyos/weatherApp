import SearchBar from '../searchBar/SearchBar';
import style from './NavBar.module.scss';


function NavBar({setCurrent, setForecast}) {
  return (
    <div className={style.container}>

            <div className={style.logo}>
                <img src="./sun.png" alt="logo" />
                <h2>Tu app del clima</h2>
            </div>

            <div className={style.searchBar}>
                <SearchBar setCurrent={setCurrent} setForecast={setForecast} />
            </div>

    </div>
  )
}

export default NavBar

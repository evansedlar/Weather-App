
import './App.css'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import Forecast from './components/Forecast'
import Daily from './components/Daily'
import RecentSearches from './components/RecentlySearched'

function App() {

  const [weather, setCurrentWeather] = useState(false)
  const [location, setLocation] = useState(false)
  const [searchBarActive, setSearchBarActive] = useState(false)
  const [searchedLocation, setSearchedLocation] = useState([])

  

  useEffect(() => {
    let url = `https://api.weatherapi.com/v1/current.json?key=e28bab82914846479dd193900230905&q=`
    url = `${url}${searchedLocation.length > 0 ? searchedLocation.join(',') : "Houston"}`
    
    //ternary operator is like an if/else statement before the ? is the "if" part and the : is the else part

    fetch(url).then(data => data.json()).then(data => {
      setCurrentWeather(data.current)
      setLocation(data.location)
    })
  }, [searchedLocation])


  return (
    <div className="App">

      <Search active={searchBarActive} selectedLocation={(lat, lon) => {
        setSearchedLocation([lat, lon])
      }} />

      <RecentSearches />

      <div className='App-inner'>
        {
          weather ?
            <Main
              location={location}
              temperature={weather.temp_f}
              condition={weather.condition}
              onSearchButtonClick={() => {
                setSearchBarActive(true)
              }}
            /> : "Loading...."
        }
      </div>

      <Forecast searchedLocation={searchedLocation}/>
      <Daily searchedLocation={searchedLocation} />

    </div>

  );
}



export default App

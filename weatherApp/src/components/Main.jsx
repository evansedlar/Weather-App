import React from 'react'
import searchIcon from '../assets/search.svg'

function Main({ condition, temperature, location, onSearchButtonClick }) {


  return <div className='main'>

    <button className='btn-search' onClick={onSearchButtonClick}>
      <img src={searchIcon} alt="Search" />
    </button>

    <div className="temperature">{temperature}°F</div>

    <div className="location-info">

      <div className='location'>
        <div className='condition'>{condition.text}</div>
        <div className='location-title'>{location.name}, {location.country}</div>
      </div>

      <div className='icon'>
        <img src={condition.icon} alt="Weather icon" />
      </div>

    </div>
  </div>
}
export default Main
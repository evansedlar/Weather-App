
import React, { useEffect, useState } from 'react'

function Forecast(props) {

    const [hourlyData, setHourlyData] = useState([])




    useEffect(() => {
        let url = `https://api.weatherapi.com/v1/forecast.json?key=e28bab82914846479dd193900230905&q=${props.searchedLocation.join(',')}&days=1&aqi=no&alerts=no`

        fetch(url)
            .then((response) => response.json())
            .then((data) => setHourlyData(data.forecast.forecastday[0].hour))
    }, [props.searchedLocation])

    console.log(hourlyData)


    return (
        <div className='forecastOuter'>

                <h1 className='forecastText'>Hourly Forecast</h1>

            <div className="forecast">

                <ul className='forecastUL'>

                    {hourlyData.map((hour) => {
                        return (
                            <li key={hour.time}>
                                <div>{new Date(hour.time).toLocaleTimeString().replace(":00:00", "")}</div>
                                <img src={hour.condition.icon} />
                                <div>{hour.temp_f}°F</div>
                                <div>Rain: {hour.chance_of_rain}%</div>
                            </li>
                        )
                    })}

                </ul>

            </div>

        </div>
    )
}

export default Forecast
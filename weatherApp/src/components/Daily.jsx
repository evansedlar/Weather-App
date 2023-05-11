import React, { useEffect, useState } from 'react'

function Daily(props) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        let url = `https://api.weatherapi.com/v1/forecast.json?key=e28bab82914846479dd193900230905&q=${props.searchedLocation.join(',')}&days=10&aqi=no&alerts=no`

        fetch(url)
            .then(res => res.json())
            .then(data => setDailyData(data.forecast.forecastday))


    }, [props.searchedLocation])

    return (
        <div className='forecastOuter'>

            <h1 className='forecastText'>Daily Forecast</h1>

            <div className='forecast'>

                <ul className='forecastUL'>


                    {dailyData.map((dayData, index) => (
                        <li key={index}>
                            <img src={dayData.day.condition.icon} alt="" className="" />
                            <p>High: {dayData.day.maxtemp_f}</p>
                            <p>Low: {dayData.day.mintemp_f}</p>
                            <h3>{new Date(dayData.date).toLocaleDateString().replace("/2023", "")}</h3>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default Daily


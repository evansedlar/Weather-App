import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../assets/closeIcon.png'

function Search({ active, selectedLocation }) {


    // const searchArray = useSelector((state) => state.recentSearches)
    const searchTerm = useSelector((state) => state.searchTerm)
    const dispatch = useDispatch()
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        if (searchTerm !== "") {
            fetch(`https://api.weatherapi.com/v1/search.json?key=e28bab82914846479dd193900230905&q=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                setSuggestions(data)
            })
        } else {
            setSuggestions([])
        }
    }, [searchTerm])




    return (
        <div className={`search-bar ${active ? 'active' : ""}`}>

            <input onChange={(e) => {
                dispatch({ type: "UPDATE_SEARCH_TERM", payload: e.target.value })
            }} 
            type="text" 
            className="search-input" 
            placeholder="Search your location..." 
            value={searchTerm}
            />

            <button className="btn-search btn-search-close">
                <img src={closeIcon} alt="Close search" />
            </button>

            {
                suggestions.length > 0 &&
                <div className="suggestions">
                    <ul>
                        {
                            suggestions.map(s => <Suggestion
                                key={s.id}
                                region={s.region}
                                id={s.id}
                                title={s.name}
                                onPlaceClick={() => {
                                    selectedLocation(s.lat, s.lon)
                                    setSuggestions([])
                                }}
                            />)
                        }
                    </ul>
                </div>
            }

        </div>
    )
}


function Suggestion({ id, title, region, onPlaceClick }) {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch({ type: 'ADD_RECENT_SEARCH', payload: title });
        onPlaceClick();
    }

    return <li>
        <button onClick={handleClick}>{title}, <small>{region}</small></button>
    </li>
}

export default Search
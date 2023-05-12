import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function RecentSearches() {

    const recentSearches = useSelector((state) => state.recentSearches)
    const dispatch = useDispatch()

    function handleSearchClick(searchTerm) {
        dispatch({ type: 'UPDATE_SEARCH_TERM', payload: searchTerm })
    }

    return (
        <div className='recentlySearched'>

            <h2 className='recentTitle'>Recent Searches</h2>

            <div className='recentInner'>


                <ul className='recentUL'>

                    {recentSearches.map((searchTerm) => (
                        <li key={searchTerm} onClick={() => handleSearchClick(searchTerm)}>
                            {searchTerm}
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    )
}


export default RecentSearches
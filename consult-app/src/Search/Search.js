import React from 'react';
import './Search.css';

export default function Search() {
    return (
        <div className="search">

            <form className="search-container"> 
                <h2>Search for a doctor</h2>

                {/* make this a pulldown menu? */}
                <div className="search-specialty"> 
                    <input placeholder="Search for a specialty" />
                </div>

                <div className="search-location"> 
                    <input placeholder="Located in..." />
                </div>

                <button type="submit">Search Doctors</button>
            </form>
        </div>
    )
}

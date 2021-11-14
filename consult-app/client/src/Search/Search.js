import React, {useState} from 'react';
import './Search.css';
import DoctorList from '../DoctorList/DoctorList';
// how to get the doctors list data in here?

export default function Search() {
    const [wordEntered, setWordEntered] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    console.log(DoctorList);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = DoctorList(props).filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
        setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">

            <form className="search-container"> 
                <h2>Search for a doctor</h2>

                {/* make this a pulldown menu? */}
                <div className="search-specialty"> 
                    <input id="search-term" type="text" placeholder="Search for a specialty or drug" 
                        value={wordEntered}
                        onClick={handleFilter}
                    />
                </div>

                <button type="submit" onClick={clearInput}>Search Doctors</button>
            </form>

            {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <a className="dataItem" href={value.link} >
                        <p>{value.title} </p>
                    </a>
                    );
                })}
                </div>
            )}

        </div>
    )
}
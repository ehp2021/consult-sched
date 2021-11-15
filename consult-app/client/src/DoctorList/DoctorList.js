import React, {useState, useEffect} from 'react';
import './DoctorList.css';
import Doctor from '../Doctor/Doctor';
import axios from 'axios';

export default function DoctorList(props) {
    const [allDoctors, setAllDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    
    useEffect(()=> {
            axios.get('https://ep-doctor-api.herokuapp.com/doctors')
            .then(response => {
            setAllDoctors(response.data)
        })
    },[]);

    function showDoctors(arr) {
        const firstNum = Math.floor(Math.random()*20);
        const lastNum = firstNum + Math.floor(Math.random()*20);
        return arr.slice(firstNum, lastNum).map(doctor => {
            return (
                <Doctor key={doctor.id} doctor={doctor}/>
            )
        })
    }
    
    function filterDoctors(arr, searchTerm) {

        //filter doctors based on input value??
        return arr.filter((searchTerm)=> {
            //filter has to have a RETURN
            // if(arr.includes(searchTerm.toLowerCase())) {
                return arr.map(doctor => {
                    return <Doctor key={doctor} doctor={doctor} />
                })
            // }
        })
    }

    return(
        <div className="doctor-list" id="list">
            <div className="search-box"> 
            <h2>Search For A Doctor By Drug Expertise:</h2>
                <input type="text" placeholder="Search for a drug" 
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button id="search-button" onClick={filterDoctors} >Search</button>
            </div>
            <div className="filtered-doctors"> 
                {searchTerm.length > 5 ? filterDoctors(allDoctors) : showDoctors(allDoctors)}
            </div>
            

            <div className="filtered-doctors">
            {/* {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <a className="dataItem" href={value.link} >
                        <p>{value.title} </p>
                    </a>
                    );
                })}
                </div>
            )} */}
            </div>
        </div>
    )


}
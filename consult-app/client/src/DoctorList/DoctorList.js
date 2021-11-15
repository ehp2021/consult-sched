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
    
    function filterDoctors(arr) {
        console.log("hi")
        console.log(arr[9]);
        console.log(arr.doctor);
        //filter doctors based on input value??
        return arr.filter(function (e) {
                return arr.drug_list.includes(searchTerm.toLowerCase()) 
                    ( 
                        <Doctor key={arr.doctor.id} doctor={arr.doctor} />
                    )
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
            <div className="filtered-doctors-list"> 
                {searchTerm.length ? filterDoctors(allDoctors) : showDoctors(allDoctors)}
            </div>
        </div>
    )


}
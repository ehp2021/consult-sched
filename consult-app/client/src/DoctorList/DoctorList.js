import React, {useState, useEffect} from 'react';
import './DoctorList.css';
import Doctor from '../Doctor/Doctor';
import axios from 'axios';

export default function DoctorList(props) {
    const [allDoctors, setAllDoctors] = useState([]);
    
    useEffect(()=> {
            axios.get('https://ep-doctor-api.herokuapp.com/doctors')
            .then(response => {
            setAllDoctors(response.data)
        })
    },[]);

    function showDoctors(arr) {
        return arr.map(doctor => {
            return (
                <Doctor doctor={doctor}/>
            )
        })
    }


    return(
        <div className="doctor-list" id="list">
            {showDoctors(allDoctors)}
        </div>
    )


}
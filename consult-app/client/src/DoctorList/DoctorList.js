import React, {useState, useEffect} from 'react';
import './DoctorList.css';
import Doctor from '../Doctor/Doctor';
import axios from 'axios';

export default function DoctorList(props) {
    const [allDoctors, setAllDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    
    useEffect(()=> {
            axios.get('https://ep-doctor-api.herokuapp.com/doctors')
            .then(response => {
            setAllDoctors(response.data)
        })
    },[]);

    function showDoctors(arr) {
        return arr.map(doctor => {
            return (
                <Doctor key={doctor.id} doctor={doctor}/>
            )
        })
    }

    function filterDoctors() {
        const newArr = [...allDoctors];
        const searchWord = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
        
        const resultArr = [];
        //filter doctors based on input value
        for(let i=0;i<newArr.length; i++) {
            if(newArr[i].drug_list.includes(searchWord)) {
                resultArr.push(<Doctor key={newArr[i].id} doctor={newArr[i]} />)
            }
        }
        return resultArr;
    }

    return(
        <div className="doctor-list" id="list">
            <form onSubmit={ e =>
                {
                    e.preventDefault();
                    filterDoctors();
                }}>
                <div className="search-box"> 
                    
                    <h2>Search For A Doctor By Drug Expertise:</h2>
                    
                    <input type="text" placeholder="Search for a drug" 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button id="search-button">Search</button>
                </div>

                <div className="filtered-doctors-list"> 
                    {searchTerm.length ? filterDoctors(allDoctors, searchTerm) : showDoctors(allDoctors)}
                </div>
            </form>
        </div>
    )


}
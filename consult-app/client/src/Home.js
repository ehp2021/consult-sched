import React, { useContext } from 'react';
import './Home.css';
import DoctorList from './DoctorList/DoctorList';
import AppointmentList from './AppointmentList';

export default function Home() {

    return (
        <div className="home-container">
            <div className="home-my-appts"> 
                <AppointmentList />
            </div>
            <div className="home-doctor-and-search">
                <DoctorList />
            </div>
        </div>
    )
}

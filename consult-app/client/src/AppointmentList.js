import {DoctorContext} from './Contexts/DoctorContext';
import {useContext} from 'react';
import './AppointmentList.css';

export default function AppointmentList() {
    const {appointmentList} = useContext(DoctorContext);
    
    return (
        <div className="appointment-container">
            <h2>My Appointment List:</h2>
            <div className="appointment-booked">
                {appointmentList.map((doctor) => (
                    <div>Dr. {doctor.name} {doctor.last_name}</div>
                ))}

            </div>
            
        </div>
    )
}

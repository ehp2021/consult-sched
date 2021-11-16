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
                    <div className="appointment-doctor-info" key={doctor.id}>
                        You are booked with Dr. {doctor.name} {doctor.last_name} 
                        
                        {/* At {doctor.availability[0]} */}
                        
                        To discuss any of the following: 
                        {doctor.drug_1}, {doctor.drug_2}, {doctor.drug_3}, {doctor.drug_4}</div>
                ))}

            </div>
            
        </div>
    )
}

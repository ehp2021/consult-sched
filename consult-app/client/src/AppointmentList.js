import {DoctorContext} from './Contexts/DoctorContext';
import {useContext} from 'react';
import './AppointmentList.css';
import {useAuth} from './Contexts/Authcontext';


export default function AppointmentList() {
    const {appointmentList} = useContext(DoctorContext);
    const {removeDoctorFromApptList} = useContext(DoctorContext);
    const { currentUser} = useAuth();

    return (
        <div className="appointment-container">
            <h2>My Appointment List:</h2>
            <div>Once the doctor has confirmed, you will receive an appointment confirmation email to: <strong>{currentUser.email}</strong></div>
            <div className="appointment-booked">
                {appointmentList.map((doctor) => (
                    <div className="appointment-doctor-info" key={doctor.id}>
                        <div className="appointment-doctor-name"> 
                            You are booked with <strong>Dr. {doctor.name} {doctor.last_name}</strong>
                        </div> 
                        <div className="appointment-doctor-specialty">
                            <strong>Main Specialty:</strong> {doctor.specialty_1}
                        </div>                       

                        <div className="appointment-doctor-drugs"> To discuss any of the following: 
                        {doctor.drug_1}, {doctor.drug_2}, {doctor.drug_3}, {doctor.drug_4}
                        </div>
                        <button className="delete-button"
                            onClick={() => removeDoctorFromApptList(doctor.id)}
                        >x
                        </button>
                    </div>
                ))}

            </div>
            
        </div>
    )
}

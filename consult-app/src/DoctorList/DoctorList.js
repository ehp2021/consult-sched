import './DoctorList.css';
import Doctor from '../Doctor/Doctor';

export default function DoctorList(props) {
    console.log(props);
    return(
        <div className="doctor-list" id="list">
            <h1>DoctorList is working</h1>
            {/* {
                props.doctors.map((doctor) => {
                    return <Doctor item={doctor} key={doctor._id}
                    />
                })
            } */}
        </div>
    )


}
import './Doctor.css';

export default function Doctor(props) {
  // console.log(props.doctor.name);
  //https://ep-doctor-api.herokuapp.com/doctors

  const { name, last_name, photo, specialty_1, specialty_2, 
    medical_school, years_in_practice, practice_name,
    drug_1, drug_2, drug_3, drug_4} = props.doctor;

      return (
        <div className="doctor-card">
            <div className="doctor-bio-left"> 
              <div className="doctor-bio-left-photo"> 
                <img src={photo} alt="" key={props.id} />
              </div>
      
              <div className="doctor-bio-left-info"> 
                <h2>Dr. {name} {last_name}, MD</h2>
                <div>Main Specialty: {specialty_1}</div>
                <div>Secondary Specialty:{specialty_2}</div>
                <div>Medical School:{medical_school}</div>
                <div>Years In Practice: {years_in_practice}</div>
                <div>Current Practice/Hospital: {practice_name}</div>
                <div>Doctor is a high prescriber and can discuss:</div>
                <div className="drug-list">
                  <div>{drug_1}</div>
                  <div>{drug_2}</div>
                  <div>{drug_3}</div>
                  <div>{drug_4}</div>
                </div>
              </div>
                
            </div>

            <div className="doctor-sched-right"> 
            doctor's schedule here
            </div>
        </div>
      )
    }
 
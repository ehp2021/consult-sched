import './Doctor.css';

export default function Doctor(props) {
  // const { name, specialty, bio, drug } = props.item;

      return (
        <div className="doctor-card" style={{height: "350px"}}>
            <div className="doctor-bio-left"> 
            doctor's bio here
            </div>

            <div className="doctor-sched-right"> 
            doctor's schedule here
            </div>
        </div>
      )
    }
 
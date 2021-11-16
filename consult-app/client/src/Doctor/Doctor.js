import React, {useContext} from 'react';
import {DoctorContext} from '../Contexts/DoctorContext';
import './Doctor.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useAuth} from '../Contexts/Authcontext';

export default function Doctor(props) {
  // console.log(props, "props");
  const { name, last_name, photo, specialty_1, specialty_2, 
    medical_school, years_in_practice, practice_name,
    drug_list, availability} = props.doctor;

    // console.log(availability[0].Monday, "monday avail");
  
    const { currentUser} = useAuth();
    const { addDoctorToApptList, appointmentList } = useContext(DoctorContext);

    //can't add a doctor appointment if already have one
    let storedDoctor = appointmentList.find(o => o.id === props.doctor.id);
    const appointmentListDisabled = storedDoctor ? true : false;

      return (
        <div className="doctor-card">
            <div className="doctor-bio-left"> 
              <div className="doctor-bio-left-photo"> 
                <img src={photo} alt="" key={props.id} />
              </div>
      
              <div className="doctor-bio-left-info"> 
                <div className="doctor-name-heading"><h2>Dr. {name} {last_name}, MD</h2></div>
                <div><strong>Main Specialty:</strong> {specialty_1}</div>
                <div><strong>Secondary Specialty:</strong> {specialty_2 ? specialty_2 : "Not Available"}</div>
                <div><strong>Medical School:</strong> {medical_school}</div>
                <div><strong>Years In Practice:</strong> {years_in_practice}</div>
                <div><strong>Current Practice/Hospital:</strong> {practice_name}</div>
                <div className="drug-list-title"><strong>Doctor is a high prescriber of and can discuss: </strong></div>
                  <div className="drug-list">
                    <div>{drug_list.join(", ")}</div>
                  </div>
              </div>
                
            </div>

            <div className="doctor-sched-right"> 
                <div className="doctor-name-heading2"><h2>Dr. {last_name}'s Availability</h2></div>
                <div className="doctor-sched-times"> 

                <TableContainer> 
                  <Table>
                    <TableHead> 
                      <TableRow>
                      
                        <TableCell align="center">Monday</TableCell>
                        <TableCell align="center">Tuesday</TableCell>
                        <TableCell align="center">Wednesday</TableCell>
                        <TableCell align="center">Thursday</TableCell>
                        <TableCell align="center">Friday</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      
                      <TableCell align="center">
                        <button 
                          className="monday-button" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                          >
                          {(availability[0].Monday && availability[0].Monday[0]) ? availability[0].Monday[0][0] : "Not Available"}
                        </button>
                        <button 
                          className="monday-button-2" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                          >
                          {(availability[0].Monday && availability[0].Monday[1]) ? availability[0].Monday[1][0] : "Not Available"}
                        </button>
                      </TableCell>                    
                      <TableCell align="center">
                        <button 
                          className="tuesday-button" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Tuesday && availability[0].Tuesday[0])  ? availability[0].Tuesday[0][0]: "Not Available"}
                        </button>
                        <button 
                          className="tuesday-button-2" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Tuesday && availability[0].Tuesday[1]) ? availability[0].Tuesday[1][0]: "Not Available"}
                        </button>
                      </TableCell>                    
                      <TableCell align="center">
                        <button 
                          className="wednesday-button" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Wednesday && availability[0].Wednesday[0]) ? availability[0].Wednesday[0][0] : "Not Available"}
                        </button>
                        <button 
                          className="wednesday-button-2" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Wednesday && availability[0].Wednesday[1]) ? availability[0].Wednesday[1][0] : "Not Available"}
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <button 
                          className="thursday-button" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Thursday && availability[0].Thursday[0]) ? availability[0].Thursday[0][0] : "Not Available"}
                        </button>
                        <button 
                          className="thursday-button-2" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Thursday && availability[0].Thursday[1]) ? availability[0].Thursday[1][0] : "Not Available"}
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <button 
                          className="friday-button" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Friday && availability[0].Friday[0]) ? availability[0].Friday[0][0] : "Not Available"}
                        </button>
                        <button 
                          className="friday-button-2" disabled={appointmentListDisabled} 
                          onClick={() => addDoctorToApptList(props.doctor)}
                        >
                          {(availability[0].Friday && availability[0].Friday[1]) ? availability[0].Friday[1][0] : "Not Available"}
                        </button>
                      </TableCell>  

                    </TableBody>
                  </Table> 
                </TableContainer>

                </div>
            </div>
        </div>
      )
    }
 
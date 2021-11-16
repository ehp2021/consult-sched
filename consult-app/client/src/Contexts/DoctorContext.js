import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    appointmentList: localStorage.getItem('appointmentList') 
        ? JSON.parse(localStorage.getItem('appointmentList')) 
        : [],
    appointmentDone: localStorage.getItem('appointmentDone') 
        ? JSON.parse(localStorage.getItem('appointmentDone')) 
        : []
};

// create context 
export const DoctorContext = createContext(initialState);

//provider components 
export const DoctorProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //use local storage to store appointmentlist
    //need to json.stringify bc local storage has to be a string
    useEffect(() => {
        localStorage.setItem('appointmentList', JSON.stringify(state.appointmentList));
        localStorage.setItem('appointmentDone', JSON.stringify(state.appointmentDone));
    },[state]);

    //actions
    const addDoctorToApptList = doctor => {
        dispatch({type: "ADD_DOCTOR_TO_LIST", payload: doctor});
    }

    return (
        <DoctorContext.Provider value={{
                appointmentList: state.appointmentList, 
                appointmentDone: state.appointmentDone, 
                addDoctorToApptList
        }}> 
            {props.children}
        </DoctorContext.Provider>
    );
};
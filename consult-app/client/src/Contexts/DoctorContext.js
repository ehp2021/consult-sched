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

    //use local storage to store appointment list
    //need to json.stringify bc local storage has to be a string
    useEffect(() => {
        localStorage.setItem('appointmentList', JSON.stringify(state.appointmentList));
        localStorage.setItem('appointmentDone', JSON.stringify(state.appointmentDone));
    },[state]);

    //actions
    const addDoctorToApptList = doctor => {
        dispatch({type: "ADD_DOCTOR_TO_LIST", payload: doctor});
    }

    const removeDoctorFromApptList = (id) => {
        dispatch({type: "REMOVE_DOCTOR_FROM_LIST", payload: id});
    }

    return (
        <DoctorContext.Provider value={{
                appointmentList: state.appointmentList, 
                appointmentDone: state.appointmentDone, 
                addDoctorToApptList,
                removeDoctorFromApptList
        }}> 
            {props.children}
        </DoctorContext.Provider>
    );
};
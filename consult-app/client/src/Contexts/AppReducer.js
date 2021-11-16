//build a store to holds hte application state data,
// reducer returns some state data, how your state is transferred into the next state,
// tells our store what to do with the data when it happens 

export default (state, action) => {
    switch(action.type) {
        case "ADD_DOCTOR_TO_LIST":
            return {
                ...state,
                appointmentList: [action.payload, ...state.appointmentList]
            };
        default: 
           return state;
    };
};
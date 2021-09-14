import axios from 'axios'

//ACTION TYPES

 const SET_FORM_STATE = "SET_FORM_STATE"

//ACTION CREATORS

export const setFormState = (formState) => {
    return {
        type: SET_FORM_STATE,
        formState
    }
}

//THUNK CREATORS

export const fetchFormState = () => {
    return async (dispatch) => { 
        try { 
            const {data} = await axios.get('/form-state')
            dispatch(setFormState(data))
        } catch (error) {
            console.error(error)
        }
    }
}

// REDUCER
export default function formStateReducer(formState = [], action){
    switch (action.type) {
        case SET_FORM_STATE:
            return action.formState
        default:
            return formState
    }
}
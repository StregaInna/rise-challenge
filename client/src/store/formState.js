import axios from 'axios'

//ACTION TYPES

 const SET_FORM_STATE = "SET_FORM_STATE"

//ACTION CREATORS

export const setFormState = (formState, blockCount) => {
    if (!formState.length){
        for(let i = 0; i < blockCount; i++){
            formState.push({
                answered: false,
                selectedAnswer: '',
                isCorrect: null
            })
        }
    }//If this is a new user to this course, the database will supply an empty array as for state. 
    //In that case will are populating the array with the correct number of objects representing an unansered state.
    //If we were using a real database we might have some sort of qustion ID# with each question, 
    //  in that case our form state might be an object with those ID#s as keys instead of an array.
    //  That could prevent some bugs that might come up if a user were continue a course that has been updated since they started.
    return {
        type: SET_FORM_STATE,
        formState
    }
}

//THUNK CREATORS

export const fetchFormState = (blockCount) => {
    return async (dispatch) => { 
        try { 
            const {data} = await axios.get('/form-state')
            dispatch(setFormState(data, blockCount))
        } catch (error) {
            console.error(error)
        }
    }
}

export const updateFormState = (formState, objectState, objectIndex) => {
    formState[objectIndex] = objectState
    return async (dispatch) => {
        try {
            console.log('dispatching:')
            console.dir(formState)
            const {data} = await axios.put('/update-form-state', formState)
            dispatch(setFormState(data, formState.length))

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
import axios from 'axios'

//ACTION TYPES

const SET_KNOWLEDGE_CHECK_BLOCKS = "SET_KNOWLEDGE_CHECK_BLOCKS"

//ACTION CREATORS

export const setKnowledgeCheckBlocks = (knowledgeCheckBlocks) => {
    return {
        type: SET_KNOWLEDGE_CHECK_BLOCKS,
        knowledgeCheckBlocks
    }
}

//THUNK CREATORS

export const fetchKnowledgeCheckBlocks = () => {
    return async (dispatch) => { 
        try { 
            const {data} = await axios.get('/knowledge-check-blocks')
            dispatch(setKnowledgeCheckBlocks(data))
        } catch (error) {
            console.error(error)
        }
    }
}

// REDUCER
export default function knowledgeCheckBlocksReducer(knowledgeCheckBlocks = [], action){
    switch (action.type) {
        case SET_KNOWLEDGE_CHECK_BLOCKS:
            return action.knowledgeCheckBlocks
        default:
            return knowledgeCheckBlocks
    }
}
import { combineReducers } from 'redux'

import knowledgeCheckBlocksReducer from './knowledgeCheckBlocks'
import formStateReducer from './formState'

const rootReducer = combineReducers({
    knowledgeCheckBlocks: knowledgeCheckBlocksReducer,
    formState: formStateReducer
})

export default rootReducer

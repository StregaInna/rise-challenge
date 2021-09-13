import { combineReducers } from 'redux'

import knowledgeCheckBlocksReducer from './knowledgeCheckBlocks'

const rootReducer = combineReducers({
    knowledgeCheckBlocks: knowledgeCheckBlocksReducer
})

export default rootReducer

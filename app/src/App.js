import React from 'react'
import { fetchKnowledgeCheckBlocks } from './store/knowledgeCheckBlocks'
import {connect } from 'react-redux'

class App extends React.Component {


  async componentDidMount () {
    this.props.fetchKnowledgeCheckBlocks()
    console.dir(this.props.state)  
  }
  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  fetchKnowledgeCheckBlocks: () => dispatch(fetchKnowledgeCheckBlocks)
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

import React from 'react'
import { fetchKnowledgeCheckBlocks } from './store/knowledgeCheckBlocks'
import {connect } from 'react-redux'
import KnowledgeCheckForm from './components/KnowledgeCheckForm'

class App extends React.Component {


  async componentDidMount () {
    await this.props.fetchKnowledgeCheckBlocks()
    console.dir(this.props.state)  
  }
  render () {
    return (
      <div>
        {(this.props.state.knowledgeCheckBlocks[0]) ? (
          <div>
            {this.props.state.knowledgeCheckBlocks.map((blockObject) => {
              return (
                <div key={blockObject.question.text} >
                  <KnowledgeCheckForm blockObject={blockObject} />
                </div>
                )})
            }
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  fetchKnowledgeCheckBlocks: () => dispatch(fetchKnowledgeCheckBlocks())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

import React from 'react'
import { updateFormState } from '../store/formState'
import { connect } from 'react-redux'
import { CgCheckO, CgCloseO, CgRedo } from 'react-icons/cg'

class FeedBackCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isCorrect: null,
            feedBack: '',

        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        const formState = this.props.state.formState[this.props.questionIndex]
        const blockObject =this.props.state.knowledgeCheckBlocks[this.props.questionIndex]
        this.setState({
            isCorrect: formState.isCorrect,
            feedBack: blockObject.feedBack

        })
    }
    handleClick(event){
        event.preventDefault()
        const newObjectState = {
            answered: false,
            selectedAnswer: '',
            isCorrect: null
        }
        this.props.updateFormState(this.props.state.formState, newObjectState, this.props.questionIndex)
    }
    render(){
        return(
            <div>
                <div>
                    {(this.state.isCorrect)?(
                        <div>
                            <div> <CgCheckO /> </div>
                            <dv> <p>Correct</p> </dv>
                        </div>
                    ):(
                        <div>
                            <div> <CgCloseO /> </div>
                            <div> <p>Incorrect</p> </div>
                        </div>
                    )}
                    <div> <p>{this.state.feedBack}</p> </div>
                </div>
                <div>
                    <button type="button" onClick={this.handleClick} >
                        <p>TAKE AGAIN</p>
                        <CgRedo/>
                    </button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    state
})
const mapDispatchToProps = (dispatch) => ({
    udpateFormState: (formState, objectState, objectIndex) => dispatch(updateFormState(formState, objectState, objectIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedBackCard)
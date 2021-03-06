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
        const blockObject = this.props.state.knowledgeCheckBlocks[this.props.questionIndex]
        this.setState({
            isCorrect: formState.isCorrect,
            feedBack: blockObject.feedback
        })
    }
    handleClick = async(event) => {
        // debugger
        //This is the location of the bug. When exicuiting (but not when compiling) I got an error stating that
        //  this.props.updateFormState is not a function. I couldn't detect any difference between how it is imported
        //  and called here and how it is imported and called in the answer form component that would cause this,
        //  but obviously I was missing something.
        //  making this function async resolved the issue. It seems that async thunks need to be dispatched by async functions,
        //  but i'm not sure why that was resulting in this particular error type. 
        event.preventDefault()
        const newObjectState = {
            answered: false,
            selectedAnswer: '',
            isCorrect: null
        }
        this.props.udpateFormState(this.props.state.formState, newObjectState, this.props.questionIndex)
    }
    render(){
        return(
            <div className="feedback_card">
                <div>
                    {(this.state.isCorrect)?(
                        <div>
                            <div> <CgCheckO /> </div>
                            <div> <p>Correct</p> </div>
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
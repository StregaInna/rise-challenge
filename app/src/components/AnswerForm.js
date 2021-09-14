import React from 'react'
import { updateFormState } from '../store/formState'
import { connect } from 'react-redux'

class AnswerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answered: false,
            selectedAnswer: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            selectedAnswer: event.target.name
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.updateFormState(this.props.state.formState, this.state, this.props.questionIndex)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                {this.props.answers.map((answer)=>{
                    return(
                        <label key={answer.text} >
                            <input type="radio" name={answer.text} value={answer.isCorrect} 
                                checked={this.state.selectedAnswer===answer.text}
                                onChange={this.handleChange} />
                            {answer.text}
                        </label>
                    )
                })}
                <button type="submit">submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})
const mapDispatchToProps = (dispatch) => ({
    udpateFormState: (formState, objectState, objectIndex) => dispatch(updateFormState(formState, objectState, objectIndex))
})
export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm)
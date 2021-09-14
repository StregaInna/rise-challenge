import React from "react";

export default class AnswerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedAnswer: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            selectedAnswer: event.target.name
        })
    }
    render(){
        return(
            <form>
                {this.props.answers.map((answer)=>{
                    return(
                        <label>
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
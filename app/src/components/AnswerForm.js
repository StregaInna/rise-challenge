import React from "react";

export default class AnswerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answer: null
        }
    }
    render(){
        return(
            <form>
                {this.props.answers.map((answer)=>{
                    return(
                        <label>
                            <input type="radio" name={answer.text} value={answer.isCorrect} />
                            {answer.text}
                        </label>
                    )
                })}
                <button type="submit">submit</button>
            </form>
        )
    }
}
import React from 'react'

export default class KnowledgeCheckForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answer: null
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.blockObject.question.text}</h1>
                
                <form>
                </form>
            </div>
        )
    }
}
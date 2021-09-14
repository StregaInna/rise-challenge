import React from 'react'
import MediaSwtich from './MediaSwitch'
import AnswerForm from './AnswerForm'

export default class KnowledgeCheckBlock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answer: null
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.blockObject.question.text}</p>
                {(this.props.blockObject.question.media)?(
                    <MediaSwtich media={this.props.blockObject.question.media} />
                ):(<div></div>)}
                <AnswerForm answers={this.props.blockObject.answers} />
            </div>
        )
    }
}
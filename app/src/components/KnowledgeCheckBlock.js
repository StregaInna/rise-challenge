import React from 'react'
import MediaSwtich from './MediaSwitch'
import AnswerForm from './AnswerForm'
import FeedbackCard from './feedbackCard'
import { connect } from 'react-redux'

class KnowledgeCheckBlock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            answer: null
        }
    }
    render() {
        return (
            <div className="knowledge_check_block">
                <div className="question" >
                    <p className="questions_text" >{this.props.blockObject.question.text}</p>
                    {(this.props.blockObject.question.media)?(
                        <div className="question_media"><MediaSwtich media={this.props.blockObject.question.media} /></div>
                    ):(<div></div>)}
                </div>
                <AnswerForm answers={this.props.blockObject.answers} questionIndex={this.props.questionIndex} />
                {(this.props.state.formState[this.props.questionIndex].answered)?(
                    <div>
                        <FeedbackCard questionIndex={this.props.questionIndex} />
                    </div>):(<div></div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})
export default connect(mapStateToProps)(KnowledgeCheckBlock)
import React from 'react'
import MediaSwtich from './MediaSwitch'

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
                <h1>{this.props.blockObject.question.text}</h1>
                {(this.props.blockObject.question.media.type==='image')?(
                    <MediaSwtich media={this.props.blockObject.question.media} />
                ):(<div></div>)}
                <form>
                </form>
            </div>
        )
    }
}
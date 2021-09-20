//This is set up as a switch so that it can easily be expanded to include other 'types' of media
//I added altText to the media object in the database because it is important for accessability

function MediaSwitch (props) {
    switch(props.media.type){
        case 'image':
            return(<img src={props.media.url} alt={props.media.altText}/>)
        default:
            return(<div></div>)
    }
}

export default MediaSwitch
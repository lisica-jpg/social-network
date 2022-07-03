import s from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let messagesElements = messagesData.map((element,index) => <Message  id={index} text={element.text}/>)


export default Message;
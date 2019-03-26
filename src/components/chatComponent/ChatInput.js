import * as React from 'react';
import * as PropTypes from 'prop-types'
import 'mdbreact/dist/css/mdb.css';


class ChatInput extends React.Component {

    static propTypes = {
        userID: PropTypes.number,
        sendMessage: PropTypes.func,
    };

    componentDidMount() {
        this.refs.txtMessage.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Check if the message is empty
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }
        const messageObj = {
            Who: this.props.userID,
            What: message,
            When: new Date().valueOf(),
        };
        this.props.sendMessage(messageObj);
        // Clear the input field and set focus
        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();
    };

    render() {
        const { props, onSubmit } = this;
        const imgURL = '//robohash.org/' + props.userID + '?set=set2&bgset=bg2&size=70x70';
        return (
            <form className="msg_history" onSubmit={ onSubmit }>

                <div className="type_msg">
                    <div className="input_msg_write input-field">
                        <div className="incoming_msg_img"><img src={imgURL} alt="sunil" className="circle"/></div>
                        <input ref="txtMessage" type="text" className="write_msg" placeholder="Type a message"/>
                        <button className="msg_send_btn" type="submit"><i className="fab fa-facebook-f" aria-hidden="true"/></button>
                    </div>
                </div>
            </form>
        );
    }
}
export default ChatInput;


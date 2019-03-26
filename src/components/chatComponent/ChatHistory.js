import * as React from 'react';
import PropTypes from 'prop-types'

class ChatHistory extends React.Component {

    static propTypes = {
        history: PropTypes.array
    };

    render() {
        const { props } = this; // same as `const props = this.props;`
        console.log("History: ")
        console.log(Object.keys(props.history))
        return (
            (<ul className="collection">
                { props.history.map((key, obj) => {
                    const imgURL = '//robohash.org/' + key.message.Who + '?set=set2&bgset=bg2&size=70x70';
                    const messageDate = new Date(key.message.When);
                    const messageDateTime = messageDate.toLocaleDateString() +
                        ' at ' + messageDate.toLocaleTimeString();
                    return (
                        <div className="collection-item avatar" key={ key.message.When }>
                            <div className="mesgs">
                                    <div className="incoming_msg">
                                        <div className="incoming_msg_img"><img src={ imgURL } alt={ key.message.Who } className="circle" /></div>
                                        <div className="received_msg">
                                            <div className="received_withd_msg">
                                                <p>{ key.message.What }</p>
                                                <span className="time_date"> #{ key.message.Who }   |    { messageDateTime }</span></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    );
                }) }
            </ul>));
    }
}



export default ChatHistory;

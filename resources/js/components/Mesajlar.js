import React, {Component} from 'react';

class Mesajlar extends Component {

    render() {
        return (
            <div>
                <b>{this.props.user} </b> : {this.props.mesaj}
            </div>
        );
    }
}

export default Mesajlar;


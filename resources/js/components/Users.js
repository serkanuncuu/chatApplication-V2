import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Users extends Component {

    render() {

        return (
            <div>
                <ul>
                    {
                        this.props.user.map((user,i) => (
                            <li key={i}>{user}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Users;


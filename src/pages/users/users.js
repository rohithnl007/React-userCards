import React from 'react';

import './users.css';

const users = (props) => {
    return (
        <div>
            <h5>Users</h5>
            {props.children}
        </div>
    )
}

export default users;
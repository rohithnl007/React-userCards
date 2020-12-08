import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap'

import './users.css';

const users = (props) => {
    return (
        <div>
            <h5>Users List</h5>
            {props.allUsers.map((user) => {
                return (
                    user.name ? 
                    <Card key={user.id} style={{ width: '50%', borderStyle: 'dotted', margin: '16px', padding: '10px' }}>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text>{user.designation}</Card.Text>
                        </Card.Body>
                    </Card> : null
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.allUsers
    }
}

export default connect(mapStateToProps, null)(users);
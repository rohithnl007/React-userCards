import React from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../../../store/actions/userActions';

import './addUser.css';

const addUser = (props) => {

    const onContinueAddingUser = (event) => {
        event.preventDefault();
        const userData = {
            name: event.target[0].value,
            email: event.target[1].value,
            designation: event.target[2].value
        }
        props.addUserAction(userData);
    }

    // const onCancelAddingUser = (event) => {
    //     // event.preventDefault();
    //     // event.target[0].reset();
    // }

    return (
        <div className='AddUser'>
            <h4>Enter User Details</h4>
            <form onSubmit={onContinueAddingUser}>
                <div className='InputGroup'>
                    <label className='Label'>Name</label>
                    <input type='text' placeholder='your name' />
                </div>
                <div className='InputGroup'>
                    <label className='Label'>Email Id</label>
                    <input type='input' placeholder='your email id' />
                </div>
                <div className='InputGroup'>
                    <label className='Label'>Designation</label>
                    <input type='text' placeholder='your designation' />
                </div>
                {/* <button className='AU-Button' onClick={onCancelAddingUser}>Cancel</button> */}
                <button className='AU-Button' type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserAction: (name, email, designation) => dispatch(addUserAction(name, email, designation))
    }
}

export default connect(null, mapDispatchToProps)(addUser);
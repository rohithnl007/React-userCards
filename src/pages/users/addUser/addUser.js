import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../../../store/actions/userActions';

import './addUser.css';

const AddUser = (props) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        designation: ''
    });

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;

        setUserData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    };

    const onCancelAddingUser = () => {
        setUserData({
            name: '',
            email: '',
            designation: ''
        })
    };

    const onContinueAddingUser = (event) => {
        event.preventDefault();
        props.addUserAction(userData);
        setUserData({
            name: '',
            email: '',
            designation: ''
        })
    };

    return (
        <div className='AddUser'>
            <h4>Enter User Details</h4>
            <form onSubmit={onContinueAddingUser}>
                <div className='InputGroup'>
                    <label className='Label'>Name</label>
                    <input type='text' placeholder='your name' name='name' onChange={inputChangeHandler} value={userData.name} />
                </div>
                <div className='InputGroup'>
                    <label className='Label'>Email Id</label>
                    <input type='email' placeholder='your email id' name='email' onChange={inputChangeHandler} value={userData.email} />
                </div>
                <div className='InputGroup'>
                    <label className='Label'>Designation</label>
                    <input type='text' placeholder='your designation' name='designation' onChange={inputChangeHandler} value={userData.designation} />
                </div>
                <button className='AU-Button' onClick={onCancelAddingUser}>Cancel</button>
                <button className='AU-Button' type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserAction: (userData) => dispatch(addUserAction(userData))
    }
}

export default connect(null, mapDispatchToProps)(AddUser);
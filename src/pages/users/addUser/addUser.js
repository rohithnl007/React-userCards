import React from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../../../store/actions/userActions';

import './addUser.css';

const addUser = (props) => {

    const onContinueAddingUser = () => {
        console.log('props >>> ', props);
        // props.addUserAction('name :: ', 'Rohit');
        // props.addUserAction('email :: ', 'Rohit');
        // props.addUserAction('designation :: ', 'Rohit');
    }

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
        addUserAction: 
    }
}

export default connect(null, { addUserAction })(addUser);
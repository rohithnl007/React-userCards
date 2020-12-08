import React from 'react';
import { NavLink } from 'react-router-dom';

import './layout.css';

const layout = (props) => {
    return (
        <div className='Layout'>
            <header className='AppHeader'>App Header</header>
            <header>
                <div className='NavMenu'>
                    <NavLink className='Navlink' exact to='/' activeStyle={{fontWeight: 'bold', color: 'blue'}}>Home</NavLink>
                    <NavLink className='Navlink' exact to='/addUser' activeStyle={{fontWeight: 'bold', color: 'blue'}}>Add User</NavLink>
                    <NavLink className='Navlink' exact to='/users' activeStyle={{fontWeight: 'bold', color: 'blue'}}>All Users</NavLink>
                </div>
            </header>
            <div>{props.children}</div>
        </div>
    )
}

export default layout;
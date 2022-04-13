import React, { useState } from 'react';

import styles from './UserInput.module.css';
import Button from '../UI/Button/Button';

const UserInput = (props) => {
    const [enterdUsername, setEnteredUsername] = useState('');
    const [enterdAge, setEnteredAge] = useState('');

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAddInfo(enterdUsername, enterdAge);
    }
    const userNameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    }
    const ageChageHandler = event => {
        setEnteredAge(event.target.value);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']}`}>
                <label>Username</label>
                <input
                    type="text"
                    onChange={userNameChangeHandler}
                ></input>
                <br></br>
                <label>Age (Years)</label>
                <input
                    type="text"
                    onChange={ageChageHandler}
                >
                </input>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default UserInput;
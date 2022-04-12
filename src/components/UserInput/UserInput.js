import React, { useState } from 'react';

const UserInput = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                    ></input>
                    <label>Age (Years)</label>
                    <input
                        type="text"
                    >
                    </input>
                </div>
            </form>
        </div>
    )
}

export default UserInput;
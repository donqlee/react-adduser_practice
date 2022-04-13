import React from 'react';

const UserList = props => {
    return (
        <ul>
           {props.items.map(info => (
               <li key={info.id}>{info.name}, {info.age}</li>
           ))} 
        </ul>
    )
}
export default UserList;
import React from 'react';

import './UsersList.css';

import UserItem from './UserItem';

const UsersList = props => { //for parent props
    if (props.items.length === 0){ //item name for the prop
        return (
            <div className="center">
                <h2>No users found</h2>
            </div>
        );
    }
    return (
        <ul className="users-list">
            { props.items.map(user => (
                <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );
}

export default UsersList;
//3rd party imports
import React from 'react';
//own file imports
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';



const UsersList = props => { //for parent props
    if (props.items.length === 0){ //item name for the prop
        return (
            <div className="center">
                <Card>
                    <h2>No users found</h2>
                </Card>
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
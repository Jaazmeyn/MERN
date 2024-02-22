import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id:'u1', 
            name:'Jasmin Blanda', 
            image: 'https://placeimg.com/640/480/any',
            places: 3    
        }
    ];
    return <UsersList items = { USERS } />
};


export default Users;
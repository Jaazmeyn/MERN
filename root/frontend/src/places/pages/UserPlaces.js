import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Wakeboard Lift',
        description: 'Viennas best place',
        imageUrl: 'https://wakeup.at/wp-content/uploads/2015/10/wake_up01.jpg',
        address: 'Am, Schleusenbrücke Wehr 1, 1220 Wien',
        location: {
            lat: 48.2133462,
            long: 16.4343926
        },
        creator: 'u1'//user who created the places
    },
    {
        id: 'p2',
        title: 'Donauanal',
        description: 'Viennas second best place',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNSrLDgm4XloaIUbDfRXVOhy1wAuESw1faCVFN2',
        address: 'Am, Schleusenbrücke Wehr 1, 1220 Wien',
        location: {
            lat: 48.2133462,
            long: 16.4343926
        },
        creator: 'u1'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId );
    return <PlaceList items={loadedPlaces}
/>};

export default UserPlaces;
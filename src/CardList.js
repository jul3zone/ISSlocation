import React from 'react';
import Card from './Card'

const CardList= ({ issApi }) => {
    return (
        <div>
            {
                issApi.map((iss, i) => {
                    return (
                    <Card 
                    key={i} 
                    message={issApi[i].message} 
                    timestamp={issApi[i].timestamp} 
                    location={issApi[i].location} 
                    />
                    );
                })
            }
        </div>
    );
}

export default CardList;
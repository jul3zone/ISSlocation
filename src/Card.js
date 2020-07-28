import React from 'react';

const Card = ({ message, timestamp, location }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='ISS' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/640px-International_Space_Station_after_undocking_of_STS-132.jpg' />
            <div>
                <h2> {message} </h2>
                <p> {timestamp} </p> 
                <h1> {location} </h1>
            </div>
        </div>
    );
}

export default Card;
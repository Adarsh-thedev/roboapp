import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return(
        <React.Fragment>
            <div className = 'bg-gold dib br3 ma2 pa3 grow bw2 shadow=5 tc'>
                <img alt='robot' src = {`https://www.robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;
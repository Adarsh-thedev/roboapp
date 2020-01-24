import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <div>
            <input 
                className = 'pa3 ba b--gold bg-light-yellow'
                type = 'search'
                placeholder = 'Search Robots'
                onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;
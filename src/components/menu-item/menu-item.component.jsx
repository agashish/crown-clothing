import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

// withRouter
// #### THIS WILL HELP US TO PREVENT PROPS DRILLING BAD WAY.
// #### IT WILL HELP US TO COMMUNICATE THE PROPS ON DEMAND
// #### ON WHICH COMPONENT WE WILL REQUIRED INSTEAD OF PASSING UN-NECESSARY PROPS PASSED TO
// #### IT WILL HELP US TO SEE AND PREVNT UN-WANTED RE-RENDERING THE COMPONENTS

// FUNCTIONAL COMPONENTS
const MenuItem = ({title, imageUrl, size, linkUrl, history, location, match}) => {    
    // console.log(history)
    // console.log(location)
    // console.log(match)
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="content" onClick={() => history.push(`${location.pathname}${linkUrl}`)}>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
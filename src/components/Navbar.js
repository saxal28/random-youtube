import React from 'react';

const Navbar = () =>  {
  return (
    <div className="nav text-center">
     <img src="http://i.imgur.com/dqN9mf1.png" className="logo" />
     <input type="text" defaultValue="pirates" />
     <button className="btn search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
     <button className="btn search-button">Random!</button>
    </div>
  )
}


export default Navbar;

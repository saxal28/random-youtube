import React from 'react';

const Navbar = (props) =>  {
  return (
    <div className="nav text-center">
     <img src="https://i.ytimg.com/vi/a4R0PqiWxY0/maxresdefault.jpg" className="logo" role="presentation" />
     <input type="text" placeholder={props.searchTerm}/>
     <button
       onClick={props.handleButtonPress}
       className="btn search-button">
       <i className="fa fa-search" aria-hidden="true"></i>
      </button>
     <button
       onClick={props.handleRandomButtonPress}
       className="btn search-button">Random!</button>
    </div>
  )
}

export default Navbar;

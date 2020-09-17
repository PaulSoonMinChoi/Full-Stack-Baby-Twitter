import React from 'react';
import Links from './Links.jsx';

const NavBar = (props) => {
  return (
    <div>
      <Links postSignUp={props.postSignUp} />
    </div>
  )
}

export default NavBar;
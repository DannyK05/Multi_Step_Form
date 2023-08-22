import React from 'react';
import './layout.css';
function Nav(){
return(
        <nav className='nav-bar'>
        <ul>
            <li><span>Step 1</span><p>Your Info</p></li>
            <li><span>Step 2</span><p>Select Plan</p></li>
            <li><span>Step 3</span><p>Add-Ons</p></li>
            <li><span>Step 4</span><p>Summary</p></li>
        </ul>
        </nav>
    
)
}
export default Nav;
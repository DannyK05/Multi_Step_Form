import React from 'react';
import './layout.css';
function Nav(){
return(
        <nav className='nav-bar'>
        <ul>
<<<<<<< HEAD
            <li><span>Step 1</span><p>Your Info</p></li>
            <li><span>Step 2</span><p>Select Plan</p></li>
            <li><span>Step 3</span><p>Add-Ons</p></li>
            <li><span>Step 4</span><p>Summary</p></li>
=======
            <li><span><span className='step'>Step 1</span><p>Your Info</p></span></li>
            <li><span><span className='step'>Step 2</span><p>Select Plan</p></span></li>
            <li><span><span className='step'>Step 3</span><p>Add-Ons</p></span></li>
            <li><span><span className='step'>Step 4</span><p>Summary</p></span></li>
>>>>>>> cc7f4fa (Updated nav bar and Info component)
        </ul>
        </nav>
    
)
}
export default Nav;
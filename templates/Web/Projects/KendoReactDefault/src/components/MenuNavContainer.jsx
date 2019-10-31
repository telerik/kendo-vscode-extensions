import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';


const MenuNavContainer = (props) => {
    return (
        <Menu>
            <MenuItem text="Home" render={()=> <Link to={'/'}>Home</Link>}/>
        </Menu>
    );
}

export default MenuNavContainer;
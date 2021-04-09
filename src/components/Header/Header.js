import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
   const [category, setcategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Header: {category}</h1>
            <button onClick={()=> setcategory('Laptop')}>Laptop</button>
            <button onClick={()=> setcategory('Mobile')}>mobile</button>
            <button onClick={()=> setcategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;
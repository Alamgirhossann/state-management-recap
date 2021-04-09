import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../category/Category';

const Home = () => {
    const category = useContext(CategoryContext)
   
    return (
        <div>
            <h1>This is Home: {category} </h1>
            <Category></Category>
        </div>
    );
};

export default Home;
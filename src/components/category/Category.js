import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name:'lenevo', category:'laptop'},{name:'asus', category:'laptop'},{name:'dell', category:'laptop'},
    {name:'nokia', category:'mobile'},{name:'samsung', category:'mobile'},{name:'apple', category:'mobile'},
    {name:'nikkon', category:'camera'},{name:'cannon', category:'camera'},{name:'sony', category:'camera'}
]


const Category = () => {
    const [pategory] = useContext(CategoryContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProduct = allProducts.filter(product => product.category === pategory.toLowerCase())
        setProducts(matchedProduct)
    }, [pategory]);
   
    return (
        <div>
            <h2>This is category</h2>
           {
               products.map(product =><CategoryDetail product= {product}></CategoryDetail>)
           }
            
        </div>
    );
};

export default Category;
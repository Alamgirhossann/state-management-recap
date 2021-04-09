import React from 'react';


const CategoryDetail = (props) => {
    const {name} = props.product;
    
    return (
        <div>
            <h4>This is category detail</h4>
            <h5>This is selected product :{name} </h5>
        </div>
    );
};

export default CategoryDetail;
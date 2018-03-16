import React from 'react';

export default function Product(props){
    const {name, url, price} = props;
    console.log(props);
    return (
        <div>
            <img src={url}></img>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}
import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const Cart = () =>{
    return (
        <>
        <h1>cart</h1>

        {/* <div>
            <div className="col-md-4">
                <h3>{ product.title} </h3>
                <p className="lead fw-bold">
                    { product.qty} X ${ product.price} = $ 
                    { product.qty * product.price}
                </p>
                <button className="btn btn-outline-dark me-4"
                onClick={()=>handleButton(product)}>
                    <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-outline-dark me-4"
                onClick={()=>handleButton(product)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div> */}
        </>
        
    );
}

export default Cart;
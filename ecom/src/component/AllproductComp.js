import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { NavLink } from 'react-router-dom';

const AllproductComp = ({ products }) => {
  const { cartDispatch } = useCartContext();
  
  const [productMessages, setProductMessages] = useState({});
  
  function handleAddToCartClick(product) {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { id: product.id, color: "red", amount: product.price, product: product.name }
    });

    setProductMessages((prevMessages) => ({
      ...prevMessages,
      [product.id]: "Data added to cart"
    }));
    
    setTimeout(() => {
      setProductMessages((prevMessages) => ({
        ...prevMessages,
        [product.id]: ""
      }));
    }, 1000);
  }


  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-semibold">Happy Shopping Time</h1>
        <p className="text-gray-600">Explore our exciting products!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="max-w-full mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white hover:bg-indigo-100">
            <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
            <div className="p-4">
              <p className="font-semibold text-lg mb-2">{product.name}</p>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-lg">${product.price}</p>
              <div className="flex justify-between mt-2">
                <p className="text-gray-700">Select Color:</p>
                <div className="flex gap-2">
           
                </div>
              </div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => handleAddToCartClick(product)}>
                Add to Cart
              </button>
              <NavLink to={'/cart'}>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  To Cart
                </button>
              </NavLink>
              <NavLink to={`/singleproduct/${product.id}`}>
                <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Buy
                </button>
              </NavLink>
           
              {productMessages[product.id] && (
                <div className="mt-4 bg-green-200 p-2 text-center rounded">
                  {productMessages[product.id]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllproductComp;






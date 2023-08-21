import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import { AppContext } from '../context/productContext';


const Product = (curElem) => {
  const {id, name, image, price, category } = curElem;
  // const {singleProduct}=useContext(AppContext)
  // console.log("singleProduct",singleProduct)


  return (
    <NavLink to={`/singleproduct/${id}`}>
    <div className="max-w-full mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white hover:bg-indigo-100 transform hover:translate-x-2">
      <img className="w-32 h-32 object-cover" src={image} alt={name} />
      <div className="flex-grow px-6 py-2">
        <div className="font-bold text-lg mb-1">{name}</div>
        <p className="text-gray-700 text-sm mb-2">{category}</p>
        <p className="text-gray-700 text-sm">{price}</p>
        {/* {singleProduct.push(name,category,image)} */}
      </div>
    </div>
    </NavLink>
  );
};

export default Product;


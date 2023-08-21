import React, { useContext} from 'react';
import {  useCartContext } from '../context/cartContext';
import { AppContext } from '../context/productContext';
import { NavLink } from 'react-router-dom';


const AllproductComp = (allelem) => {
  const {id } = allelem;
console.log("all element",allelem)
  
  const productContext = useContext(AppContext);

  const {cartState, cartDispatch} =useCartContext();
 

  function handelClick(){
    cartDispatch({type:"ADD_TO_CART",payload :{id:allelem.id,color:"red",amount:834543,product:"doom"}})
    console.log("product name:",`${allelem.id}` )
  }

  return (
    <div className="bg-gray-100 py-10">

      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-semibold">Happy Shopping Time</h1>
        <p className="text-gray-600">Explore our exciting products!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productContext.products.map((product) => (
          <div key={product.id} className="max-w-full mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white hover:bg-indigo-100">
            <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
            <div className="flex-grow px-4 py-4">
              <p className="font-semibold text-lg mb-1">{product.name}</p>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-lg">${product.price}</p>
         
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5"onClick={handelClick}>
               Add to Cart
               </button>
              <NavLink to={'/cart'}>
               <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5"onClick={handelClick}>
               TO cart
               </button>
              </NavLink>
            
            <NavLink to={`/singleproduct/${id}`}>
             <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
             Buy
            </button>
            </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllproductComp;

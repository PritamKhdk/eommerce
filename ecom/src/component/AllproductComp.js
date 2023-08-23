
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import Example from './Dropdown';

const AllproductComp = ({ products }) => {
  console.log("dataalal",products)
  const [selectedCategory,setSelectedCategory]=useState("All")

 

  const [productMessages, setProductMessages] = useState({}); 
  console.log("Selected category:", selectedCategory);
  function handleAddToCartClick(product) {
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
    
    Cookies.set(`cart_product_${product.id}`,JSON.stringify({
      id: product.id,
      color: "red",
      amount: product.price,
      product: product.name,
      image:product.image
    }), { expires: 1 });
  }
  
  
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-semibold">Happy Shopping Time</h1>
        <p className='absolute top-0 right-0'><Example setSelectedCategory={setSelectedCategory} /></p> 
        <p className="text-gray-600">Explore our exciting products!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products
        .filter(product => selectedCategory === "All" || product.category === selectedCategory)
        .map((product) => (
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
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5" onClick={() => handleAddToCartClick(product)}>
                Add to Cart
              </button>
    
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










// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Cookies from 'js-cookie'; 
// import Example from './Dropdown';

// const AllproductComp = ({ products }) => {
//   console.log("dataalal",products)
//   const [selectcategory,setSelectcategory]=useState(All)
  
//   const [productMessages, setProductMessages] = useState({}); 
//   function handleAddToCartClick(product) {
//     setProductMessages((prevMessages) => ({
//       ...prevMessages,
//       [product.id]: "Data added to cart"
//     }));
    
//     setTimeout(() => {
//       setProductMessages((prevMessages) => ({
//         ...prevMessages,
//         [product.id]: ""
//       }));
//     }, 1000);

//     Cookies.set(`cart_product_${product.id}`,JSON.stringify({
//       id: product.id,
//       color: "red",
//       amount: product.price,
//       product: product.name,
//       image:product.image
//     }), { expires: 1 });
//   }
  

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="container mx-auto text-center mb-8">
//         <h1 className="text-3xl font-semibold">Happy Shopping Time</h1>
//         <p className='absolute top-0 right-0'><Example /></p> 
//         <p className="text-gray-600">Explore our exciting products!</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="max-w-full mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white hover:bg-indigo-100">
//             <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
//             <div className="p-4">
//               <p className="font-semibold text-lg mb-2">{product.name}</p>
//               <p className="text-gray-600 text-sm mb-2">{product.category}</p>
//               <p className="text-gray-700 text-lg">${product.price}</p>
//               <div className="flex justify-between mt-2">
//                 <p className="text-gray-700">Select Color:</p>
//                 <div className="flex gap-2">
           
//                 </div>
//               </div>
//               <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5" onClick={() => handleAddToCartClick(product)}>
//                 Add to Cart
//               </button>
    
//               <NavLink to={`/singleproduct/${product.id}`}>
//                 <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
//                   Buy
//                 </button>
//               </NavLink>
           
//               {productMessages[product.id] && (
//                 <div className="mt-4 bg-green-200 p-2 text-center rounded">
//                   {productMessages[product.id]}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllproductComp;
// import React,{useContext}from 'react'
// import { AppContext } from '../context/productContext';
// import AllproductComp from './AllproductComp';


// const Dataall = () => {
//   const { isLoading, products } = useContext(AppContext);

//   if (isLoading) {
//     return <div>...Loading</div>;
//   }

//   return (
//     <>
//    {products.map((allelem) => {
//     return <AllproductComp
//      key={allelem.id}
//     {...allelem}/>
//   })}
//     </>
//   )
// }

// export default Dataall

import React, { useContext } from 'react';
import { AppContext } from '../context/productContext';
import AllproductComp from './AllproductComp';

const Dataall = () => {
  const { isLoading, products } = useContext(AppContext);
  // console.log("prod",products)

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <AllproductComp products={products} />
      </div>
    </div>
  );
}

export default Dataall;

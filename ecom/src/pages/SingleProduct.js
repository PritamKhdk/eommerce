import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/productContext';

const SingleProduct = () => {
  const { id } = useParams();
  // const {singleProduct}=useContext(AppContext);
  // console.log("pr",singleProduct)


  return (
    <> 
    <div className='flex items-center justify-center '>
      <div className='text-6xl'>{id.toUpperCase()}</div>
    </div>
    <div>
        Hello from {id}
    </div>
    </>
  );
};

export default SingleProduct;

import React, { useContext } from 'react';
import { AppContext } from '../context/productContext';
import Product from './Productfe';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useContext(AppContext);


  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="#fee2e2 py-10">
        <div>
          <h1 className="text-3xl mb-6 text-center font-semibold">Feature Product</h1>
        </div>
      <div className="container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureProducts.map((curElem) => {
            return (
              <Product
                key={curElem.id}
                 {...curElem}
              />
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;

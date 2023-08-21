import React,{useContext}from 'react'
import { AppContext } from '../context/productContext';
import AllproductComp from './AllproductComp';
// import Hello from './Hello';

const Dataall = () => {
  const { isLoading, products } = useContext(AppContext);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <>
   {products.map((allelem) => {
    return <AllproductComp
     key={allelem.id}
    {...allelem}/>
  })}
  
    </>
  )
}

export default Dataall
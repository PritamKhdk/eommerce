import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { useCartContext } from "../context/cartContext";
import { GiCancel } from 'react-icons/gi';

const TABLE_HEAD = ["ID", "Color", "Amount", "Product", ""];

export function Cart() {
  const { cartState,cartDispatch} = useCartContext();
  console.log(cartDispatch)
  console.log("cartstaee",cartState)

  if (cartState.cart.length === 0) {
    return (
      <Card className="h-full w-full flex items-center justify-center">
        <Typography variant="h4" color="black" className="font-semibold">
          Please add products to use the cart
        </Typography>
      </Card>
    );
  }

 function handleRemoveFromCartClick(){
  console.log("hellod")
  cartDispatch({type:"DELETE_FROM_CART",
})
 }


  const totalAmount = cartState.cart.reduce((total, item) => total + item.amount, 0);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartState.cart.map(({ id, color, amount, product }, index) => {
            const isLast = index === cartState.cart.length - 1;
            const classes = isLast ? "p-5" : "p-5 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                     <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {color}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {product}
                  </Typography>
                </td>

                <td className={classes}>
                  <button
                    color="blue"
                    onClick={() => handleRemoveFromCartClick(id)}
                  >
                   <GiCancel />
                  </button>
                </td>
              </tr>
           
            );
          })}
        </tbody>
    
        <tfoot>
          <tr>
            <td colSpan={1}></td>
            <td className="p-5 text-right">
              <Typography variant="small" color="blue-gray" className="font-semibold">
                Amount total
              </Typography>
            </td>
            <td className="p-5">
              <Typography variant="small" color="blue-gray" className="font-semibold">
                ${totalAmount.toFixed(2)}
              </Typography>
            </td>
          </tr>
        </tfoot>
      </table>
    </Card>
  );
}


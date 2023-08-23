import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { GiCancel } from 'react-icons/gi';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const TABLE_HEAD = ['ID', 'Image', 'Color', 'Amount', 'Product', 'Remove Item'];

export function Cart() {
  const [cartItemsremove, setCartItemsremove] = useState(false);
  const navigate= useNavigate()

  const cookies = Object.keys(Cookies.get())
    .filter((cookieName) => cookieName.startsWith('cart_product_'))
    .map((cookieName) => {
      const cookieValue = Cookies.get(cookieName);
      try {
        const parsedValue = JSON.parse(cookieValue);
        return parsedValue;
      } catch (error) {
        return null;
      }
    })
    .filter((cookieValue) => cookieValue !== null);

  function handleRemoveFromCartClick(id) {
    Cookies.remove(`cart_product_${id}`);
    setCartItemsremove(!cartItemsremove);
  }

  useEffect(() => {}, [cartItemsremove]);

  if (cookies.length === 0) {
    return (
      <Card className="h-full w-full flex items-center justify-center">
        <Typography variant="h4" color="black" className="font-semibold">
          Please add products to use the cart
        </Typography>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>(navigate("/product"))}>
          Continue Shopping
        </button>
      </Card>
    );
  }

  function handleClearCart() {
    cookies.forEach((cookie) => {
      Cookies.remove(`cart_product_${cookie.id}`);
    });
    setCartItemsremove(!cartItemsremove);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <table className="w-full table-fixed text-left">
        <thead className="bg-blue-100">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border border-blue-100 p-3"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, index) => {
            const classes =
              index === cookies.length - 1
                ? 'bg-blue-50'
                : 'bg-white';

            return (
              <tr  key={cookie.id} className="hover:bg-sky-500">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {cookie.id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  <img className="w-30 h-20 object-cover rounded" src={cookie.image}alt={cookie.name} ></img>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {cookie.color}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {cookie.amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {cookie.product}
                  </Typography>
                </td>
                <td className={classes}>
                  <button
                    color="blue"
                    onClick={() => handleRemoveFromCartClick(cookie.id)}
                  >
                    <GiCancel />
                  </button>
                </td>
              </tr>
     
            );
          })}
        </tbody>

        <tfoot className="bg-blue-100">
          <tr>
          <td colSpan={2}></td>
     <td className="p-5 text-right">
      <Typography variant="small" color="blue-gray" className="font-semibold">
        Total Amount
      </Typography>
    </td>
    <td className="p-5">
      <Typography variant="small" color="blue-gray" className="font-semibold">
        {cookies.reduce((total, item) => total + item.amount, 0).toFixed(2)}
      </Typography>
    </td>
          </tr>
        </tfoot>
      </table>

      <div className="mt-4 flex justify-between w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>(navigate("/product"))}>
          Continue Shopping
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}



import { useState, useEffect } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "product 1",
              image: "https://picsum.photos/500/500/?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "53345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "product 2",
              image: "https://picsum.photos/500/500/?random=2",
            },
          ],
          totalPrice: 1050,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h1>
      <div className="overflow-hidden relative shadow-md sm:rounded-lg">
        <table className="text-gray-500 text-left min-w-full">
          <thead className="text-xs bg-gray-100 uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order Id</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium whitespace-nowrap text-gray-900">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city},{order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city},${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {order.totalPrice}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    <span
                      className={`${order.isPaid ? "bg-green-100 text-green-700":"bg-red-100 text-red-700"} 
                      px-2 py-1 rounded-full text-xs sm:text-sm font-medium  `}
                    >
                      {order.isPaid ? "paid" : "pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className=" px-4 py-4 text-center text-gray-500"
                >
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyOrdersPage;

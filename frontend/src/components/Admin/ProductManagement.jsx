import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdminProducts } from "../../redux/slices/adminProductSlice";
import { deleteProduct } from "../../redux/slices/adminProductSlice";

const ProductManagement = () => {
  // const products = [
  //   {
  //     _id: 1233,
  //     name: "Shirt",
  //     price: 122,
  //     sku: "24232",
  //   },
  // ];

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.adminProducts,
  );

  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Product ?")) {
      //console.log("Delete product with id: ", id);
      dispatch(deleteProduct(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-7xl p-6 mb-6">
      <h2 className="font-bold text-2xl mb-6">Product Management</h2>
      <div className="p-6 shadow-md overflow-x-auto sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-sx uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">name</th>
              <th className="px-4 py-3">price</th>
              <th className="px-4 py-3">sku</th>
              <th className="px-4 py-3">actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 text-nowrap font-medium text-gray-900 fond-">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-white mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="
                    bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-500">
                  No Products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;

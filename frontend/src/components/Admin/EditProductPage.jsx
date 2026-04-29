import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  const handleChange = (e) => {
    // setProductData({
    //   ...productData,[e.target.name]: e.target.value
    // })
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="rounded-md p-6 shadow-md max-w-5xl mx-auto ">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="font-semibold block mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold mb-2 block">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "product image"}
                  className="w-20 h-20 rounded-md shadow-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;

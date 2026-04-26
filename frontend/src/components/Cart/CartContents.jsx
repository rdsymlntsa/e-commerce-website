import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity } from "../../redux/slices/cartSlice";
import { removeFromCart } from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "T-shirt",
  //     size: "M",
  //     color: "Red",
  //     quantity: 1,
  //     price: 15,
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 2,
  //     name: "Jeans",
  //     size: "S",
  //     color: "Blue",
  //     quantity: 1,
  //     price: 20,
  //     image: "https://picsum.photos/200?random=2",
  //   },
  // ];

  const dispatch = useDispatch();

  // Handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          size,
          color,
          userId,
          guestId,
          quantity: newQuantity,
        }),
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, userId, guestId, size, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => (
        <div
          key={index}
          className="flex items-start py-4 justify-between border-b"
        >
          <div className="flex items-start justify-between">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 rounded object-cover mr-4"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Size: {product.size} | Color: {product.color}
              </p>
              <div>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      -1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="border rounded px-2.5 py-0.5 text-xl  font-medium"
                >
                  -
                </button>
                <span className="mx-4 font-bold text-xl">
                  {product.quantity}
                </span>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="border rounded px-2.5 py-0.5 text-xl font-medium "
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm">$ {product.price}</p>
            <MdDeleteForever
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color,
                )
              }
              className="text-red-500 w-6 h-6 mt-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartContents;

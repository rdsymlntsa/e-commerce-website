import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { mergeCart } from "../redux/slices/cartSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products?.length > 0 && guestId) {
        dispatch(mergeCart({ user, guestId })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    //console.log("user registered: ",{name , email , password});
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-white p-8 border shadow-sm"
        >
          <div className="flex justify-center mb-6 ">
            <h2 className="font-medium text-xl">kalitego</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">
            Enter your username and password to Login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-800 transition p-2 w-full rounded-lg"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account ?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Login to account"
            className="h-187.5 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Register;

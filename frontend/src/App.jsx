import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./components/Cart/OrderConfirmationPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import MyOrdersPage from "./Pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./Pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right"></Toaster>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route
            path="collections/:collection"
            element={<CollectionPage />}
          ></Route>
          <Route path="product/:id" element={<ProductDetails />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route
            path="order-confirmation"
            element={<OrderConfirmationPage />}
          ></Route>
          <Route path="order/:id" element={<OrderDetailsPage />}></Route>
          <Route path="my-orders" element={<MyOrdersPage />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />}></Route>
          <Route path="users" element={<UserManagement />}></Route>
          <Route path="products" element={<ProductManagement />}></Route>
          <Route path="products/:id/edit" element={<EditProductPage />}></Route>
          <Route path="orders" element={<OrderManagement />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

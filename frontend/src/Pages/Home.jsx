import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home=()=>{
  return <>
  <Hero />
  <GenderCollectionSection/>
  <NewArrivals />
  <h3 className="text-3xl text-center mb-4">Best Seller</h3>
  <ProductDetails/>
  </>
}
export default Home;
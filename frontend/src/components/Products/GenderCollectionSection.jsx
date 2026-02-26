import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-8 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="Womens collection"
            className="w-full h-175 object-cover"
          />
          <div className="absolute bottom-8 left-8 p-4  bg-white bg-opacity-90">
            <p className="font-bold text-black">Women's Collection</p>
            <Link
              to="/collections/all?gender=Women"
              className="underline text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="Womens collection"
            className="w-full h-175 object-cover"
          />
          <div className="absolute bottom-8 left-8 p-4  bg-white bg-opacity-90">
            <p className="font-bold text-black">Men's Collection</p>
            <Link
              to="/collections/all?gender=Men"
              className="underline text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenderCollectionSection;

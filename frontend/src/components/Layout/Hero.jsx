import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="RDSYM"
        className="w-full h-100 md:h-150 lg:h-187.5  object-cover"
      />
      <div className="absolute bg-opacity-5 inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-center tracking-tighter uppercase text-4xl md:text-8xl font-bold mb-4">
            vacation <br /> ready
          </h1>
          <p className="mb-6 text-sm md:text-lg ">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <div>
            <Link to="#" className="px-6 py-2 bg-white text-black rounded-sm" >
             Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

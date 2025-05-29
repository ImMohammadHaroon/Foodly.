import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="heading-xl text-gray-800 mb-6">
              Grow Your <span className="text-primary">Homemade Food</span> Business in Pakistan
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our platform designed exclusively for homemade food restaurants. 
              Expand your reach, manage orders efficiently, and grow your business 
              with our specialized tools and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary flex items-center justify-center">
                Register Your Restaurant
                <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/info" className="btn-secondary flex items-center justify-center">
                Learn How It Works
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full opacity-20 absolute top-4 left-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-background rounded-full relative z-10 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">Foodly</h3>
                  <p className="text-sm">Connecting authentic homemade food with hungry customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
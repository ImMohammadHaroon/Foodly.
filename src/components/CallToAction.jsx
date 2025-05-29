import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="section bg-primary/10">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-custom p-8 md:p-12 text-center">
          <h2 className="heading-lg text-gray-800 mb-6">
            Ready to Grow Your Homemade Food Business?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of successful homemade food entrepreneurs across Pakistan. 
            Our platform provides all the tools you need to expand your reach, 
            manage orders efficiently, and build a loyal customer base.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="btn-primary flex items-center justify-center">
              Register Your Restaurant
              <FaArrowRight className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 
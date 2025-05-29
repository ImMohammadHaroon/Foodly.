import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Foodly</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      
      <main className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-8xl font-bold text-primary">404</span>
            </div>
            <h1 className="heading-lg text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound; 
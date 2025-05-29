import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // For demo purposes, show an error if email is not test@example.com
      if (formData.email !== 'test@example.com') {
        setError('Invalid email or password. Please try again.');
      } else {
        // In a real app, you would redirect to a dashboard or home page after successful login
        window.location.href = '/';
      }
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Login | Foodly - Restaurant Portal</title>
        <meta name="description" content="Login to your Foodly restaurant account to manage orders, update menu, and grow your business." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-gray-800 mb-6">
                Restaurant Login
              </h1>
              <p className="text-lg text-gray-600">
                Access your restaurant dashboard
              </p>
            </div>
          </div>
        </section>

        {/* Login Form Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-custom">
                <h2 className="heading-md text-gray-800 mb-6">Login to Your Account</h2>
                
                {error && (
                  <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="text-sm">
                      <a href="#" className="text-primary hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </button>
                  
                  <div className="mt-6 text-center text-gray-600">
                    <p>Don't have an account? <Link to="/signup" className="text-primary hover:underline">Register here</Link></p>
                  </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600 mb-4">For demo purposes, use:</p>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p><strong>Email:</strong> test@example.com</p>
                    <p><strong>Password:</strong> any password will work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login; 
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    address: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        restaurantName: '',
        ownerName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        city: '',
        address: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Register Your Restaurant | Foodly</title>
        <meta name="description" content="Register your homemade food restaurant on Foodly platform and grow your business in Pakistan." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-gray-800 mb-6">
                Register Your Restaurant
              </h1>
              <p className="text-lg text-gray-600">
                Join our growing community of homemade food entrepreneurs
              </p>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-200 text-green-700 px-6 py-8 rounded-lg mb-6 text-center">
                  <h2 className="heading-md mb-4">Registration Successful!</h2>
                  <p className="mb-6">Thank you for registering your restaurant with Foodly. Our team will review your information and contact you shortly.</p>
                  <Link to="/" className="btn-primary inline-block">
                    Return to Homepage
                  </Link>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-custom">
                  <h2 className="heading-md text-gray-800 mb-6">Restaurant Information</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="restaurantName" className="block text-gray-700 mb-2">
                          Restaurant Name*
                        </label>
                        <input
                          type="text"
                          id="restaurantName"
                          name="restaurantName"
                          value={formData.restaurantName}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Enter your restaurant name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="ownerName" className="block text-gray-700 mb-2">
                          Owner Name*
                        </label>
                        <input
                          type="text"
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Enter owner's full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                          Email Address*
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
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g., +92 300 1234567"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                          Password*
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Create a password"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                          Confirm Password*
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Confirm your password"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-gray-700 mb-2">
                          City*
                        </label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input-field"
                          required
                        >
                          <option value="">Select your city</option>
                          <option value="karachi">Karachi</option>
                          <option value="lahore">Lahore</option>
                          <option value="islamabad">Islamabad</option>
                          <option value="rawalpindi">Rawalpindi</option>
                          <option value="peshawar">Peshawar</option>
                          <option value="quetta">Quetta</option>
                          <option value="multan">Multan</option>
                          <option value="faisalabad">Faisalabad</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-gray-700 mb-2">
                          Restaurant Address*
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="input-field min-h-[100px]"
                          placeholder="Enter your restaurant's full address"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="btn-primary w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Registering...' : 'Register Restaurant'}
                      </button>
                    </div>
                    
                    <div className="mt-6 text-center text-gray-600">
                      <p>Already have an account? <Link to="/login" className="text-primary hover:underline">Login here</Link></p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup; 
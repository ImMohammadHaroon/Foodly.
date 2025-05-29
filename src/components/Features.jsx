import { FaStore, FaChartLine, FaMobileAlt, FaUsers } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaStore className="h-10 w-10 text-primary" />,
      title: "Digital Storefront",
      description: "Create your restaurant profile with photos, menu items, and business details to attract more customers."
    },
    {
      icon: <FaChartLine className="h-10 w-10 text-primary" />,
      title: "Business Growth",
      description: "Expand your customer base and increase revenue with our platform's wide reach across Pakistan."
    },
    {
      icon: <FaMobileAlt className="h-10 w-10 text-primary" />,
      title: "Order Management",
      description: "Easily manage orders, track deliveries, and handle customer requests through our intuitive dashboard."
    },
    {
      icon: <FaUsers className="h-10 w-10 text-primary" />,
      title: "Customer Engagement",
      description: "Build relationships with customers through ratings, reviews, and direct communication tools."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">
            Why Join <span className="text-primary">Food</span><span className="text-background">ly.</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform is designed specifically for homemade food businesses in Pakistan, 
            providing all the tools you need to succeed in the digital marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-custom border border-gray-100 hover:border-primary transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="heading-md mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaStore, FaClipboardList, FaChartLine } from 'react-icons/fa';
import CallToAction from '../components/CallToAction';

const Info = () => {
  const steps = [
    {
      icon: <FaUserPlus className="h-12 w-12 text-white" />,
      title: "Sign Up",
      description: "Create your restaurant account with basic information about your homemade food business.",
      color: "bg-primary"
    },
    {
      icon: <FaStore className="h-12 w-12 text-white" />,
      title: "Set Up Your Profile",
      description: "Add your menu items, business hours, delivery areas, and showcase your unique homemade specialties.",
      color: "bg-secondary"
    },
    {
      icon: <FaClipboardList className="h-12 w-12 text-white" />,
      title: "Manage Orders",
      description: "Receive and process orders through our intuitive dashboard, communicate with customers, and track deliveries.",
      color: "bg-accent"
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-white" />,
      title: "Grow Your Business",
      description: "Access analytics, gather customer feedback, and utilize our marketing tools to expand your homemade food business.",
      color: "bg-background"
    }
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Reach more customers beyond your immediate neighborhood."
    },
    {
      title: "Streamlined Operations",
      description: "Manage all aspects of your business from a single dashboard."
    },
    {
      title: "Customer Insights",
      description: "Gain valuable data about customer preferences and ordering patterns."
    },
    {
      title: "Marketing Support",
      description: "Benefit from our platform's marketing efforts to promote homemade food businesses."
    },
    {
      title: "Community Connection",
      description: "Join a network of homemade food entrepreneurs across Pakistan."
    },
    {
      title: "Technical Support",
      description: "Get assistance with any technical issues or questions about the platform."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works | Foodly - Homemade Food Delivery Platform</title>
        <meta name="description" content="Learn how Foodly works for homemade food restaurants in Pakistan. Sign up, set up your profile, manage orders, and grow your business." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-gray-800 mb-6">
                How Foodly Works
              </h1>
              <p className="text-lg text-gray-600">
                Your journey to growing your homemade food business starts here
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-800 mb-4">
                Simple Steps to Get Started
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our platform makes it easy for homemade food restaurants to establish their online presence 
                and start receiving orders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    {step.icon}
                    <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white shadow-custom flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="heading-md mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="section bg-accent/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-gray-800 mb-6">
                  Powerful Tools for Restaurant Owners
                </h2>
                <p className="text-gray-600 mb-6">
                  Our platform provides everything you need to manage and grow your homemade food business:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">User-friendly Dashboard</h3>
                      <p className="text-gray-600">Manage your restaurant profile, menu items, and orders from a single interface.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Order Management System</h3>
                      <p className="text-gray-600">Receive, process, and track orders in real-time with notifications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Customer Communication</h3>
                      <p className="text-gray-600">Chat with customers, address inquiries, and build relationships.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Analytics and Reporting</h3>
                      <p className="text-gray-600">Access insights about your business performance, popular items, and customer behavior.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-custom">
                <h3 className="heading-md text-gray-800 mb-6">Benefits for Your Business</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-primary transition-all duration-300">
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our platform
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">How much does it cost to join Foodly?</h3>
                  <p className="text-gray-600">
                    We offer flexible pricing plans designed for homemade food businesses of all sizes. 
                    Contact our team for detailed information about our pricing structure and to find the 
                    plan that best suits your needs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">What areas in Pakistan do you cover?</h3>
                  <p className="text-gray-600">
                    Our platform currently serves major cities in Pakistan including Karachi, Lahore, Islamabad, 
                    Rawalpindi, and Peshawar. We're continuously expanding to new areas.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">How do I receive payments for orders?</h3>
                  <p className="text-gray-600">
                    We offer multiple payment options including direct bank transfers, mobile wallets, and cash on delivery. 
                    Payments are processed securely and transferred to your account based on your preferred schedule.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">What support do you provide for restaurant owners?</h3>
                  <p className="text-gray-600">
                    We provide comprehensive support including platform training, marketing assistance, 
                    technical support, and business growth guidance. Our dedicated team is available to help 
                    you make the most of our platform.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">
                  Have more questions? We're here to help!
                </p>
                <Link to="/contact" className="btn-secondary">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default Info; 
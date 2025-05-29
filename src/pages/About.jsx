import { Helmet } from 'react-helmet';
import { FaUsers, FaHandshake, FaHeart } from 'react-icons/fa';
import CallToAction from '../components/CallToAction';

const About = () => {
  const values = [
    {
      icon: <FaUsers className="h-12 w-12 text-primary" />,
      title: "Community First",
      description: "We believe in building a strong community of homemade food entrepreneurs across Pakistan, supporting each other's growth and success."
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-primary" />,
      title: "Authentic Partnerships",
      description: "We form genuine partnerships with our restaurant owners, providing the tools and support they need to thrive in the digital marketplace."
    },
    {
      icon: <FaHeart className="h-12 w-12 text-primary" />,
      title: "Passion for Local Cuisine",
      description: "We're passionate about promoting authentic Pakistani homemade cuisine and helping talented home chefs share their culinary creations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Foodly - Homemade Food Delivery Platform</title>
        <meta name="description" content="Learn about Foodly, our mission, values, and how we support homemade food restaurants in Pakistan." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-secondary/20 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-gray-800 mb-6">
                About <span className="text-primary">Food</span><span className="text-background">ly</span>
              </h1>
              <p className="text-lg text-gray-600">
                Empowering homemade food entrepreneurs across Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Foodly was founded in 2023 with a simple mission: to connect talented home chefs with hungry customers across Pakistan.
                </p>
                <p className="text-gray-600 mb-4">
                  We recognized that many incredible homemade food businesses were struggling to reach customers beyond their immediate neighborhoods. At the same time, customers were seeking authentic, homemade meals prepared with love and care.
                </p>
                <p className="text-gray-600">
                  Our platform bridges this gap, providing homemade food restaurants with the digital tools they need to expand their reach, manage orders efficiently, and build lasting relationships with customers.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 md:h-80 bg-primary/20 rounded-lg absolute top-4 left-4"></div>
                <div className="w-full h-64 md:h-80 bg-background/30 rounded-lg relative z-10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Connecting Communities</h3>
                    <p className="text-gray-700">Through the love of homemade food</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section bg-accent/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at Foodly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-custom text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="heading-md mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-gray-800 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To empower homemade food entrepreneurs across Pakistan by providing them with the digital tools, 
                support, and community they need to build successful, sustainable businesses.
              </p>
              <div className="bg-primary/10 p-8 rounded-lg">
                <p className="text-lg font-medium text-gray-800 italic">
                  "We believe that every talented home chef deserves the opportunity to share their culinary creations 
                  with a wider audience and build a thriving business around their passion."
                </p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default About;
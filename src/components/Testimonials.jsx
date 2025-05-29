import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      business: "Ayesha's Kitchen",
      location: "Lahore",
      quote: "Joining Foodly transformed my small home kitchen into a thriving business. The platform's user-friendly interface and dedicated support team made the transition to digital seamless.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Muhammad Ali",
      business: "Ali's Homestyle Biryani",
      location: "Karachi",
      quote: "My family recipes are now reaching customers across the city. The order management system is excellent, and I've seen a 70% increase in business since joining the platform.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Fatima Zaidi",
      business: "Fatima's Dessert Haven",
      location: "Islamabad",
      quote: "As a woman entrepreneur, Foodly gave me the platform to showcase my dessert-making skills. Their marketing support helped me build a loyal customer base quickly.",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  return (
    <section className="section bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">
            Success Stories from Restaurant Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from homemade food entrepreneurs who have grown their businesses with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-custom relative"
            >
              <FaQuoteLeft className="text-primary/20 text-5xl absolute top-4 right-4" />
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-primary text-sm">{testimonial.business}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
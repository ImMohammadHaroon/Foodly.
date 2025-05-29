import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Foodly - Homemade Food Delivery Platform in Pakistan</title>
        <meta name="description" content="Foodly is a platform for homemade food restaurants in Pakistan to register, manage orders, and grow their business." />
      </Helmet>
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
};

export default Home; 
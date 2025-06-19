
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-chocolate-50 via-chocolate-100 to-gold-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-chocolate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-chocolate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-chocolate-900 mb-6 animate-fade-in text-shadow">
          Welcome to
          <span className="block text-gold-600">Janki's Choco Room</span>
        </h1>
        
        <p className="text-lg md:text-xl text-chocolate-700 mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          Indulge in our handcrafted premium chocolates made with the finest ingredients. 
          From rich dark chocolates to creamy milk varieties, we have something special for every chocolate lover.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Link
            to="/menu"
            className="group bg-chocolate-800 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-chocolate-700 transition-all duration-300 hover-scale shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Explore Our Menu
            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
          
          <Link
            to="/contact"
            className="bg-gold-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gold-600 transition-all duration-300 hover-scale shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="w-12 h-1 bg-gold-500 rounded"></div>
          <div className="w-4 h-4 bg-chocolate-800 rounded-full"></div>
          <div className="w-12 h-1 bg-gold-500 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

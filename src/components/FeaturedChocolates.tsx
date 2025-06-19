
import { chocolates } from '@/data/chocolates';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedChocolates = () => {
  const featuredChocolates = chocolates.filter(chocolate => chocolate.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-chocolate-900 mb-4">
            Featured Chocolates
          </h2>
          <p className="text-chocolate-600 text-lg max-w-2xl mx-auto">
            Discover our most popular handcrafted chocolates, made with love and the finest ingredients
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <div className="w-12 h-1 bg-gold-500 rounded"></div>
            <div className="w-4 h-4 bg-chocolate-800 rounded-full"></div>
            <div className="w-12 h-1 bg-gold-500 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredChocolates.map((chocolate, index) => (
            <div 
              key={chocolate.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard chocolate={chocolate} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 bg-chocolate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-chocolate-700 transition-all duration-300 hover-scale shadow-lg hover:shadow-xl"
          >
            View Full Menu
            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedChocolates;


import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { chocolates, getCategoryTitle } from '@/data/chocolates';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', 'dark', 'milk', 'white', 'protein'];
  
  const filteredChocolates = selectedCategory === 'all' 
    ? chocolates 
    : chocolates.filter(chocolate => chocolate.category === selectedCategory);

  const groupedChocolates = categories.reduce((acc, category) => {
    if (category === 'all') return acc;
    acc[category] = chocolates.filter(chocolate => chocolate.category === category);
    return acc;
  }, {} as Record<string, typeof chocolates>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-chocolate-50 via-white to-gold-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-chocolate-800 to-chocolate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-shadow">
            Our Chocolate Menu
          </h1>
          <p className="text-xl text-chocolate-100 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted chocolates and protein bars
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  selectedCategory === category
                    ? 'bg-chocolate-800 text-white shadow-lg'
                    : 'bg-chocolate-100 text-chocolate-700 hover:bg-chocolate-200'
                }`}
              >
                {category === 'all' ? 'All Chocolates' : getCategoryTitle(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'all' ? (
            // Show grouped by category
            <div className="space-y-12">
              {Object.entries(groupedChocolates).map(([category, items]) => (
                <div key={category} className="animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-chocolate-900 mb-8 text-center">
                    {getCategoryTitle(category)}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((chocolate, index) => (
                      <div 
                        key={chocolate.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ProductCard chocolate={chocolate} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show filtered results
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-chocolate-900 mb-8 text-center animate-fade-in">
                {getCategoryTitle(selectedCategory)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredChocolates.map((chocolate, index) => (
                  <div 
                    key={chocolate.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard chocolate={chocolate} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;

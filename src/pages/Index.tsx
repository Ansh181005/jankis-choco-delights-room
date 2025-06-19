
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedChocolates from '@/components/FeaturedChocolates';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedChocolates />
      
      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-chocolate-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-chocolate-900 mb-6">
                About Janki's Choco Room
              </h2>
              <p className="text-chocolate-700 text-lg leading-relaxed mb-6">
                Welcome to our world of premium handcrafted chocolates! At Janki's Choco Room, 
                we believe that every piece of chocolate should be an experience to remember. 
                Our chocolates are made with the finest ingredients sourced from around the world.
              </p>
              <p className="text-chocolate-700 text-lg leading-relaxed mb-6">
                From rich dark chocolates to creamy milk varieties and luxurious white chocolates, 
                each piece is crafted with love and attention to detail. We also offer nutritious 
                protein bars for health-conscious chocolate lovers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-chocolate-800 font-medium">Premium Ingredients</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-chocolate-800 font-medium">Handcrafted</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-chocolate-800 font-medium">Made with Love</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white rounded-2xl shadow-xl p-8 chocolate-gradient">
                <div className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-playfair font-bold text-chocolate-900 mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-chocolate-700">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      Fresh ingredients, handpicked quality
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      Wide variety of flavors and sizes
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      Affordable premium chocolates
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      Healthy protein bar options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

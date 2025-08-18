
import { ChocolateItem } from '@/data/chocolates';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  chocolate: ChocolateItem;
}

const ProductCard = ({ chocolate }: ProductCardProps) => {
  return (
    <Card className="group hover-scale bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${getCategoryGradient(chocolate.category)}`}></div>
      
      {chocolate.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={chocolate.image} 
            alt={chocolate.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-chocolate-900 group-hover:text-gold-600 transition-colors">
            {chocolate.name}
          </h3>
          {chocolate.featured && (
            <Badge variant="outline" className="bg-gold-100 text-gold-700 border-gold-300">
              Featured
            </Badge>
          )}
        </div>
        
        <p className="text-chocolate-600 text-sm mb-4 leading-relaxed">
          {chocolate.description}
        </p>
        
        <div className="space-y-2">
          {Object.entries(chocolate.prices).map(([size, price]) => (
            <div key={size} className="flex justify-between items-center py-1">
              <span className="text-sm font-medium text-chocolate-700">
                {formatSize(size)}
              </span>
              <span className="text-gold-600 font-semibold">
                ₹{price}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'dark': return 'from-chocolate-800 to-chocolate-600';
    case 'milk': return 'from-chocolate-600 to-chocolate-400';
    case 'white': return 'from-chocolate-200 to-chocolate-100';
    case 'protein': return 'from-gold-600 to-gold-400';
    default: return 'from-chocolate-600 to-chocolate-400';
  }
};

const formatSize = (size: string) => {
  switch (size) {
    case '100g': return '100 gm';
    case '500g': return '500 gm';
    case '1kg': return '1 kg';
    case 'bar': return '1 bar (55 gm)';
    default: return size;
  }
};

export default ProductCard;

import React from 'react';
import { Droplets, Heart, Sun } from 'lucide-react';

interface ProductTypeSelectorProps {
  selectedType: 'cleanser' | 'moisturizer' | 'sunscreen';
  onTypeChange: (type: 'cleanser' | 'moisturizer' | 'sunscreen') => void;
}

const ProductTypeSelector: React.FC<ProductTypeSelectorProps> = ({
  selectedType,
  onTypeChange
}) => {
  const types = [
    {
      id: 'cleanser' as const,
      label: 'Cleanser',
      icon: Droplets,
      description: 'Face wash, cleansing gel, or foam'
    },
    {
      id: 'moisturizer' as const,
      label: 'Moisturizer',
      icon: Heart,
      description: 'Face cream, lotion, or serum'
    },
    {
      id: 'sunscreen' as const,
      label: 'Sunscreen',
      icon: Sun,
      description: 'SPF protection for daily use'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {types.map((type) => {
        const Icon = type.icon;
        const isSelected = selectedType === type.id;
        
        return (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
              isSelected
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center mb-3">
              <Icon className={`w-6 h-6 mr-3 ${
                isSelected ? 'text-blue-600' : 'text-gray-600'
              }`} />
              <h3 className={`text-lg font-semibold ${
                isSelected ? 'text-blue-900' : 'text-gray-900'
              }`}>
                {type.label}
              </h3>
            </div>
            <p className={`text-sm ${
              isSelected ? 'text-blue-700' : 'text-gray-600'
            }`}>
              {type.description}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default ProductTypeSelector;

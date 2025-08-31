import React, { useState, useMemo } from 'react';
import { ExternalLink, Filter, X, ShoppingBag } from 'lucide-react';

interface Product {
  name: string;
  img: string;
  links: {
    shopee: string;
    amazon: string;
  };
  note: string;
  category: 'moisturizer' | 'cleanser';
}

interface FilterState {
  productType: string[];
  neaSeal: boolean;
  babySuitable: boolean;
  bdsSafe: boolean;
  asianBrand: boolean;
}

const ProductCurations: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    productType: [],
    neaSeal: false,
    babySuitable: false,
    bdsSafe: false,
    asianBrand: false
  });

  const [showFilters, setShowFilters] = useState(false);

  const productData = {
    "moisturizer": [
      {
        "name": "Derma Lab Gentle Relief Cream",
        "img": "https://www.dermalab.com.sg/wp-content/uploads/2024/02/Gentle-Relief-Cream_810x855.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/60HZnwC0RN",
          "amazon": "https://amzn.to/41foStg"
        },
        "note": "Clinically tested, BDS safe, Support Asian "
      },
      {
        "name": "Aveeno Dermexa Daily Emollient Body Cream",
        "img": "https://medias.watsons.com.sg/publishing/WTCSG-20307-back-zoom.jpg?version=1722864893",
        "links": {
          "shopee": "https://s.shopee.sg/1LVm0kZh0N",
          "amazon": "https://amzn.to/4fOOinu"
        },
        "note": "Clinically tested, NEA Seal accepted"
      },
      {
        "name": "Aveeno Baby Dermexa Moisturizing Cream",
        "img": "https://images.ctfassets.net/e64hqorbppkw/7aN8GJFcXZEzXFPJhIKt4b/a0ed79bd74e301f0925520e698031ab4/image-dermexa-01-01_0-en-sg",
        "links": {
          "shopee": "https://s.shopee.sg/2LOJCrgPYg",
          "amazon": "https://amzn.to/460L7pf"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "Aveeno Dermexa Fast & Long-Lasting Balm",
        "img": "https://m.media-amazon.com/images/I/71izhCp2FeS._AC_SX679_.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/BJv22Kown",
          "amazon": "https://amzn.to/473wgeR"
        },
        "note": "Clinically tested"
      },
      {
        "name": "Aveeno Baby Dermexa Nighttime Balm",
        "img": "https://m.media-amazon.com/images/I/7186RIshm2L._AC_SX679_.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/30e00NAXDz",
          "amazon": "https://amzn.to/4lByFRH"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "Cetaphil PRO AD Derma Repair Cream",
        "img": "https://www.cetaphil.com.sg/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-galderma-sg-m-catalog/en_SG/v1755800979042/PRO_AD_Repair_Cream_900x900.png?$staticlink$?sw=900&sh=900&sm=fit&q=85",
        "links": {
          "shopee": "https://s.shopee.sg/7fPqyB8529",
          "amazon": "https://amzn.to/4fP41Tr"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "Cetaphil PRO AD Derma Skin Restoring Moisturiser",
        "img": "https://www.cetaphil.com.sg/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-galderma-sg-m-catalog/en_SG/v1755800979042/PRO_AD_Skin_Restoring_Moisturiser_900x900.png?$staticlink$?sw=900&sh=900&sm=fit&q=85",
        "links": {
          "shopee": "https://s.shopee.sg/9UrV9S0IFu",
          "amazon": "https://amzn.to/462TQr3"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "Suu Balm Kids Ceramide Moisturiser",
        "img": "https://suubalm.com/cdn/shop/files/SBKC_75ml_Front.jpg?v=1739943919",
        "links": {
          "shopee": "https://s.shopee.sg/4VSpFWPJRK",
          "amazon": "https://amzn.to/4myt8wu"
        },
        "note": "Clinically tested, Suitable for Babies, BDS safe, Support Asian "
      },
      {
        "name": "Cerave Moisturizing Cream",
        "img": "https://m.media-amazon.com/images/I/61pIL2maVKL._AC_SX679_.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/4Aq0w3yXtS",
          "amazon": "https://amzn.to/4oR4Wa6"
        },
        "note": "Clinically tested, NEA Seal accepted"
      },
      {
        "name": "QV Dermcare Eczema Daily Cream with Ceramides",
        "img": "https://medias.watsons.com.sg/publishing/WTCSG-52800-front-zoom.jpg?version=1729535615",
        "links": {
          "shopee": "https://s.shopee.sg/1BCPMvWVMW",
          "amazon": "https://amzn.to/4fUKwcn"
        },
        "note": "Clinically tested, BDS safe"
      },
      {
        "name": "QV Dermcare Sting-Free Ointment With Ceramides",
        "img": "https://cdn-pharmacy.nhg.com.sg/aspa01as01prod/0010535_qv-dermcare-sting-free-ointment-with-ceramides-200g_510.jpeg",
        "links": {
          "shopee": "https://s.shopee.sg/1BCPMvWVMW",
          "amazon": "https://amzn.to/41VEMJi"
        },
        "note": "Clinically tested, BDS safe"
      },
      {
        "name": "QV Flare Up Cream",
        "img": "https://d17ghy23yblhjl.cloudfront.net/catalog/product/cache/f730d3370c19b17f3fbda09c41d2355f/n/e/new-qv-flare-up-cream.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/10RzUID5j",
          "amazon": "https://amzn.to/4lM2Wx4"
        },
        "note": "Clinically tested, BDS safe"
      }
    ],
    "cleanser": [
      {
        "name": "Aveeno Dermexa Moisturizing Wash",
        "img": "https://medias.watsons.com.sg/publishing/WTCSG-79149-back-zoom.jpg?version=1722847785",
        "links": {
          "shopee": "https://s.shopee.sg/8pbmvjAMFj",
          "amazon": "https://amzn.to/41WvCfF"
        },
        "note": "Clinically tested"
      },
      {
        "name": "Aveeno Baby Dermexa Moisturizing Wash",
        "img": "https://medias.watsons.com.sg/publishing/WTCSG-89391-side-zoom.jpg?version=1755771923",
        "links": {
          "shopee": "https://s.shopee.sg/802mMezRBQ",
          "amazon": "https://amzn.to/4lJv5VE"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "Cetaphil PRO AD Derma Skin Restoring Body Wash",
        "img": "https://www.cetaphil.com.sg/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-galderma-sg-m-catalog/default/dw7ff8a9c7/3499320003926/Cetaphil%20Singapore%20%20PRO%20AD%20Derma%20Skin%20Restoring%20Body%20Wash%20-295ml%20-%20Tiles%20-%20PDP.png?sw=900&sh=900&sm=fit&q=85",
        "links": {
          "shopee": "https://s.shopee.sg/7ATaN7edVP",
          "amazon": "https://amzn.to/4lDk4VB"
        },
        "note": "Clinically tested, NEA Seal accepted"
      },
      {
        "name": "Cetaphil Gentle Skin Cleanser",
        "img": "https://www.cetaphil.com.sg/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-galderma-sg-m-catalog/default/dw43abde88/3499320013055-Gentle_skin_Cleanser/Cetaphil%20Singapore%20Gentle%20Skin%20Cleanser%20500ml%20-%20Tiles%20-%20PDP.png?sw=900&sh=900&sm=fit&q=85",
        "links": {
          "shopee": "https://s.shopee.sg/4fmFOTcAMj",
          "amazon": "https://amzn.to/4mu3cSu"
        },
        "note": "Clinically tested, NEA Seal accepted"
      },
      {
        "name": "Suu Balm Gentle Moisturising Facial Cleanser",
        "img": "https://suubalm.com/cdn/shop/products/FACIAL-WASH-Unit-Box-Tube-Front.jpg?v=1660713183",
        "links": {
          "shopee": "https://s.shopee.sg/2VhkrmLLKY",
          "amazon": "https://amzn.to/45ud0Gc"
        },
        "note": "Clinically tested, BDS safe, Support Asian "
      },
      {
        "name": "Vytle Gentle Moisturising Cleanser",
        "img": "https://vytle.com/sg/wp-content/uploads/2024/04/New-Project-5.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/2VhmwvbqVI",
          "amazon": "https://amzn.to/3JvSHj2"
        },
        "note": "Clinically tested, Suitable for Babies, BDS safe, Support Asian "
      },
      {
        "name": "Cerave Hydrating Facial Cleanser",
        "img": "https://m.media-amazon.com/images/I/51flyLJHWtL._AC_SX679_.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/6VDviQSGNs",
          "amazon": "https://amzn.to/4fUlIRN"
        },
        "note": "Clinically tested, NEA Seal accepted"
      },
      {
        "name": "Cerave Baby Wash & Shampoo",
        "img": "https://m.media-amazon.com/images/I/51k9YsgXwdS._AC_SX679_.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/4L9R8afsjA",
          "amazon": "https://amzn.to/3HQWs23"
        },
        "note": "Clinically tested, NEA Seal accepted, Suitable for Babies"
      },
      {
        "name": "QV Dermcare Eczema Daily Wash with Ceramides",
        "img": "https://medias.watsons.com.sg/publishing/WTCSG-36460-front-zoom.jpg?version=1729288952",
        "links": {
          "shopee": "https://s.shopee.sg/1BCPMvWVMW",
          "amazon": "https://amzn.to/4mWkvLV"
        },
        "note": "Clinically tested, BDS safe"
      },
      {
        "name": "QV Flare Up Wash",
        "img": "https://d17ghy23yblhjl.cloudfront.net/catalog/product/cache/f730d3370c19b17f3fbda09c41d2355f/n/e/new-qv-flare-up-wash.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/3LGtx0KwHx",
          "amazon": "https://amzn.to/3HJZZzc"
        },
        "note": "Clinically tested, BDS safe"
      },
      {
        "name": "QV Flare Up Bath Oil",
        "img": "https://d17ghy23yblhjl.cloudfront.net/catalog/product/cache/f730d3370c19b17f3fbda09c41d2355f/n/e/new-qv-flare-up-bath-oil.jpg",
        "links": {
          "shopee": "https://s.shopee.sg/4VSrLgUSY5",
          "amazon": "https://amzn.to/41kLisW"
        },
        "note": "Clinically tested, BDS safe"
      }
    ]
  };

  // Transform data into unified format and sort alphabetically
  const allProducts: Product[] = useMemo(() => {
    const products: Product[] = [];
    
    Object.entries(productData).forEach(([category, items]) => {
      items.forEach(item => {
        products.push({
          ...item,
          category: category as 'moisturizer' | 'cleanser'
        });
      });
    });
    
    // Sort products alphabetically by name
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Filter products based on active filters
  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter(product => {
      // Product type filter
      if (activeFilters.productType.length > 0 && !activeFilters.productType.includes(product.category)) {
        return false;
      }

      // NEA Seal filter
      if (activeFilters.neaSeal && !product.note.toLowerCase().includes('nea seal accepted')) {
        return false;
      }

      // Baby suitable filter
      if (activeFilters.babySuitable && !product.note.toLowerCase().includes('suitable for babies')) {
        return false;
      }

      // BDS safe filter
      if (activeFilters.bdsSafe && !product.note.toLowerCase().includes('bds safe')) {
        return false;
      }

      // Asian brand filter
      if (activeFilters.asianBrand && !product.note.toLowerCase().includes('support asian')) {
        return false;
      }

      return true;
    });

    // Keep alphabetical sorting for filtered results
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [allProducts, activeFilters]);

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      productType: [],
      neaSeal: false,
      babySuitable: false,
      bdsSafe: false,
      asianBrand: false
    });
  };

  const hasActiveFilters = () => {
    return activeFilters.productType.length > 0 ||
           activeFilters.neaSeal ||
           activeFilters.babySuitable ||
           activeFilters.bdsSafe ||
           activeFilters.asianBrand;
  };

  const getProductTags = (product: Product) => {
    const tags = [];
    const note = product.note.toLowerCase();
    
    if (note.includes('nea seal accepted')) tags.push('NEA Seal');
    if (note.includes('suitable for babies')) tags.push('Baby Safe');
    if (note.includes('bds safe')) tags.push('BDS Safe');
    if (note.includes('support asian')) tags.push('Asian Brand');
    
    return tags;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold text-left">Curated Eczema-Safe Products</h2>
          </div>
          <div className="text-right">
            <div className="text-sm text-purple-100">
              {filteredProducts.length} of {allProducts.length} products
            </div>
          </div>
        </div>
        <p className="text-purple-100 text-left">
          Handpicked skincare products that meet NEA and AAD guidelines for eczema-prone skin
        </p>
      </div>

      <div className="p-6">
        {/* Filter Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter Products
              {hasActiveFilters() && (
                <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {Object.values(activeFilters).filter(v => Array.isArray(v) ? v.length > 0 : v).length}
                </span>
              )}
            </button>
            
            {hasActiveFilters() && (
              <button
                onClick={clearAllFilters}
                className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </button>
            )}
          </div>

          {showFilters && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              {/* Product Type Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-left">Product Type</h4>
                <div className="flex flex-wrap gap-2">
                  {['moisturizer', 'cleanser'].map(type => (
                    <button
                      key={type}
                      onClick={() => {
                        const newTypes = activeFilters.productType.includes(type)
                          ? activeFilters.productType.filter(t => t !== type)
                          : [...activeFilters.productType, type];
                        handleFilterChange('productType', newTypes);
                      }}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        activeFilters.productType.includes(type)
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-left">Features</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { key: 'neaSeal', label: 'NEA Seal Accepted' },
                    { key: 'babySuitable', label: 'Baby Suitable' },
                    { key: 'bdsSafe', label: 'BDS Safe' },
                    { key: 'asianBrand', label: 'Asian Brand' }
                  ].map(filter => (
                    <label key={filter.key} className="flex items-center text-left">
                      <input
                        type="checkbox"
                        checked={activeFilters[filter.key as keyof FilterState] as boolean}
                        onChange={(e) => handleFilterChange(filter.key as keyof FilterState, e.target.checked)}
                        className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{filter.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Desktop Layout - Vertical */}
              <div className="hidden md:block">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain bg-white"
                />
                <div className="p-4">
                  <div className="mb-3 text-left">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {product.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>

                  <div className="mb-3 text-left">
                    <div className="flex flex-wrap gap-1">
                      {getProductTags(product).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {product.links.shopee && (
                      <a
                        href={product.links.shopee}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded flex items-center transition-colors"
                      >
                        Shopee
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                    {product.links.amazon && (
                      <a
                        href={product.links.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded flex items-center transition-colors"
                      >
                        Amazon
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Horizontal */}
              <div className="md:hidden flex p-3 gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20 object-contain bg-white rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-2 text-left">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                      {product.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>

                  <div className="mb-2 text-left">
                    <div className="flex flex-wrap gap-1">
                      {getProductTags(product).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {product.links.shopee && (
                      <a
                        href={product.links.shopee}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-2 py-1 rounded flex items-center transition-colors"
                      >
                        Shopee
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                    {product.links.amazon && (
                      <a
                        href={product.links.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-2 py-1 rounded flex items-center transition-colors"
                      >
                        Amazon
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State - Only shows when filters are active and no products match */}
        {filteredProducts.length === 0 && hasActiveFilters() && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products match your filters</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filter criteria to see more products.</p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Curation Criteria */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2 text-left">Our Curation Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="text-left">
              <h4 className="font-medium mb-1">✓ NEA Guidelines Compliant</h4>
              <p className="text-xs">Free from ingredients on the NEA Ecz-clusion List</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-1">✓ AAD Recommended</h4>
              <p className="text-xs">Fragrance-free, dye-free formulations</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-1">✓ Dermatologist Tested</h4>
              <p className="text-xs">Clinically tested for sensitive skin</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-1">✓ Community Verified</h4>
              <p className="text-xs">Trusted by eczema community and healthcare professionals</p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-left">Affiliate Disclosure</h3>
          <p className="text-sm text-gray-600 mb-2 text-left">
            <strong>Transparency Notice:</strong> This page contains affiliate links to Shopee and Amazon. 
            When you purchase through these links, we may earn a small commission at no additional cost to you. 
            This helps support the maintenance and development of Eczema Checker.
          </p>
          <p className="text-sm text-gray-600 text-left">
            <strong>Our Promise:</strong> Product recommendations are based solely on adherence to NEA and AAD guidelines 
            for eczema-safe skincare. We only recommend products that meet our strict curation criteria, 
            regardless of affiliate partnerships. All prices and availability are subject to change on retailer websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCurations;

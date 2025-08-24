import React, { useState } from 'react';
import { FileText } from 'lucide-react';

interface IngredientInputProps {
  onAnalyze: (ingredients: string[]) => void;
  isLoading: boolean;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onAnalyze, isLoading }) => {
  const [ingredientList, setIngredientList] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (ingredientList.trim()) {
      const ingredients = ingredientList
        .split(/[,\n]/)
        .map(ing => ing.trim())
        .filter(ing => ing.length > 0);
      onAnalyze(ingredients);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-6">
        <FileText className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Ingredient Analysis</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ingredient-list" className="block text-sm font-medium text-gray-700 mb-2">
            Ingredient List (INCI Names)
          </label>
          <textarea
            id="ingredient-list"
            value={ingredientList}
            onChange={(e) => setIngredientList(e.target.value)}
            placeholder="Paste the full ingredient list here, separated by commas or line breaks..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            Copy the ingredient list from the product packaging or website.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading || !ingredientList.trim()}
          className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Analyzing...' : 'Check Ingredients'}
        </button>
      </form>
    </div>
  );
};

export default IngredientInput;

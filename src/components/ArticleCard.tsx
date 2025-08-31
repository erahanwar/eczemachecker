import React from 'react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 text-left">
        {article.content.substring(0, 200)}...
      </p>
      <button
        onClick={() => onReadMore(article)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
      >
        Read Full Article
      </button>
    </div>
  );
}

export default ArticleCard;

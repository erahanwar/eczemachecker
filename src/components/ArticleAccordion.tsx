import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Article } from '../data/articles';
import { trackArticleView } from '../utils/analytics';

interface ArticleAccordionProps {
  articles: Article[];
}

function ArticleAccordion({ articles }: ArticleAccordionProps) {
  const [openArticle, setOpenArticle] = useState<number | null>(null);

  const toggleArticle = (index: number) => {
    const newOpenArticle = openArticle === index ? null : index;
    setOpenArticle(newOpenArticle);
    
    // Track article view when opened
    if (newOpenArticle !== null) {
      trackArticleView(articles[index].title);
    }
  };

  const formatContent = (content: string) => {
    // Split content into paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle bullet points
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n');
        const beforeBullets = lines.filter(line => !line.trim().startsWith('•'));
        const bulletPoints = lines.filter(line => line.trim().startsWith('•'));
        
        return (
          <div key={index} className="mb-4">
            {beforeBullets.map((line, lineIndex) => (
              <p key={lineIndex} className="mb-2 text-gray-700 leading-relaxed">
                {formatTextWithBold(line)}
              </p>
            ))}
            {bulletPoints.length > 0 && (
              <ul className="list-none space-y-2 ml-0">
                {bulletPoints.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-gray-700 leading-relaxed">
                    <span className="text-blue-600 mr-2">•</span>
                    {formatTextWithBold(bullet.replace('•', '').trim())}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      
      // Handle step headers (like "Step 1:", "Step 2:", etc.)
      if (paragraph.includes('**Step ') && paragraph.includes('**')) {
        const parts = paragraph.split('**');
        return (
          <div key={index} className="mb-4">
            {parts.map((part, partIndex) => {
              if (part.includes('Step ') && partIndex % 2 === 1) {
                return (
                  <h4 key={partIndex} className="font-bold text-blue-600 mb-2">
                    {part}
                  </h4>
                );
              } else if (part.trim()) {
                return (
                  <p key={partIndex} className="text-gray-700 leading-relaxed">
                    {formatTextWithBold(part)}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {formatTextWithBold(paragraph)}
        </p>
      );
    });
  };

  const formatTextWithBold = (text: string) => {
    // Handle bold text marked with **
    const parts = text.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Educational Articles</h3>
      
      {articles.map((article, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleArticle(index)}
            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
          >
            <h4 className="text-lg font-semibold text-gray-900">{article.title}</h4>
            {openArticle === index ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {openArticle === index && (
            <div className="px-6 py-6 bg-white">
              <div className="prose max-w-none">
                {formatContent(article.content)}
                
                {article.references && article.references.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">References</h5>
                    <ol className="text-xs text-gray-600 space-y-2">
                      {article.references.map((ref, refIndex) => (
                        <li key={refIndex} className="leading-relaxed">
                          <span className="font-medium">[{refIndex + 1}]</span>{' '}
                          {ref.link ? (
                            <a 
                              href={ref.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline"
                            >
                              {ref.text}
                            </a>
                          ) : (
                            <span>{ref.text}</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArticleAccordion;

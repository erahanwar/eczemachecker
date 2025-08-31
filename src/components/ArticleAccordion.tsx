import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleAccordionProps {
  articles: Article[];
}

function ArticleAccordion({ articles }: ArticleAccordionProps) {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const toggleArticle = (slug: string) => {
    setExpandedArticle(expandedArticle === slug ? null : slug);
  };

  const formatContent = (content: string) => {
    // Split content into paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle numbered lists
      if (paragraph.includes('1)') || paragraph.includes('2)') || paragraph.includes('3)') || paragraph.includes('4)') || paragraph.includes('5)')) {
        const lines = paragraph.split('\n');
        return (
          <div key={index} className="mb-4">
            {lines.map((line, lineIndex) => {
              if (line.match(/^\d+\)/)) {
                // Extract the number and content
                const parts = line.split(') ');
                const number = parts[0] + ')';
                const content = parts.slice(1).join(') ');
                
                // Handle bold text in content
                const formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                
                return (
                  <p key={lineIndex} className="mb-2 text-left">
                    <span className="font-semibold text-blue-600">{number}</span>{' '}
                    <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
                  </p>
                );
              } else if (line.trim()) {
                return (
                  <p key={lineIndex} className="mb-2 text-left">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }
      
      // Handle step-by-step content
      if (paragraph.includes('**Step')) {
        const lines = paragraph.split('\n');
        return (
          <div key={index} className="mb-4">
            {lines.map((line, lineIndex) => {
              if (line.includes('**Step')) {
                const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-600">$1</strong>');
                return (
                  <p key={lineIndex} className="mb-2 text-left">
                    <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
                  </p>
                );
              } else if (line.trim()) {
                return (
                  <p key={lineIndex} className="mb-2 text-left ml-4">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }
      
      // Handle regular paragraphs with bold text and italics
      const formattedParagraph = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      return (
        <p key={index} className="mb-4 text-left leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
      );
    });
  };

  return (
    <div className="space-y-4 w-full">
      {articles.map((article) => {
        const isExpanded = expandedArticle === article.slug;
        
        return (
          <div key={article.slug} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden w-full">
            {/* Article Header */}
            <button
              onClick={() => toggleArticle(article.slug)}
              className="w-full px-6 md:px-8 lg:px-12 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight pr-4">
                {article.title}
              </h3>
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>

            {/* Article Content */}
            {isExpanded && (
              <div className="px-6 md:px-8 lg:px-12 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed">
                    {formatContent(article.content)}
                  </div>

                  {/* References */}
                  {article.references && article.references.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4 text-left">References</h4>
                      <div className="space-y-3">
                        {article.references.map((ref, index) => (
                          <div key={index} className="text-xs md:text-sm text-gray-600 text-left">
                            <span className="font-medium">[{index + 1}]</span>{' '}
                            <span>{ref.text}</span>
                            {ref.link && (
                              <a
                                href={ref.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-600 hover:text-blue-800 inline-flex items-center"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ArticleAccordion;

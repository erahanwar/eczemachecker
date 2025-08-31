import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!isOpen || !article) return null;

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 text-left">
            {article.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="prose prose-gray max-w-none">
            {formatContent(article.content)}
          </div>

          {/* References */}
          {article.references && article.references.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">References</h3>
              <div className="space-y-3">
                {article.references.map((ref, index) => (
                  <div key={index} className="text-sm text-gray-600 text-left">
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

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;

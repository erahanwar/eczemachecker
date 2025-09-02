import React from 'react';

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const formatContent = (text: string) => {
    // Split content into paragraphs
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle bold text with ** markdown
      const formattedParagraph = paragraph.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-blue-600">$1</strong>'
      );
      
      // Handle bullet points
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n');
        const bulletItems = lines.map((line, lineIndex) => {
          if (line.trim().startsWith('•')) {
            const bulletText = line.replace('•', '').trim();
            const formattedBulletText = bulletText.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="font-semibold text-blue-600">$1</strong>'
            );
            return (
              <li key={lineIndex} className="mb-2">
                <span dangerouslySetInnerHTML={{ __html: formattedBulletText }} />
              </li>
            );
          }
          return null;
        }).filter(Boolean);
        
        if (bulletItems.length > 0) {
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 ml-4">
              {bulletItems}
            </ul>
          );
        }
      }
      
      // Regular paragraph
      return (
        <p 
          key={index} 
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <div className="prose prose-gray max-w-none">
      {formatContent(content)}
    </div>
  );
};

export default ArticleContent;

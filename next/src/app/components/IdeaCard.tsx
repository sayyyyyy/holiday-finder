import React from 'react';

interface Idea {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  if (!idea) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-4 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{idea.title}</h2>
      <p className="text-gray-700">{idea.description}</p>
    </div>
  );
};

export default IdeaCard;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import IdeaCard from "@/app/components/IdeaCard";

// データ構造の型定義
interface Idea {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

// ジャンルの定義
const CATEGORIES = [
  { key: "outdoor", name: "外出" },
  { key: "indoor", name: "家" },
  { key: "refresh", name: "リフレッシュ" },
  { key: "learning", name: "学び" },
];

export default function GenresPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIdea, setCurrentIdea] = useState<Idea | null>(null);

  // ideas.jsonからデータを取得
  useEffect(() => {
    fetch("/ideas.json")
      .then((res) => res.json())
      .then((data) => setIdeas(data));
  }, []);

  // ジャンルを選択して提案を取得する関数
  const getIdeaByCategory = (category: string) => {
    const filteredIdeas = ideas.filter((idea) => idea.category === category);
    if (filteredIdeas.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
      setCurrentIdea(filteredIdeas[randomIndex]);
      setSelectedCategory(category);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ジャンルを選んでください
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.key}
              onClick={() => getIdeaByCategory(category.key)}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                selectedCategory === category.key
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {currentIdea && (
        <div className="w-full max-w-md">
          <IdeaCard idea={currentIdea} />
        </div>
      )}

      <div className="mt-8">
        <Link href="/" passHref>
          <button className="text-blue-500 hover:underline">
            ホームに戻る
          </button>
        </Link>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import IdeaCard from "@/app/components/IdeaCard";

// データ構造の型定義
interface Idea {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [currentIdea, setCurrentIdea] = useState<Idea | null>(null);

  // ideas.jsonからデータを取得
  useEffect(() => {
    fetch("/ideas.json")
      .then((res) => res.json())
      .then((data) => {
        setIdeas(data);
        // 初期表示用にランダムな提案を1つセット
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setCurrentIdea(data[randomIndex]);
        }
      });
  }, []);

  // ランダムに提案を選ぶ関数
  const getRandomIdea = () => {
    if (ideas.length > 0) {
      const randomIndex = Math.floor(Math.random() * ideas.length);
      setCurrentIdea(ideas[randomIndex]);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          今日の過ごし方を提案します
        </h1>
        <div className="flex justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={getRandomIdea}
            className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ランダムで提案
          </button>
          <Link href="/genres" passHref>
            <button
              type="button"
              className="px-6 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ジャンルから選ぶ
            </button>
          </Link>
        </div>
      </div>

      {currentIdea && (
        <div className="w-full max-w-md">
          <IdeaCard idea={currentIdea} />
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={getRandomIdea}
              className="px-6 py-2 font-semibold text-blue-500 bg-transparent rounded-lg border border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              もう一度提案する
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

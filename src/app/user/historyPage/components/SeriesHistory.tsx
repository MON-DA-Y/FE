"use client";

import { useState } from "react";
import SeriesCard from "./SeriesCard";
import { Category } from "../../../../../types/category";

interface Card {
  id: number;
  type: Category;
  status: "ongoing" | "done";
  title: string;
}

interface Series {
  id: number;
  keyword: string;
  cards: Card[];
}

export default function SeriesHistory() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const seriesList: Series[] = [
    {
      id: 1,
      keyword: "트럼프",
      cards: [
        {
          id: 1,
          type: "MONEY",
          status: "ongoing",
          title: "트럼프, 그가 하고 있는 일",
        },
        { id: 2, type: "TECH", status: "done", title: "트럼프와 AI 규제" },
        { id: 3, type: "ISSUES", status: "done", title: "트럼프 발언 논란" },
      ],
    },
    {
      id: 2,
      keyword: "기후변화",
      cards: [
        {
          id: 4,
          type: "ISSUES",
          status: "ongoing",
          title: "기후 변화 국제 회의",
        },
        { id: 5, type: "TECH", status: "done", title: "친환경 에너지 혁신" },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-y-15">
      {seriesList.map((series) => (
        <div key={series.id}>
          <div className="grid grid-cols-3 gap-y-15">
            {series.cards.map((card) => (
              <SeriesCard
                key={card.id}
                type={card.type}
                keyword={series.keyword}
                status={card.status}
                title={card.title}
                onClick={() => {
                  setSelectedCard(card);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="font-bold text-lg mb-4">{selectedCard?.title}</h3>
            <p>모달 내용</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

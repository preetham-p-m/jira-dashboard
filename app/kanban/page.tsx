"use client";

import { useState } from "react";
import { cardsData, columns, ICard, IColumn } from "./columns";

const KanbanBoard = () => {
  const [cards, setCards] = useState(cardsData);
  const [kanbans] = useState(columns);
  const [dragedCard, setDraggedCard] = useState<ICard | null>(null);

  const onDragCard = (card: ICard) => {
    setDraggedCard(card);
  };

  const onDropCard = (column: IColumn) => {
    if (dragedCard?.column_id) {
      setCards([...cards.filter((c) => c.id !== dragedCard.id), {...dragedCard, column_id: column.id}]);
    }
  };

  return (
    <>
      <div className="mt-8">
        <h1 className="text-gray-900 text-center text-4xl font-bold">
          Kanban Board
        </h1>
      </div>
      <div className="mt-4 p-2 flex justify-between items-center">
        {kanbans.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 w-full mr-2 px-4 py-02 h-80"
          >
            <div>
              <p>{item.text}</p>
            </div>
            <div
              className="mt-2 p-2 bg-gray-900 h-full overflow-auto"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDropCard(item)}
            >
              {cards.map((c) => (
                <>
                  {c.column_id == item.id && (
                    <div
                      className="bg-gray-600 p-4 h-40 mb-2 rounded"
                      draggable
                      onDragStart={() => onDragCard(c)}
                    >
                      <p>{c.text}</p>
                      <p>{c.column_id}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KanbanBoard;

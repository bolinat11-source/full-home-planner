import { Stage, Layer, Rect, Text } from "react-konva";
import { useState } from "react";

interface Room {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
}

export default function EditorCanvas({ initialRooms }: { initialRooms: Room[] }) {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  const handleDragEnd = (id: number, e: any) => {
    const { x, y } = e.target.position();
    setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, x, y } : r)));
  };

  return (
    <Stage width={800} height={600} className="bg-gray-100">
      <Layer>
        {rooms.map((room) => (
          <>
            <Rect
              key={room.id}
              x={room.x}
              y={room.y}
              width={room.width}
              height={room.height}
              fill="#f3f4f6"
              stroke="#1f2937"
              strokeWidth={2}
              draggable
              onDragEnd={(e) => handleDragEnd(room.id, e)}
            />
            <Text
              x={room.x + 4}
              y={room.y + 4}
              text={room.name}
              fontSize={16}
              fill="#111827"
            />
          </>
        ))}
      </Layer>
    </Stage>
  );
}
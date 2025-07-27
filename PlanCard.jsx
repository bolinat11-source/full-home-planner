
import Image from 'next/image';

export default function PlanCard({ title, rooms, image }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg">
      <Image src={image} width={400} height={250} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">חדרים: {rooms}</p>
      </div>
    </div>
  );
}

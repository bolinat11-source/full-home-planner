import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function PlanPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `http://localhost:8000/plans/${id}` : null, fetcher);

  if (error) return <div className="p-4">Error loading plan</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4 rtl:text-right">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <img src={data.cover_img_url} alt={data.title} className="w-full h-80 object-cover mb-4" />
      <p className="mb-4">שטח: {data.area_m2} מ"ר · {data.rooms} חדרים</p>
      <Link
        href={`/editor/${id}`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        ערוך תכנית
      </Link>
    </div>
  );
}
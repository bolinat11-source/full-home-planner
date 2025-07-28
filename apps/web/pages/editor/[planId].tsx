import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// react-konva needs window; use dynamic import with ssr:false
const EditorCanvas = dynamic(() => import("../../components/EditorCanvas"), { ssr: false });

export default function EditorPage() {
  const router = useRouter();
  const { planId } = router.query;
  const { data, error } = useSWR(planId ? `http://localhost:8000/plans/${planId}` : null, fetcher);

  if (error) return <div className="p-4">Error loading plan</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  // assume data has floor_json property or placeholder
  const initialRooms = data.floor_json ?? [
    { id: 1, x: 50, y: 50, width: 200, height: 150, name: "סלון" },
    { id: 2, x: 300, y: 100, width: 120, height: 120, name: "מטבח" }
  ];

  return (
    <div className="container mx-auto p-4 rtl:text-right">
      <h1 className="text-xl font-bold mb-4">עריכת תכנית – {data.title}</h1>
      <div className="border shadow rounded">
        <EditorCanvas initialRooms={initialRooms} />
      </div>
    </div>
  );
}
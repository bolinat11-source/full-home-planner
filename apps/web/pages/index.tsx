import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";
import type { NextPage } from "next";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Plan {
  id: number;
  title: string;
  cover_img_url: string;
  area_m2: number;
  rooms: number;
}

const Home: NextPage = () => {
  const { data, error } = useSWR<Plan[]>("http://localhost:8000/plans", fetcher);

  if (error) return <div className="p-4">Failed to load</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <>
      <Head>
        <title>מאגר תכניות</title>
      </Head>
      <main className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((plan) => (
          <Link key={plan.id} href={`/plans/${plan.id}`} className="border rounded shadow hover:shadow-lg transition overflow-hidden">
            <img src={plan.cover_img_url} alt={plan.title} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h3 className="font-bold text-lg mb-1 rtl:text-right">{plan.title}</h3>
              <p className="text-sm rtl:text-right">{plan.area_m2} מ״ר · {plan.rooms} חדרים</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Home;
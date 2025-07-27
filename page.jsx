
'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PlanCard from '@/components/PlanCard';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">מערכת חיפוש תוכניות בתים</h1>
      <div className="flex gap-4 justify-center mb-8">
        <Input placeholder="שטח (מ״ר)" className="w-1/4" />
        <Input placeholder="מספר חדרים" className="w-1/4" />
        <Input placeholder="סגנון" className="w-1/4" />
        <Button>חיפוש</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PlanCard title='בית מודרני 120 מ"ר' rooms="5" image="/images/house1.jpg" />
        <PlanCard title='בית קלאסי 150 מ"ר' rooms="6" image="/images/house2.jpg" />
        <PlanCard title='בית משפחתי 200 מ"ר' rooms="7" image="/images/house3.jpg" />
      </div>
    </div>
  );
}

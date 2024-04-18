"use client";
import { P5Wrapper } from "@/components/p5-wrapper";
import { SelectedSearch } from "@/utils/types";
import { useParams } from "next/navigation";
import { useState } from "react";

// export const dynamic = "force-dynamic";

export default function Home() {
  const { name } = useParams();

  return (
    <main className="flex min-h-screen">
      {/* <div className="container grid gap-4 px-4 text-center md:px-6"> */}
      <h1 className="text-2xl">Search 2</h1>
      <P5Wrapper search={name as SelectedSearch} />
      {/* </div> */}
    </main>
  );
}

"use client";

import { useEffect } from "react";
import Generator from "@/components/Generator";
import useRandColor from "@/hooks/useRandColor";

export default function Home() {
  const { color, setColor, newColor } = useRandColor();
  return (
    <main
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <Generator />
    </main>
  );
}

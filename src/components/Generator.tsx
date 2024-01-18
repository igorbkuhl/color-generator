import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useRandColor from "@/hooks/useRandColor";
import Button from "@/components/Button"

const NoSSR = dynamic(() => import("../components/ColorCode"), {ssr: false})

export default function Generator() {
  const { color, setColor, newColor, changeColor, isCode, setIsCode } = useRandColor();

  return (
    <div className="flex flex-col">
      <Button />
      <NoSSR />
    </div>
  );
}

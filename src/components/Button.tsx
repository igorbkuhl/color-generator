import { useEffect } from "react";
import useRandColor from "@/hooks/useRandColor";

export default function Button() {
  const { changeColor, setColor, newColor, generateColor } = useRandColor();

  return (
    <button
      onClick={changeColor}
      className="
      text-white p-4 border-2 border-white rounded-md
      bg-slate-800/50 backdrop-blur-sm"
    >
      Generate
    </button>
  )
}
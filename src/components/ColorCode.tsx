import { useEffect } from "react"
import useRandColor from "@/hooks/useRandColor";

export default function ColorCode() {
  const { color, setColor, isCode, setIsCode, newColor, changeColor, generateColor } = useRandColor();
 
  return (
    <p className="bg-slate-800/50 backdrop-blur-sm
      mt-2 p-5 rounded-md">
      {isCode ? color : newColor}
    </p>
  )
}
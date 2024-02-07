import useHex from "@/hooks/useHex";
import useRgb from "@/hooks/useRgb";

export default function ColorCode() {
  const { hex } = useHex(); 
  const { rgb } = useRgb();
 
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm
      mt-2 p-5 rounded-md text-center">
        <p>{hex}</p>
        <p>{rgb}</p>
    </div>
  )
}
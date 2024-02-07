import dynamic from "next/dynamic";
import useRgb from "@/hooks/useRgb";
import Button from "@/components/Button"

const NoSSR = dynamic(() => import("../components/ColorCode"), {ssr: false})

export default function Generator() {
  const { rgb, generateRgb } = useRgb();

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: rgb,
      }}
    >
      <div className="flex flex-col w-72">
        <Button func={generateRgb} />
        <NoSSR text={rgb} />
      </div>
    </div>
  );
}

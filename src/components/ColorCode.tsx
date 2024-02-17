interface ColorCodeProps {
  hex: string;
  rgb: string;
}

export default function ColorCode(props: ColorCodeProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm
      mt-2 p-5 rounded-md text-center">
        <p>{props.hex}</p>
        <p>{props.rgb}</p>
    </div>
  )
}


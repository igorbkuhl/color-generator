interface ColorCodeProps {
  hex: string;
  rgb: string;
  hsl: string;
  hsv: string;
}

export default function ColorCode(props: ColorCodeProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm
      mt-2 p-5 rounded-md text-center">
        <p>{props.hex}</p>
        <p>{props.rgb}</p>
        <p>{props.hsl}</p>
        <p>{props.hsv}</p>
    </div>
  )
}


interface ColorCodeProps {
  children: any;
}

export default function ColorCode(props: ColorCodeProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm
      mt-2 p-5 rounded-md text-center"
    >
      {props.children}
    </div>
  )
}


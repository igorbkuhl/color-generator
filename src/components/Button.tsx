interface ButtonProps {
  func: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.func}
      className="
      text-white p-4 border-2 border-white rounded-md
      bg-slate-800/50 backdrop-blur-sm"
    >
      Generate
    </button>
  )
}
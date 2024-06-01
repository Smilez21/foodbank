import { useRef, useState } from "react"

export default function IconButton({
  children,
  text,
  color,
  ...props
}: {
  children: React.ReactNode;
  text: string;
  color?: string;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null); // Add type annotation here
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${color ? `bg-${color}` : 'bg-black'} hover:bg-opacity-80 text-white flex p-2 items-center rounded-lg transition duration-300 ease-out`}

      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">{text}</span>
      </div>
    </button>
  );
}
type Props = {
  methods: number;
  className?: string;

  style?: {
    "text-size"?: string,
    padding?: string;
  }
}

const BadgeAppActions = ({ methods, className = "", style = { "text-size": "text-sm", padding: "py-1 px-2" } }: Props) => {
  return (
    <div className={`flex w-max rounded-full border bg-neutral-100 ${style.padding} ${style["text-size"]} text-neutral-500 ${className}`}>
      <span className="">{methods} ACTIONS</span>
    </div>
  )
}

export default BadgeAppActions
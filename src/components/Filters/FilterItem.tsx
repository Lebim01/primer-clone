import type { ReactNode } from "react"

type Props = {
  title: string;
  icon: ReactNode;
  value: string;
  onClick?: () => void;
}

const FilterItem = ({ title, icon, value, onClick }: Props) => {
  return (
    <div className="flex w-full gap-3 rounded border p-2 hover:cursor-pointer hover:bg-hover-card dark:border-zinc-500 dark:hover:bg-gray-600/30" onClick={onClick}>
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xxs text-neutral-500 dark:text-neutral-300">{title}</span>
        <span className="text-sm font-bold">{value}</span>
      </div>
    </div>
  )
}

export default FilterItem
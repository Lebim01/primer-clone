import type { ReactNode } from "react"

type Props = {
  title: string;
  icon: ReactNode;
  value: string;
  onClick?: () => void;
}

const FilterItem = ({ title, icon, value, onClick }: Props) => {
  return (
    <div className="flex w-full gap-3 rounded border p-2 hover:cursor-pointer hover:bg-hover-card" onClick={onClick}>
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xxs text-neutral-500">{title}</span>
        <span className="text-sm font-bold">{value}</span>
      </div>
    </div>
  )
}

export default FilterItem
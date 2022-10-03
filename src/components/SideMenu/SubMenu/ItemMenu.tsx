import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import useCollapse from "../useCollapse"
import { BsLockFill } from "react-icons/bs"

const ItemMenu = (props: IMenuItem) => {
  const router = useRouter()
  const isActive = useMemo(() => router.pathname.startsWith(props.path), [router.pathname, props.path])
  const collapse = useCollapse()

  return (
    <Link href={props.locked ? "#" : props.path}>
      <div className={`text-selection-none flex items-center gap-4 rounded px-4 py-1 font-medium ${props.locked ? "" : "hover:cursor-pointer hover:bg-hover-card hover:text-black"} ${isActive ? "border-r-4 border-primary text-black" : "text-neutral-400"} menu-item transition-all`}>
        <span className={collapse ? "text-2xl" : ""}>{props.icon}</span>
        {!collapse && <span className="flex-1">{props.name}</span>}
        {props.locked && <BsLockFill size={8} />}
      </div>
    </Link>
  )
}

export default ItemMenu
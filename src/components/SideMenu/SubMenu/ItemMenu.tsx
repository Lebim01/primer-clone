import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

const ItemMenu = (props: IMenuItem) => {
  const router = useRouter()
  const isActive = useMemo(() => router.pathname == props.path, [router.pathname, props.path])

  return (
    <Link href={props.path}>
      <div className={`flex items-center gap-4 rounded px-4 py-1 font-medium hover:cursor-pointer hover:bg-neutral-100 hover:text-black ${isActive ? "border-r-4 border-primary text-black" : "text-neutral-400"}`}>
        {props.icon}
        <span>{props.name}</span>
      </div>
    </Link>
  )
}

export default ItemMenu
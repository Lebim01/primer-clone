import HeaderBreadcrumb from "@src/components/HeaderBreadcrumb/HeaderBreadcrumb"
import { ALL_MENUS } from "@src/constans/menu"
import { useRouter } from "next/router"
import { ReactNode, useMemo } from "react"

type Props = {
  children: ReactNode;
}

const LayoutBody = (props: Props) => {
  const router = useRouter()
  const menu = useMemo(() => ALL_MENUS.find(m => m.path == router.pathname), [router.pathname])

  return (
    <div className="flex w-full flex-col">
      <HeaderBreadcrumb path={menu ? [menu] : [{ icon: "", name: "Page not found", path: "/404" }]} />
      <div className="p-8">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutBody
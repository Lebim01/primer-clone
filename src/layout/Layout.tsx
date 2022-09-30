import SideMenu from "@src/components/SideMenu/SideMenu"
import { ReactNode } from "react"

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      {props.children}
    </div>
  )
}

export default Layout
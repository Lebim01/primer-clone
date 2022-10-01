import HeaderBreadcrumb from "@src/components/HeaderBreadcrumb/HeaderBreadcrumb"
import { ReactNode } from "react"

type Props = {
  path?: IMenuItem[];
  children: ReactNode;
}

const LayoutBody = (props: Props) => {
  return (
    <div className="flex max-h-screen w-full flex-col overflow-hidden">
      <HeaderBreadcrumb />
      <div className="h-full w-full overflow-auto">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutBody
import HeaderBreadcrumb from "@src/components/HeaderBreadcrumb/HeaderBreadcrumb"
import { ReactNode } from "react"

type Props = {
  path?: IMenuItem[];
  children: ReactNode;
}

const LayoutBody = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <HeaderBreadcrumb />
      <div className="h-full w-full">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutBody
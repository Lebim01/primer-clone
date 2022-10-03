import { useTour } from "@reactour/tour";
import HeaderBreadcrumb from "@src/components/HeaderBreadcrumb/HeaderBreadcrumb"
import { ReactNode, useMemo, useEffect } from "react"

type Props = {
  path?: IMenuItem[];
  children: ReactNode;
}

const WELCOME_TOUR = "tour-welcome"

const LayoutBody = (props: Props) => {
  const { setIsOpen } = useTour()

  const openTourByDefault = useMemo(() => {
    return typeof localStorage != "undefined" && localStorage.getItem(WELCOME_TOUR) ? false : true
  }, [])

  useEffect(() => {
    if(typeof openTourByDefault == "boolean"){
      if(openTourByDefault){
        setIsOpen(true)
      }
    }
  }, [openTourByDefault])

  return (
    <div className="flex max-h-screen w-full max-w-full flex-col overflow-hidden">
      <HeaderBreadcrumb />
      <div className="h-full w-full overflow-auto">
        {props.children}
      </div>
    </div>
  )
}

export default LayoutBody
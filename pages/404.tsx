import { useEffect } from "react"
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"

const Page404 = () => {
  const { setActionButtons } = useHeaderContext()

  useEffect(() => {
    setActionButtons(null)
  }, [])

  return (
    <div className="p-8">
      OOOPS
    </div>
  )
}

export default Page404
import { useEffect } from "react"
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"

const Connections = () => {
  const { setActionButtons } = useHeaderContext()

  useEffect(() => {
    setActionButtons(null)
  }, [])

  return (
    <div className="p-8">
      Connections
    </div>
  )
}

export default Connections
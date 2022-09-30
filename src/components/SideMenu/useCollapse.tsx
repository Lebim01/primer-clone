import { useRouter } from "next/router"
import { useMemo } from "react"

const useCollapse = () => {
  const router = useRouter()

  const useCollapsed = useMemo(() => {
    return router.pathname == "/workflows/[uuid]"
  }, [router.pathname])

  return useCollapsed
}

export default useCollapse
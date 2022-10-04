import useWindowSize from "@src/hooks/useWindowSize"
import { useRouter } from "next/router"
import { useMemo } from "react"

const useCollapse = () => {
  const router = useRouter()

  const { width } = useWindowSize()

  const isSmallScreen = useMemo(() => {
    return width ? width <= 768 : false
  }, [width])

  const useCollapsed = useMemo(() => {
    return router.pathname == "/workflows/[uuid]"
  }, [router.pathname])

  return useCollapsed || isSmallScreen
}

export default useCollapse
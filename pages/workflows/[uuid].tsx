import { useMemo, useEffect } from "react"
import { ALL_MENUS } from "@src/constans/menu"
import { fetcherGET } from "@src/services/fetchers"
import { useRouter } from "next/router"
import useSWR from "swr"
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"

const WorkflowEdit = () => {
  const router = useRouter()
  const { data: workflow } = useSWR<IWorkflow>(`/api/workflow/${router.query.uuid}`, fetcherGET<IWorkflow>({}))
  const { setPath } = useHeaderContext()

  const path: IMenuItem[] = useMemo(() => {
    const workflows: IMenuItem = ALL_MENUS.find(r => r.path == "/workflows")!
    const current: IMenuItem = { icon: null, name: workflow?.name!, path: router.asPath }
    return [workflows, current]
  }, [workflow, router.asPath])

  useEffect(() => {
    setPath(path)
  }, [path, setPath])

  return (
    <>
      EDITAR
    </>
  )
}

export default WorkflowEdit
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { ALL_MENUS } from "@src/constans/menu";
import { fetcherGET } from "@src/services/fetchers";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode, useMemo, useEffect, useCallback } from "react";
import { useNodesState, useEdgesState, addEdge } from "reactflow"
import useSWR from "swr";

import type { OnNodesChange, OnEdgesChange } from "reactflow"

type Props = {
  children: ReactNode;
}

interface IWorkflowBuildContext {
  nodes: any[],
  edges: any[],
  onNodesChange: OnNodesChange,
  onEdgesChange: OnEdgesChange,
  onConnect: (params: any) => void;
}

const WorkflowBuildContext = createContext<IWorkflowBuildContext>({
  nodes: [],
  edges: [],
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onConnect: () => {}
})

const WorkflowBuildContextProvider = (props: Props) => {
  const router = useRouter()
  const { data: workflow } = useSWR<IWorkflow>(`/api/workflow/${router.query.uuid}`, fetcherGET<IWorkflow>({}))
  const { data: initialNodes } = useSWR<IWorkflowNode[]>(`/api/workflow/${router.query.uuid}/nodes`, fetcherGET<IWorkflowNode[]>({}))

  /**
   * set action buttons
   */
  const { setPath, setActionButtons } = useHeaderContext()

  const path: IMenuItem[] = useMemo(() => {
    const workflows: IMenuItem = ALL_MENUS.find(r => r.path == "/workflows")!
    const current: IMenuItem = { icon: null, name: workflow?.name!, path: router.asPath }
    return [workflows, current]
  }, [workflow, router.asPath])

  // @ts-ignore:next-line
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setActionButtons(
      <>
       <button className="rounded border bg-black px-4 py-1 text-lg text-white">
         Publish
       </button>
      </>
    )
  }, [])

  useEffect(() => {
    setPath(path)
  }, [path])

  useEffect(() => {
    setNodes(initialNodes || [])
  }, [initialNodes])

  const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);
  

  return (
    <WorkflowBuildContext.Provider 
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect
      }}
    >
      {props.children}
    </WorkflowBuildContext.Provider>
  )
}

export const useWorkflowBuildContext = () => {
  return useContext(WorkflowBuildContext)
}

export default WorkflowBuildContextProvider
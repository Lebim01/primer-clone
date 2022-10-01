import { useMemo, useEffect, useCallback } from "react"
import { ALL_MENUS } from "@src/constans/menu"
import { fetcherGET } from "@src/services/fetchers"
import { useRouter } from "next/router"
import useSWR from "swr/immutable"
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { NodeTypes } from "@src/components/WorkflowNodes"

const WorkflowEdit = () => {
  const router = useRouter()
  const { data: workflow } = useSWR<IWorkflow>(`/api/workflow/${router.query.uuid}`, fetcherGET<IWorkflow>({}))
  const { data: initialNodes } = useSWR<IWorkflowNode[]>(`/api/workflow/${router.query.uuid}/nodes`, fetcherGET<IWorkflowNode[]>({}))
  const { setPath, setActionButtons } = useHeaderContext()

  const path: IMenuItem[] = useMemo(() => {
    const workflows: IMenuItem = ALL_MENUS.find(r => r.path == "/workflows")!
    const current: IMenuItem = { icon: null, name: workflow?.name!, path: router.asPath }
    return [workflows, current]
  }, [workflow, router.asPath])

  useEffect(() => {
    setActionButtons(
      <>
       <button className="rounded border bg-black px-4 py-1 text-lg text-white">
         Publish
       </button>
      </>
    )
  }, [path, setPath])

  useEffect(() => {
    setPath(path)
  }, [])

  useEffect(() => {
    //setNodes(initialNodes || [])
  }, [initialNodes])

  // @ts-ignore:next-line
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([
    {
      "position": {
        "x": 0,
        "y": 80
      },
      "data": {
        "paymentMethod": "visa"
      },
      "type": "createPayment",
      "id": "node-09465e4e-bbb4-4e73-9b6f-8f9e9afa5809"
    },
    {
      "position": {
        "x": 120,
        "y": 80
      },
      "data": {
        "paymentMethod": "visa"
      },
      "type": "createPayment",
      "id": "node-09465e4e-bbb4-4e73-9b6f-8f9e9afa5855"
    }
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);

  const nodeTypes = useMemo(() => NodeTypes, []);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        nodeTypes={nodeTypes}
      >
        <Background />
      </ReactFlow>
    </>
  )
}

export default WorkflowEdit
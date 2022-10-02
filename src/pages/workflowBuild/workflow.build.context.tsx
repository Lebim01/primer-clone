// @ts-nocheck
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { ALL_MENUS } from "@src/constans/menu";
import { fetcherGET } from "@src/services/fetchers";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode, useMemo, useEffect, useCallback } from "react";
import { useNodesState, useEdgesState, addEdge } from "reactflow"
import useSWR from "swr";
import { uuid } from "uuidv4"

import type { OnNodesChange, OnEdgesChange, Node, Edge } from "reactflow"
import { useModalContext } from "@src/context/modal.context";
import ModalConfirmation from "@src/modals/ModalConfirmation";

type Props = {
  children: ReactNode;
}

interface IWorkflowBuildContext {
  nodes: any[],
  edges: any[],
  onNodesChange: OnNodesChange,
  onEdgesChange: OnEdgesChange,
  onConnect: (params: any) => void;
  addNewNode: (method: IAppMethodFull) => void;
}

const WorkflowBuildContext = createContext<IWorkflowBuildContext>({
  nodes: [],
  edges: [],
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onConnect: () => {},
  addNewNode: () => {},
})

const WorkflowBuildContextProvider = (props: Props) => {
  const router = useRouter()
  const { openModal } = useModalContext()
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
       <button className="btn-primary" onClick={publish}>
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

  const publish = () => {
    openModal({
      children: ModalConfirmation,
      onSave: (_, onClose) => {
        setTimeout(() => {
          onClose()
        }, 1000)
      },
    })
  }

  const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);
  
  const addNewNode = (method: IAppMethodFull) => {
    const lastNode = nodes[nodes.length-1]
    const el = document.querySelector(`[data-id=${lastNode.id}]`)!
    
    const newPosition = {
      y: lastNode.position.y + (el?.clientHeight * 0.8),
      x: lastNode.position.x + el?.clientWidth + 80,
    }

    const newNode: Node<any> = {
      id: `node-${uuid()}`,
      data: {
        app_icon: method.app.icon_component,
        ...method.data
      },
      type: method.node_type,
      position: newPosition,
      draggable: false,
      targetPosition: 'left',
      sourcePosition: "none",
      last: true
    }

    setNodes((nodes) => {
      const _nodes = [...nodes]
      _nodes[_nodes.length-1].sourcePosition = "right"
      _nodes.push(newNode)
      return _nodes
    })

    const newEdge: Edge = {
      id: uuid(),
      source: lastNode.id,
      target: newNode.id,
      type: 'smoothstep',
    }

    setEdges([...edges, newEdge])
  }
  
  return (
    <WorkflowBuildContext.Provider 
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        addNewNode,
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
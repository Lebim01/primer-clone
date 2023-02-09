// @ts-nocheck
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { ALL_MENUS } from "@src/constans/menu";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode, useMemo, useEffect, useCallback, useState } from "react";
import { useNodesState, useEdgesState, addEdge, MarkerType } from "reactflow"
import { uuid } from "uuidv4"

import type { OnNodesChange, OnEdgesChange, Node, Edge } from "reactflow"
import { useModalContext } from "@src/context/modal.context";
import ModalConfirmation from "@src/modals/ModalConfirmation";

type Props = {
  children: ReactNode;
}

interface IRouteBuildContext {
  nodes: any[],
  edges: any[],
  onNodesChange: OnNodesChange,
  onEdgesChange: OnEdgesChange,
  onConnect: (params: any) => void;
  addNewNode: (node: { data: any, node_type: string }, position: { y: number, x: number }, sourceNode: string) => void;
  setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
}

const RouteBuildContext = createContext<IRouteBuildContext>({
  nodes: [],
  edges: [],
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onConnect: () => {},
  addNewNode: () => {},
  setNodes: () => {},
  setEdges: () => {}
})

const RouteBuildContextProvider = (props: Props) => {
  const router = useRouter()
  const { openModal } = useModalContext()
  const [route] = useState({
    name: "New route"
  })
  const [initialNodes] = useState([
    { id: 'node-1', type: 'newCondition', position: { x: 0, y: 0 } },
    { id: 'node-2', type: 'condition', position: { x: 0, y: 150 } },
  ])

  /**
   * set action buttons
   */
  const { setPath, setActionButtons } = useHeaderContext()

  const path: IMenuItem[] = useMemo(() => {
    const routes: IMenuItem = ALL_MENUS.find(r => r.path == "/routes")!
    const current: IMenuItem = { icon: null, name: route?.name!, path: router.asPath }
    return [routes, current]
  }, [route?.name, router.query.uuid])

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
  
  const addNewNode = (node: { data: any, node_type: string }, position: { y: number, x: number }, sourceNodeId) => {
    const newNode: Node<any> = {
      id: `node-${uuid()}`,
      data: {
        ...node.data
      },
      type: node.node_type,
      position,
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
      source: sourceNodeId,
      target: newNode.id,
      type: 'smoothstep',
    }

    if(node.node_type == "nodeProcessor"){
      newEdge.label = "50%"
      newEdge.labelShowBg = true
      newEdge.labelBgStyle = {
        fill: "#d9d9d9",
      }
      newEdge.labelBgBorderRadius = 100
      newEdge.markerEnd = {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: 'black',
      }
    }

    setEdges(edges => [...edges, newEdge])
  }
  
  return (
    <RouteBuildContext.Provider 
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        addNewNode,
        setNodes,
        setEdges
      }}
    >
      {props.children}
    </RouteBuildContext.Provider>
  )
}

export const useRouteBuildContext = () => {
  return useContext(RouteBuildContext)
}

export default RouteBuildContextProvider
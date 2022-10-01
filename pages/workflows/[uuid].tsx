import { useMemo, useEffect } from "react"
import ReactFlow, { Background, ReactFlowProvider, useReactFlow, MiniMap, Controls } from 'reactflow';
import { NodeTypes } from "@src/components/WorkflowNodes"
import WorkflowAppsSideMenu from "@src/pages/workflowBuild/WorkflowAppsSideMenu/WorkflowAppsSideMenu"
import WorkflowBuildContextProvider, { useWorkflowBuildContext } from "@src/pages/workflowBuild/workflow.build.context"
import WorkflowBuildSidemenuContextProvider from "@src/pages/workflowBuild/WorkflowAppsSideMenu/workflow.build.sidemenu.context";

const WorkflowEdit = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useWorkflowBuildContext()
  const instance = useReactFlow()
  const nodeTypes = useMemo(() => NodeTypes, []);
  const lastNode = useMemo(() => nodes[nodes.length -1]?.id, [nodes])

  /**
   * fit view when insert new node
   */
  useEffect(() => {
    if(nodes.length > 1){
      const targetIndex = nodes.length > 3 ? nodes.length - 3 : nodes.length - 2
      const last_node = nodes[nodes.length - 1]
      const last_node_width = document.querySelector(`[data-id=${last_node.id}]`)

      const third_last_node = nodes[targetIndex]

      instance.fitBounds({
        x: third_last_node.position.x,
        y: third_last_node.position.y,
        height: last_node.position.y - third_last_node.position.y,
        width: last_node.position.x - third_last_node.position.x + (last_node_width?.clientWidth || 0) + 150
      }, {
        padding: 0.2
      })
    }
  }, [lastNode])

  return (
    <div className="flex h-full w-full">
      <WorkflowAppsSideMenu />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => {
          onNodesChange(changes)
        }}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{
          padding: 0.2
        }}
        attributionPosition="bottom-left"
        nodeTypes={nodeTypes}
        className="flex-1"
      >
        <Controls showInteractive={false} />
        <Background />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

const Container = () => (
  <ReactFlowProvider>
    <WorkflowBuildContextProvider>
      <WorkflowBuildSidemenuContextProvider>
        <WorkflowEdit />
      </WorkflowBuildSidemenuContextProvider>
    </WorkflowBuildContextProvider>
  </ReactFlowProvider>
)

export default Container
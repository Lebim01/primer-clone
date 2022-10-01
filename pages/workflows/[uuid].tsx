import { useMemo } from "react"
import ReactFlow, { Background,} from 'reactflow';
import { NodeTypes } from "@src/components/WorkflowNodes"
import WorkflowAppsSideMenu from "@src/pages/workflowBuild/WorkflowAppsSideMenu/WorkflowAppsSideMenu"
import WorkflowBuildContextProvider, { useWorkflowBuildContext } from "@src/pages/workflowBuild/workflow.build.context"
import WorkflowBuildSidemenuContextProvider from "@src/pages/workflowBuild/WorkflowAppsSideMenu/workflow.build.sidemenu.context";

const WorkflowEdit = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useWorkflowBuildContext()
  const nodeTypes = useMemo(() => NodeTypes, []);

  return (
    <div className="flex h-full w-full">
      <WorkflowAppsSideMenu />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        nodeTypes={nodeTypes}
        className="flex-1"
      >
        <Background />
      </ReactFlow>
    </div>
  )
}

const Container = () => (
  <WorkflowBuildContextProvider>
    <WorkflowBuildSidemenuContextProvider>
      <WorkflowEdit />
    </WorkflowBuildSidemenuContextProvider>
  </WorkflowBuildContextProvider>
)

export default Container
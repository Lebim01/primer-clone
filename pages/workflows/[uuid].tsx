import { useMemo, useEffect } from "react"
import ReactFlow, { Background, ReactFlowProvider, useReactFlow, MiniMap, Controls } from 'reactflow';
import { NodeTypes } from "@src/components/WorkflowNodes"
import WorkflowAppsSideMenu from "@src/pages/workflowBuild/WorkflowAppsSideMenu/WorkflowAppsSideMenu"
import WorkflowBuildContextProvider, { useWorkflowBuildContext } from "@src/pages/workflowBuild/workflow.build.context"
import WorkflowBuildSidemenuContextProvider from "@src/pages/workflowBuild/WorkflowAppsSideMenu/workflow.build.sidemenu.context";
import { StepType, TourProvider, useTour } from '@reactour/tour'

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 200)
  })
}

const TOUR_NAME = "tour-edit-flow"
const steps: StepType[] = [
  {
    selector: '.toggle-side-menu',
    content: 'Here you have a side menu with all actions in order to add a flow',
    actionAfter: async () => {
      await wait()
      const event = new Event('resize');
      window.dispatchEvent(event)
    }
  },
  {
    action: async () => {
      const btnSideMenu: HTMLElement = document.querySelector(".toggle-side-menu")!
      if(btnSideMenu.getAttribute("data-is-open") == "false"){
        btnSideMenu?.click()
      }
      await wait()
      const event = new Event('resize');
      window.dispatchEvent(event)
    },
    selector: '.btn-add-condition',
    content: 'You can add a condition right here'
  },
  {
    action: async () => {
      const btnApp: HTMLElement = document.querySelector(".app-trigger > div")!
      if(btnApp.getAttribute("data-is-open") == "false"){
        btnApp?.click()
      }
      await wait()
      const event = new Event('resize');
      window.dispatchEvent(event)
    },
    selector: '.app-trigger',
    content: 'See all actions apps you can add per app'
  },
  {
    selector: '.app-trigger > div .app-trigger-action',
    content: 'Add actions you want'
  },
  {
    selector: '.header .btn-primary',
    content: 'At the end just publish'
  }
]

const WorkflowEdit = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useWorkflowBuildContext()
  const instance = useReactFlow()
  const nodeTypes = useMemo(() => NodeTypes, []);
  const lastNodeId = useMemo(() => nodes[nodes.length -1]?.id, [nodes])
  const { setIsOpen } = useTour()

  const openTourByDefault = useMemo(() => {
    return typeof localStorage != "undefined" && localStorage.getItem(TOUR_NAME) ? false : true
  }, [])

  useEffect(() => {
    if(typeof openTourByDefault == "boolean"){
      if(openTourByDefault && steps.length > 0){
        setIsOpen(true)
      }
    }
  }, [openTourByDefault, steps])

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
  }, [lastNodeId])

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
  <TourProvider 
    steps={steps} 
    beforeClose={(c) => { 
      localStorage.setItem(TOUR_NAME, "1"); 
    }}
  >
    <ReactFlowProvider>
      <WorkflowBuildContextProvider>
        <WorkflowBuildSidemenuContextProvider>
          <WorkflowEdit />
        </WorkflowBuildSidemenuContextProvider>
      </WorkflowBuildContextProvider>
    </ReactFlowProvider>
  </TourProvider>
)

export default Container
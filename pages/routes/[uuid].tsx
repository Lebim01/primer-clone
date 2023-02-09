import { useMemo, useEffect } from "react"
import ReactFlow, { Background, ReactFlowProvider, useReactFlow, MiniMap, Controls, Node } from 'reactflow';
import { NodeTypes } from "@src/components/RoutesNodes";
import RouteBuildContextProvider, { useRouteBuildContext } from "@src/pages/routes/builder/route.build.context";
import NewConditionPanel from "@src/sidepanels/NewConditionPanel";
import { useRef } from "react";
import CreateCondition from "@src/sidepanels/CreateCondition";

const RouteEdit = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes, addNewNode, setEdges } = useRouteBuildContext()
  const instance = useReactFlow()
  const nodeTypes = useMemo(() => NodeTypes, []);
  const lastNodeId = useMemo(() => nodes[nodes.length -1]?.id, [nodes])

  const refCreateConditionPanel = useRef<any>(null)
  const refNewConditionPanel = useRef<any>(null)

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
        padding: 0.3
      })
    }
  }, [lastNodeId])

  const onNodeClick = (event: any, node: Node) => {
    if(node.type == "newCondition" && refCreateConditionPanel.current) {
      refCreateConditionPanel.current.open();
    }
    if(node.type == "condition"){
      if(!nodes[1].data || nodes[1].data.connectors == 2) return;

      const isPlus = event.nativeEvent.path.find((el: HTMLElement) => el.classList?.contains("btn-plus"))
      if(isPlus){
        addNewNode({
          node_type: "continueNode",
          data: {},
        }, {
          x: 500,
          y: 150
        }, "node-2")
      }
    }
    if(node.type == "continueNode" && refNewConditionPanel.current){
      refNewConditionPanel.current.open()
    }
  }

  const addCondition = () => {
    setNodes((nodes: any) => {
      const _nodes = [...nodes]
      _nodes[1].data = {
        card_brand: {
          oparator: "equals",
          value: "Visa"
        },
        connectors: 1
      }
      return _nodes
    })
  }

  const modifyCondition = () => {

    setEdges([])

    setNodes((nodes: any) => {
      const _nodes = [...nodes]
      _nodes.splice(2, 1)
      _nodes[1].data.connectors = 2
      return _nodes
    })

    setTimeout(() => {
      addNewNode({
        node_type: "nodeProcessor",
        data: {
          title: "Adyen",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU1tFT///+Q0p4qsk30+/Y5t1kfr0bR7djb8eAws1FZwHEksEkusk/8/v2n27JKu2Xu+PCX1aTK6tEYr0LD58tzyIaw3blBuV9SvWu24b/i8+V5yYqh2a1hwndqxX4/t1wKrTyHzpa948WR0p/1ecwCAAAEW0lEQVR4nO3di3LaMBAFUCkyBiELP8AxGDAl/f9/rAhJmyc0jRatb/d+gIczkjXGWnmV1nqWq3FlcijnbX3fVF5fjxqjMMQWxuXLbrvorynHKjzHFs6t6xmw8BRr3HpzYSDHLwyxzuwyaGGImyw+GUcUYTB2DbhQ2bz9aKoCCZUyagUuDMNYgwvD3Ti8XXDQhMqUFbhQFYceXKjsayKgMBArcKEqOg8uVGZAFypXowvVcoUutCoDFyrTogtV3qALbenBhcot0IV2koELlduhC5X16MJ8gy60a3ShcjN0oanRhXbtwYXK9fDCBbqw2KILbefBhWpZoQvzBl3o7tGFpkYXFi260M7RhaqEFx7ghRN4oRIhQEQ4/ohw/BHh+PN/CH+YBCluKKyOd7fPcZjk5lbCRPHT7fIWA5lOGFINDlyodU1PTCzUO/KFPLVQH6nXm9RA7Q8WXKg3xPM0tS+EFshBWNPeial5IQ3tNE3NC6nghRntYpqaF5JNRChCEaaOCEUowvQRoQhFmD4iFGEEYVY19/WxHfbzL6a8/PkfHsJsWg9dnjtjiqKwX8xyyl3oV+3EmeKf/4PnzIWzY+6+tznEW9gM39/f4yxs9nmEvT2+wmpwUd5/sRUuYozfKUyF/T7aG1qewlXEKgmWwjrmK3aGQr+NuofAT+j3cQsH2An9PPJOHjdhdCA7YfzyHWbCu/gblbyEFCURrIQzinIBTkK/pthq5iSkqaBjJOyXJBdnJNzTlEPwET4QVXmyEfqSqKKFjZCsOpCNsKMqSuIipKuc4yIkWkgVG2FPV97JRLigOxDARLinO7jCQ0g4SZkIN4SnVngIKU90sBCSPbGdwkKY0fxvOoeFcEpZKM9CSLnQ8BCSHlhhIWwpDzuwEM7hhSXlxVkID5QXZyEkvToLIWlEKEL+EaEI+UeEIuQfEYqQf0QoQv4RoQj5R4Qi5B8RipB/RChC/nnuWIsrdA/oQlNf941baEt04WObTGyhOaILlfmLQRy3sHjq/40rVGZAFyo3ZOBCZborTzajFyq7nK8ujaMfvTCsN7nZf9pE4+cx9c+Lk+JCu5LUv00ikUgkEomEfwCeeq+EtFafRUjPW7AI6ZkZFmlv1mkxVYibLTHI/Q06EKYNcTspBqkozwGziCf7dAuX6C36Ykr54Q8e0T28kOZre4xC3mAxebSegU9TrTX4NNX0zVwT57S7BT+Gegd9J543YZFH8XEXFvq55rzPTPkppdQ5b6Uj/0t8qhbY4j7YPFd8KNh5+lzysYKdp7+rWmi+d80gfwp3BtBb8UVpUon5PuNF9VV1gCS+LDDrIYmvauj6DpD4ukywKvGWm7eVkPFbsaTOu2rPOgd7unkn1I3CmqnvhTproYbxA2EYxjJO/0MW+VCo/eIAs+J8LAxTdWdj9XlMnM+EYRw3c4cwWT8Xhsx2a+f+vR0wj1wUhoHsF9tumX+n7XHqXBE+Kk9tudt5eRhlDdwvL5xJ/0Xo/pIAAAAASUVORK5CYII="
        }
      }, {
        y: 110,
        x: 600
      }, "node-2")
  
      addNewNode({
        node_type: "nodeProcessor",
        data: {
          title: "dLocal",
          icon: "https://yt3.googleusercontent.com/ytc/AL5GRJWQPTDwQvVF3p-4RiUXyuNoAE6hfH0D3B0PXqbq=s900-c-k-c0x00ffffff-no-rj"
        }
      }, {
        y: 350,
        x: 600
      }, "node-2")
    }, 250)
  }

  return (
    <div className="relative flex h-full w-full">
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
          padding: 0.3
        }}
        onNodeClick={onNodeClick}
        attributionPosition="bottom-left"
        nodeTypes={nodeTypes}
        className="flex-1"
      >
        <Controls showInteractive={false} />
        <Background />
        <MiniMap />
      </ReactFlow>


      <CreateCondition ref={refCreateConditionPanel} onComplete={addCondition} /> 
      <NewConditionPanel ref={refNewConditionPanel} onComplete={modifyCondition} />
    </div>
  )
}

const Container = () => (
  <ReactFlowProvider>
    <RouteBuildContextProvider>
      <RouteEdit />
    </RouteBuildContextProvider>
  </ReactFlowProvider>
)

export default Container
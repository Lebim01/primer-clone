// @ts-nocheck
import { TiFlowSwitch } from "react-icons/ti"
import { Handle } from 'reactflow';
import NodeContainer from "./NodeContainer";

const NodeCondition = (props: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={props.isConnectable}
      />
      {props.sourcePosition !== "none" &&
        <Handle
          type="source"
          position="right"
          style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={props.isConnectable}
        />
      }
      <NodeContainer 
        topTitle="CONDITION" 
        icon={<div className="text-md  rounded-full bg-blue-500 p-1 text-white"><TiFlowSwitch /></div>}
      >

      </NodeContainer>
    </>
  )
}

export default NodeCondition
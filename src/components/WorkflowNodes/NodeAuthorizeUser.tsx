// @ts-nocheck
import { Handle } from 'reactflow';
import NodeContainer from "./NodeContainer";

const NodeAuthorizeUser = (props: NodeProps) => {
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
        topTitle="PAYMENTS" 
        title="Authorize User"
        icon={props.data.app_icon}
      >

      </NodeContainer>
    </>
  )
}

export default NodeAuthorizeUser
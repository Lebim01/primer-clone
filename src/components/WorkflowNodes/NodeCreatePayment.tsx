// @ts-nocheck
import { BsPlayCircle } from "react-icons/bs"
import { Handle } from 'reactflow';
import NodeContainer from "./NodeContainer";

const NodeCreatePayment = (props: NodeProps) => {
  return (
    <>
      <Handle
        type="source"
        position="right"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={props.isConnectable}
      />
      <NodeContainer 
        topTitle="CHECKOUT" 
        title="Create Payment"
        icon={<BsPlayCircle size={20} className='rounded-full bg-green-400/20 p-1' />}
      >

      </NodeContainer>
    </>
  )
}

export default NodeCreatePayment
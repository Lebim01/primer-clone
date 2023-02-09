// @ts-nocheck
import { BsCheckCircle, BsClock, BsExclamationCircle, BsPlus, BsPlusCircle } from "react-icons/bs"
import { GiCancel } from "react-icons/gi"
import { Handle } from 'reactflow';

const NodeContinue = (props: NodeProps) => {
  
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={props.isConnectable}
      />
      <div className="relative flex w-[200px] flex-col space-y-4 rounded-lg border-2 border-violet-500 bg-white p-4 shadow-md hover:cursor-pointer">
        <div className="flex flex-col space-y-2">
          Continue

          <div className="mt-2 flex items-center space-x-2">
            <BsPlusCircle />
            <span>
              Add Step
            </span>
          </div>
        </div>

        <hr />

        <div className="flex flex-col space-y-2">
          Finalize

          <div className="mt-2 flex items-center space-x-2">
            <BsCheckCircle />
            <span>
              Capture
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <BsExclamationCircle />
            <span>
              Error
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <BsClock />
            <span>
              Expired
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <GiCancel />
            <span>
              Cancelled
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <GiCancel />
            <span>
              Rejected
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <GiCancel />
            <span>
              Pending
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NodeContinue
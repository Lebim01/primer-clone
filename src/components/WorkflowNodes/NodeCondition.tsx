// @ts-nocheck
import { TiFlowSwitch } from "react-icons/ti"
import { Handle } from 'reactflow';
import FilterItem from "../Filters/FilterItem";
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
        icon={<div className="rounded-full  bg-blue-500 p-1 text-sm text-white"><TiFlowSwitch /></div>}
      >
        {Object.keys(props.data?.filters)?.map((key) => {
          const filter = props.data.filters[key]
          const selectedOption = props.data.filters[key].options.find(r => r.value == filter.value)
          return (
            <FilterItem 
              key={key}
              icon={filter.icon}
              title={filter.label.toUpperCase()}
              value={selectedOption?.label || "-"}
            />
          )
        })}
      </NodeContainer>
    </>
  )
}

export default NodeCondition
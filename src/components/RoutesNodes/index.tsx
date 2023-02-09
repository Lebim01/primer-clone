import CreateCondition from "@src/sidepanels/CreateCondition";
import NodeNewCondition from "./NodeNewCondition"
import NodeCondition from './NodeCondition'
import NodeContinue from './NodeContinue'
import NodeProcessor from './NodeProcessor'

type NodeTypes = {
  [name in RoutesNodeType]: any;
};

export const NodeTypes: NodeTypes = {
  newCondition: NodeNewCondition,
  createCondition: CreateCondition,
  condition: NodeCondition,
  continueNode: NodeContinue,
  nodeProcessor: NodeProcessor
}
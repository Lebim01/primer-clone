type NodeProps = {
  data: any;
  dragHandle?: any;
  dragging?: boolean;
  id: string;
  isConnectable?: boolean;
  selected?: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  zIndex: number;
}

type NodeType = "condition" | "createPayment" | "authorizeUser" | "authorizePayment"

type RoutesNodeType = "newCondition" | "createCondition" | "condition" | "continueNode" | "nodeProcessor";
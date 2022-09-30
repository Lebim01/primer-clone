interface IWorkflowNode {
  uuid: string;
  workflow_uuid: string;
  node_id: string;
  type: string;
  position: {
    x: number;
    y: number;
  }
  data: any;
}

interface IWorkflow {
  uuid: string;
  name: string;
  principal_node?: IWorkflowNode;
  status: TStatus;
}
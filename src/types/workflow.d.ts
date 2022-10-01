interface IWorkflowNodeDB {
  uuid: string;
  workflow_uuid: string;
  node_id: string;
  app_method_uuid: string;
  position: string;
  data: string;
  type?: string;
}

interface IWorkflowNode {
  uuid: string;
  id: string;
  workflow_uuid: string;
  node_id: string;
  app_method_uuid: string;
  position: {
    x: number;
    y: number;
  }
  data: any;
  type?: string;
}

interface IWorkflow {
  uuid: string;
  name: string;
  principal_node?: IWorkflowNode;
  status: TStatus;
}
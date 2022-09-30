type WorkflowType = "checkout" | "payment" | "app"

interface IWorkflow {
  uuid: string;
  name: string;
  type: WorkflowType;
}
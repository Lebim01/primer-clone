interface IFlowCheckout {
  uuid: string;
  name: string;
  action: string;
  created_at: Date;
  updated_at: Date;
  workflow_uuid?: string;
}

interface IFlowPayment {
  uuid: string;
  name: string;
  action: string;
  created_at: Date;
  updated_at: Date;
  workflow_uuid?: string;
}
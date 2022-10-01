import NodeCondition from "./NodeCondition"
import NodeCreatePayment from "./NodeCreatePayment"
import NodeAuthorizePayment from "./NodeAuthorizePayment";
import NodeAuthorizeUser from "./NodeAuthorizeUser";

type NodeTypes = {
  [name in NodeType]: any;
};

export const NodeTypes: NodeTypes = {
  createPayment: NodeCreatePayment,
  condition: NodeCondition,
  authorizePayment: NodeAuthorizePayment,
  authorizeUser: NodeAuthorizeUser
}
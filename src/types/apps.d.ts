interface IApp {
  uuid: string;
  icon: string;
  icon_component?: ReactNode;
  name: string;
  status: TStatus;
  created_at: Date;
  methods_count: number;
  methods?: IAppMethod[];
}

interface IAppMethod {
  uuid: string;
  app_uuid: string;
  name: string;
  type: TMethodType;
  node_type: NodeType;
}

interface IAppMethodFull extends IAppMethod {
  app: IApp;
}
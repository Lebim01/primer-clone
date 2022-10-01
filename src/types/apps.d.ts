interface IApp {
  uuid: string;
  icon: string;
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
}
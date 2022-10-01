type ModalProps = {
  uuid: string;
  children: ReactNode;
  onSave: (data: any) => void;
  onClose: () => void;
}

type OpenModalProps = {
  children: ReactElement;
  onSave: (data: any) => void;
}
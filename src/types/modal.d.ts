type ModalProps = {
  uuid: string;
  children: ReactNode;
  onSave: (data?: any, onClose?: () => void) => void;
  onClose: () => void;
  closeOnSuccess: () => void;
}

type OpenModalProps = {
  children: ReactElement;
  onSave: (data?: any, onClose?: () => void) => void;
  onClose?: () => void;
}
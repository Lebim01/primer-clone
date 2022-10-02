import Modal from "@src/components/UI/Modal";
import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from "react";
import { uuid } from "uuidv4"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
  children: ReactNode;
}

interface IHeaderContext {
  openModal: (props: OpenModalProps) => void;
  closeModal: (uuid: string) => void;
  showModal: ModalProps | null;
}

const ModalContext = createContext<IHeaderContext>({
  openModal: () => {},
  closeModal: () => {},
  showModal: null
})

const ModalContextProvider = (props: Props) => {
  const [modals, setModals] = useState<ModalProps[]>([])

  const openModal = (modalProps: OpenModalProps) => {
    const modaluuid = uuid()
    setModals([...modals, {
      ...modalProps,
      uuid: modaluuid,
      onClose: () => closeModal(modaluuid),
    }])
  }

  const closeModal = (uuid: string) => {
    setModals((modals) => {
      const _modals = [...modals]
      const index = _modals.findIndex(r => r.uuid == uuid)
      if(index > -1){
        _modals.splice(index, 1)
      }
      return _modals
    })
  }

  const showModal = useMemo(() => {
    return modals.length > 0 ? modals[modals.length-1] : null
  }, [modals])

  return (
    <ModalContext.Provider 
      value={{
        openModal,
        closeModal,
        showModal
      }}
    >
      {props.children}
      {modals.length > 0 && showModal &&
        <motion.div 
          className="modal-fade absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-800/50"
        >
          <AnimatePresence>
            <Modal {...showModal} />
          </AnimatePresence>
        </motion.div>
      }
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}

export default ModalContextProvider
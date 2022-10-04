// @ts-nocheck
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useModalContext } from "@src/context/modal.context";
import ModalConfirmation from "@src/modals/ModalConfirmation";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import ModalDemoCheckout from "@src/modals/ModalDemoCheckout";
import { useTour } from "@reactour/tour";

type Props = {
  children: ReactNode;
}

interface ICheckoutBuildContext {
  
}

const CheckoutBuildContext = createContext<ICheckoutBuildContext>({
  
})

const CheckoutBuildContextProvider = (props: Props) => {
  const { openModal } = useModalContext()
  const { setIsOpen, setCurrentStep } = useTour()

  const { setActionButtons } = useHeaderContext()

  const publish = () => {
    openModal({
      children: ModalConfirmation,
      onSave: (_, onClose) => {
        setTimeout(() => {
          onClose()
        }, 1200)
      },
    })
  }

  const testCheckout = () => {
    openModal({
      children: ModalDemoCheckout,
      onSave: (_, onClose) => {
        setTimeout(() => {
          onClose()
        }, 1200)
      },
    })
  }

  useEffect(() => {
    setActionButtons(
      <>
        <button title="Open tour" 
          onClick={() => {
            setCurrentStep(0)
            setIsOpen(true)
          }}
        >
          <BsInfoCircle size={20} />
        </button>
        <button className="btn flex items-center gap-1" onClick={testCheckout}>
          Test <BsFillPlayFill />
        </button>
        <button className="btn-primary" onClick={publish}>
          Publish
        </button>
      </>
    )
  }, [])
  
  return (
    <CheckoutBuildContext.Provider 
      value={{
        
      }}
    >
      {props.children}
    </CheckoutBuildContext.Provider>
  )
}

export const useCheckoutBuildContext = () => {
  return useContext(CheckoutBuildContext)
}

export default CheckoutBuildContextProvider
// @ts-nocheck
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useModalContext } from "@src/context/modal.context";
import ModalConfirmation from "@src/modals/ModalConfirmation";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import ModalDemoCheckout from "@src/modals/ModalDemoCheckout";

type Props = {
  children: ReactNode;
}

interface ICheckoutBuildContext {
  
}

const CheckoutBuildContext = createContext<ICheckoutBuildContext>({
  
})

const CheckoutBuildContextProvider = (props: Props) => {
  const { openModal } = useModalContext()

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
      <div className="flex gap-3">
        <button className="btn flex items-center gap-1" onClick={testCheckout}>
          Test <BsFillPlayFill />
        </button>
        <button className="btn-primary" onClick={publish}>
          Publish
        </button>
      </div>
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
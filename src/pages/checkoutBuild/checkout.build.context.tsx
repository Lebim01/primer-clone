// @ts-nocheck
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useModalContext } from "@src/context/modal.context";

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

  }

  useEffect(() => {
    setActionButtons(
      <>
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
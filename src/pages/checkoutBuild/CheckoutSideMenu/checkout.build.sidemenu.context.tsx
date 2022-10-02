import { PAYMENT_METHODS } from "@src/constans/checkout";
import { createContext, useContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
}

interface ICheckoutBuildSidemenuContext {
  togglePaymentMethod: (payment_name: string, active: boolean) => void;
  paymentMethods: any[];
}

const CheckoutBuildSidemenuContext = createContext<ICheckoutBuildSidemenuContext>({
  togglePaymentMethod: () => {},
  paymentMethods: [],
})

interface ToggleMethods extends PaymentMethod {
  active?: boolean;
}

const CheckoutBuildSidemenuContextProvider = (props: Props) => {
  const [paymentMethods, setPaymentMethods] = useState<ToggleMethods[]>(PAYMENT_METHODS.map((r) => ({ ...r, active: false })))

  const togglePaymentMethod = (payment_name: string, active: boolean) => {
    setPaymentMethods(methods => {
      const _methods = [...methods]
      const index = methods.findIndex(r => r.name == payment_name)
      if(index > -1){
        _methods[index].active = active
      }
      return _methods
    })
  }

  return (
    <CheckoutBuildSidemenuContext.Provider 
      value={{
        togglePaymentMethod,
        paymentMethods
      }}
    >
      {props.children}
    </CheckoutBuildSidemenuContext.Provider>
  )
}

export const useCheckoutBuildSidemenuContext = () => {
  return useContext(CheckoutBuildSidemenuContext)
}

export default CheckoutBuildSidemenuContextProvider
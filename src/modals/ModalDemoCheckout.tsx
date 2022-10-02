import { useState, useMemo } from "react"
import type { ReactNode } from "react"
import CheckoutForm from "@src/components/Checkout/CheckoutForm";
import { PAYMENT_METHODS } from "@src/constans/checkout";


const ModalDemoCheckout = (props: ModalProps) => {
  
  return (
    <div className="flex flex-col p-3">
      <CheckoutForm activeMethods={PAYMENT_METHODS} onClose={props.onClose} />
    </div>
  )
}

export default ModalDemoCheckout
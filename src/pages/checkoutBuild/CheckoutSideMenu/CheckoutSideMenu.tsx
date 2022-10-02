import Tabs from "@src/components/UI/Tabs"
import { useState } from "react"
import TabModules from "../Tabs/Modules"
import TabPaymentMethods from "../Tabs/PaymentMethods"

const CheckoutSideMenu = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className={`min-w-max border-r border-gray-200 bg-white ${open ? "w-[320px]" : "w-[50px]"} flex flex-col items-center gap-4 overflow-auto p-4 transition-width`}>
      <Tabs
        tabs={[
          {
            label: "Payment Methods",
            children: <TabPaymentMethods />
          },
          {
            label: "Modules",
            children: <TabModules />
          }
        ]}
      />
    </div>
  )
}

export default CheckoutSideMenu
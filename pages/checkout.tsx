import { useMemo } from "react"
import CheckoutBuildContextProvider from "@src/pages/checkoutBuild/checkout.build.context"
import CheckoutBuildSidemenuContextProvider, { useCheckoutBuildSidemenuContext } from "@src/pages/checkoutBuild/CheckoutSideMenu/checkout.build.sidemenu.context"
import CheckoutSideMenu from "@src/pages/checkoutBuild/CheckoutSideMenu/CheckoutSideMenu"
import { AnimatePresence, motion } from "framer-motion"

const Checkout = () => {
  const { paymentMethods } = useCheckoutBuildSidemenuContext()

  const activeMethods = useMemo(() => paymentMethods.filter(r => r.active), [paymentMethods])

  return (
    <div className="flex h-full w-full">
      <CheckoutSideMenu />
      <div className="flex w-full items-center justify-center bg-neutral-200">
        <motion.div className="checkout flex w-[350px] flex-col gap-2 rounded-lg border bg-white p-8 shadow">
          <AnimatePresence>
            {activeMethods.map((method) => 
              <motion.div key={method.name} className="h-12 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {method.button}
              </motion.div>
            )}
            {activeMethods.length > 0 &&
              <div className="relative my-2 border-t" key="label">
                <span className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-3 text-sm">Or pay with card</span>
              </div>
            }
            <div className="mt-2 flex flex-col gap-3" key="form">
              <div className="flex flex-col gap-2">
                <span className="text-base font-medium">Card number</span>
                <span className="ml-2 text-xs text-neutral-400">**** **** **** ****</span>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-base font-medium">Expiry</span>
                  <span className="ml-2 text-xs text-neutral-400">MM/YY</span>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-base font-medium">CVV</span>
                  <span className="ml-2 text-xs text-neutral-400">***</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base font-medium">Name on card</span>
                <span className="ml-2 text-xs text-neutral-400">First and last name</span>
              </div>
              <div className="mt-4 w-full">
                <button className="btn-primary w-full">Checkout</button>
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

const Container = () => (
  <CheckoutBuildContextProvider>
    <CheckoutBuildSidemenuContextProvider>
      <Checkout />
    </CheckoutBuildSidemenuContextProvider>
  </CheckoutBuildContextProvider>
)

export default Container
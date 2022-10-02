import { useMemo } from "react"
import CheckoutBuildContextProvider from "@src/pages/checkoutBuild/checkout.build.context"
import CheckoutBuildSidemenuContextProvider, { useCheckoutBuildSidemenuContext } from "@src/pages/checkoutBuild/CheckoutSideMenu/checkout.build.sidemenu.context"
import CheckoutSideMenu from "@src/pages/checkoutBuild/CheckoutSideMenu/CheckoutSideMenu"
import CheckoutForm from "@src/components/Checkout/CheckoutForm"

const Checkout = () => {
  const { paymentMethods } = useCheckoutBuildSidemenuContext()

  const activeMethods = useMemo(() => paymentMethods.filter(r => r.active), [paymentMethods])

  return (
    <div className="flex h-full w-full">
      <CheckoutSideMenu />
      <div className="flex w-full items-center justify-center bg-neutral-200">
        <CheckoutForm activeMethods={activeMethods} className="rounded-lg border shadow" readOnly />
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
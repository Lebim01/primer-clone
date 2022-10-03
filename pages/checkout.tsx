import { useMemo, useEffect } from "react"
import CheckoutBuildContextProvider from "@src/pages/checkoutBuild/checkout.build.context"
import CheckoutBuildSidemenuContextProvider, { useCheckoutBuildSidemenuContext } from "@src/pages/checkoutBuild/CheckoutSideMenu/checkout.build.sidemenu.context"
import CheckoutSideMenu from "@src/pages/checkoutBuild/CheckoutSideMenu/CheckoutSideMenu"
import CheckoutForm from "@src/components/Checkout/CheckoutForm"
import { StepType, TourProvider, useTour } from "@reactour/tour"
import { wait } from "@src/utils/tour"

const TOUR_NAME = "tour-checkout"
const steps: StepType[] = [
  {
    selector: '.tab-content',
    content: 'Here you can toggle different payment methods',
    actionAfter: async () => {
      await wait()
      const event = new Event('resize');
      window.dispatchEvent(event)
    }
  },
  {
    selector: '.checkout',
    content: 'Watch all changes you made here'
  },
  {
    selector: '.header .btn',
    content: 'You can test your configuration clicking here'
  },
  {
    selector: '.header .btn-primary',
    content: 'At the end just publish'
  }
]

const Checkout = () => {
  const { paymentMethods } = useCheckoutBuildSidemenuContext()
  const { setIsOpen } = useTour()

  const activeMethods = useMemo(() => paymentMethods.filter(r => r.active), [paymentMethods])

  const openTourByDefault = useMemo(() => {
    return typeof localStorage != "undefined" && localStorage.getItem(TOUR_NAME) ? false : true
  }, [])

  useEffect(() => {
    if(typeof openTourByDefault == "boolean"){
      if(openTourByDefault && steps.length > 0){
        setIsOpen(true)
      }
    }
  }, [openTourByDefault, steps])

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
  <TourProvider
    steps={steps} 
    beforeClose={(c) => { 
      localStorage.setItem(TOUR_NAME, "1"); 
    }}
  >
    <CheckoutBuildContextProvider>
      <CheckoutBuildSidemenuContextProvider>
        <Checkout />
      </CheckoutBuildSidemenuContextProvider>
    </CheckoutBuildContextProvider>
  </TourProvider>
)

export default Container
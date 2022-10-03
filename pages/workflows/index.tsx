import { StepType, TourProvider, useTour } from "@reactour/tour"
import { useHeaderContext } from "@src/components/HeaderBreadcrumb/header.context"
import CatalogGroup from "@src/pages/workflows/components/CatalogGroup"
import StatusToggle from "@src/pages/workflows/components/StatusToggle"
import WorkflowApp from "@src/pages/workflows/components/Workflow/WorkflowApp"
import WorkflowCheckout from "@src/pages/workflows/components/Workflow/WorkflowCheckout"
import WorkflowPayment from "@src/pages/workflows/components/Workflow/WorkflowPayment"
import WorkflowListContextProvider, { useWorkflowListContext } from "@src/pages/workflows/workflows.list.context"
import { fetcherGET } from "@src/services/fetchers"
import { useEffect, useMemo } from "react"
import { BsInfoCircle } from "react-icons/bs"
import useSWR from 'swr'

const TOUR_NAME = "tour-flow"
const steps: StepType[] = [
  {
    selector: '.group-toggle-status',
    content: 'Filter by status',
  },
  {
    selector: 'a[href*="/workflows/"]',
    content: 'Go to edit a flow'
  },
]

const Workflows = () => {
  const { status: [status] } = useWorkflowListContext()
  const { setActionButtons } = useHeaderContext()
  const { setIsOpen, setCurrentStep } = useTour()

  const checkouts = useSWR<IFlowCheckout[]>('/api/flow/checkout', fetcherGET<IFlowCheckout[]>({ status }), {
    revalidateOnMount: false,
  })
  const payments = useSWR<IFlowPayment[]>('/api/flow/payment', fetcherGET<IFlowPayment[]>({ status }), {
    revalidateOnMount: false
  })
  const apps = useSWR<IApp[]>('/api/app?type=app', fetcherGET<IApp[]>({ status }), {
    revalidateOnMount: false
  })

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

  useEffect(() => {
    setActionButtons(<>
      <button title="Open tour" 
      onClick={() => {
        setCurrentStep(0)
        setIsOpen(true)
      }}
    >
      <BsInfoCircle size={20} />
    </button>
    </>)
  }, [])

  useEffect(() => {
    checkouts.mutate(undefined, {
      revalidate: true,
    })
    payments.mutate(undefined, {
      revalidate: true,
    })
    apps.mutate(undefined, {
      revalidate: true,
    })
  }, [status])

  return (
    <div className="p-8">
      <h3 className="mb-6 text-3xl">Workflows</h3>
      <StatusToggle />
      <CatalogGroup title="Checkout">
        {checkouts.data?.map((workflow) => 
          <WorkflowCheckout data={workflow} key={workflow.uuid} />
        )}
      </CatalogGroup>
      <CatalogGroup title="Payments">
        {payments.data?.map((workflow) => 
          <WorkflowPayment data={workflow} key={workflow.uuid} />
        )}
      </CatalogGroup>
      <CatalogGroup title="Apps">
        {apps.data?.map((workflow) => 
          <WorkflowApp data={workflow} key={workflow.uuid} />
        )}
      </CatalogGroup>
    </div>
  )
}

const Container = () => {
  return (
    <TourProvider
      steps={steps} 
      beforeClose={(c) => { 
        localStorage.setItem(TOUR_NAME, "1"); 
      }}
    >
      <WorkflowListContextProvider>
        <Workflows />
      </WorkflowListContextProvider>
    </TourProvider>
  )
}

export default Container
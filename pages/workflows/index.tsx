import CatalogGroup from "@src/pages/workflows/components/CatalogGroup"
import StatusToggle from "@src/pages/workflows/components/StatusToggle"
import WorkflowApp from "@src/pages/workflows/components/Workflow/WorkflowApp"
import WorkflowCheckout from "@src/pages/workflows/components/Workflow/WorkflowCheckout"
import WorkflowPayment from "@src/pages/workflows/components/Workflow/WorkflowPayment"
import WorkflowListContextProvider, { useWorkflowListContext } from "@src/pages/workflows/workflows.list.context"
import { fetcherGET } from "@src/services/fetchers"
import { useEffect } from "react"
import useSWR from 'swr'

const Workflows = () => {
  const { status: [status] } = useWorkflowListContext()

  const checkouts = useSWR<IFlowCheckout[]>('/api/flow/checkout', fetcherGET<IFlowCheckout[]>({ status }), {
    revalidateOnMount: false,
  })
  const payments = useSWR<IFlowPayment[]>('/api/flow/payment', fetcherGET<IFlowPayment[]>({ status }), {
    revalidateOnMount: false
  })
  const apps = useSWR<IApp[]>('/api/app?type=app', fetcherGET<IApp[]>({ status }), {
    revalidateOnMount: false
  })

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
    <>
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
    </>
  )
}

const Container = () => {
  return (
    <WorkflowListContextProvider>
      <Workflows />
    </WorkflowListContextProvider>
  )
}

export default Container
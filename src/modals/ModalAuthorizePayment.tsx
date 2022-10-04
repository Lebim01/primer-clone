const ModalAuthorizePayment = (props: ModalProps) => {

  const submit = () => {
    props.closeOnSuccess()
    props.onSave({})
  }
  
  return (
    <div className="mt-2 flex w-[350px] flex-col rounded bg-white p-3 text-black">
      <div className="flex items-center justify-between rounded border p-2">
        <div><img className="w-18 h-10" src="/images/visa.png" /></div>
        <div><img className="h-16 w-16" src="/images/sns.png" /></div>
      </div>

      <h3 className="mt-4 text-xl font-bold">Purchase Authentication</h3>
      <p className="mt-4">
        We have sent you a text message with a code to your registered mobile number ending in 5329.
        <br />
        <br />
        You are paying Retrypay API the amount of 24.00 using card *************1091.
        <br />
        <br />
        (OTP: 1234)
      </p>

      <span className="mt-4 font-bold">Enter your code below</span>
      <input placeholder="Enter code here" className="mt-2 w-full rounded border p-1" />

      <div className="mt-4 flex flex-col gap-2">
        <button className="btn-primary" onClick={submit}>SUBTMIT</button>
        <button className="btn">RESEND CODE</button>
        <button className="btn">CANCEL</button>
      </div>
    </div>
  )
}

export default ModalAuthorizePayment
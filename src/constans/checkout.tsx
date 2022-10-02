export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: "paypal",
    label: "Paypal",
    icon: "/images/paypal.png",
    button: <button className={`btn-checkout btn-checkout-paypal btn flex w-full items-center justify-center gap-3 border-none bg-blue-200 p-2 hover:bg-blue-300`}> <img className="h-6 w-12" src="/images/paypal-full.png" /> </button>
  },
  {
    name: "stripe",
    label: "Stripe",
    icon: "/images/stripe.png",
    button: <button className="btn-checkout btn-checkout-stripe btn flex w-full items-center justify-center gap-3 bg-[#635bff] p-2 hover:bg-indigo-400"> <img className="h-6 w-14" src="/images/stripe-white.png" /> </button>
  },
  {
    name: "google-pay",
    label: "Google Pay",
    icon: "/images/google.png",
    button: <button className="btn-checkout btn-checkout-google btn flex w-full items-center justify-center gap-3 bg-black p-2 font-bold text-white hover:bg-gray-700"> <img className="h-6 w-6" src="/images/google.png" /> Pay </button>
  },
  {
    name: "apple-pay",
    label: "Apple Pay",
    icon: "/images/apple.png",
    button: <button className="btn-checkout btn-checkout-apple btn tex-white flex w-full items-center justify-center gap-3 bg-black p-2 font-bold text-white hover:bg-gray-700"> <img className="h-6 w-6" src="/images/apple-white.png" /> Pay </button>
  },
  {
    name: "amazon-pay",
    label: "Amazon Pay",
    icon: "/images/amazonpay.png",
    button: <button className="btn-checkout btn-checkout-amazon btn flex w-full items-center justify-center gap-3 border-none bg-orange-300 p-2 font-bold hover:bg-orange-200"> Amazon <img className="h-6 w-6" src="/images/amazonpay.png" /> </button>
  }
]
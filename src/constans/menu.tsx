import { BsFillGrid1X2Fill, BsCode, BsFolderCheck, BsBarChart, BsWallet, BsCart, BsPlusLg, BsGift, BsBook, BsGearFill, BsPerson } from "react-icons/bs"
import { BiNetworkChart } from "react-icons/bi"

export const primerMenu = [
  {
    icon: <BsFillGrid1X2Fill />,
    name: "Snapshot"
  },
  {
    icon: <BsPlusLg />,
    name: "Connections"
  },
  {
    icon: <BiNetworkChart />,
    name: "Workflows"
  },
  {
    icon: <BsCart />,
    name: "Checkout"
  },
  {
    icon: <BsWallet />,
    name: "Payments"
  },
  {
    icon: <BsBarChart />,
    name: "Analytics"
  },
  {
    icon: <BsFolderCheck />,
    name: "Reconciliation"
  },
  {
    icon: <BsCode />,
    name: "Developers"
  }
]

export const supportMenu = [
  {
    icon: <BsBook />,
    name: "API reference"
  },
  {
    icon: <BsGift />,
    name: "What's new?"
  },
]

export const accountMenu = [
  {
    icon: <BsPerson />,
    name: "Profile"
  },
  {
    icon: <BsGearFill />,
    name: "Settings"
  },
]
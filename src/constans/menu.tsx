import { BsFillGrid1X2Fill, BsCode, BsFolderCheck, BsBarChart, BsWallet, BsCart, BsPlusLg, BsGift, BsBook, BsGearFill, BsPerson } from "react-icons/bs"
import { BiNetworkChart } from "react-icons/bi"

export const primerMenu: IMenuItem[] = [
  {
    icon: <BsFillGrid1X2Fill />,
    name: "Snapshot",
    path: "/snapshot"
  },
  {
    icon: <BsPlusLg />,
    name: "Connections",
    path: "/connections"
  },
  {
    icon: <BiNetworkChart />,
    name: "Workflows",
    path: "/workflows"
  },
  {
    icon: <BsCart />,
    name: "Checkout",
    path: "/checkout"
  },
  {
    icon: <BsWallet />,
    name: "Payments",
    path: "/payments"
  },
  {
    icon: <BsBarChart />,
    name: "Analytics",
    path: "/analytics"
  },
  {
    icon: <BsFolderCheck />,
    name: "Reconciliation",
    path: "/reconciliation"
  },
  {
    icon: <BsCode />,
    name: "Developers",
    path: "/developers"
  }
]

export const supportMenu: IMenuItem[] = [
  {
    icon: <BsBook />,
    name: "API reference",
    path: "/api-reference"
  },
  {
    icon: <BsGift />,
    name: "What's new?",
    path: "/whats-new"
  },
]

export const accountMenu: IMenuItem[] = [
  {
    icon: <BsPerson />,
    name: "Profile",
    path: "/profile"
  },
  {
    icon: <BsGearFill />,
    name: "Settings",
    path: "/settings"
  },
]

export const pageNotFound: IMenuItem = { icon: null, name: "Page not found", path: "/404" }

export const ALL_MENUS = [...primerMenu, ...supportMenu, ...accountMenu]
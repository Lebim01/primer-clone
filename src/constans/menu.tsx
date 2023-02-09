import { BsFillGrid1X2Fill, BsCode, BsFolderCheck, BsBarChart, BsWallet, BsCart, BsPlusLg, BsGift, BsBook, BsGearFill, BsPerson } from "react-icons/bs"
import { BiNetworkChart } from "react-icons/bi"
import { IoIosGitNetwork } from "react-icons/io"

export const primerMenu: IMenuItem[] = [
  {
    icon: <BsFillGrid1X2Fill />,
    name: "Snapshot",
    path: "/snapshot",
  },
  {
    icon: <BsPlusLg />,
    name: "Connections",
    path: "/connections",
    locked: true
  },
  {
    icon: <BiNetworkChart />,
    name: "Workflows",
    path: "/workflows"
  },
  {
    icon: <IoIosGitNetwork />,
    name: "Routes",
    path: "/routes"
  },
  {
    icon: <BsCart />,
    name: "Checkout",
    path: "/checkout"
  },
  {
    icon: <BsWallet />,
    name: "Payments",
    path: "/payments",
    locked: true
  },
  {
    icon: <BsBarChart />,
    name: "Analytics",
    path: "/analytics",
    locked: true
  },
  {
    icon: <BsFolderCheck />,
    name: "Reconciliation",
    path: "/reconciliation",
    locked: true
  },
  {
    icon: <BsCode />,
    name: "Developers",
    path: "/developers",
    locked: true
  }
]

export const supportMenu: IMenuItem[] = [
  {
    icon: <BsBook />,
    name: "API reference",
    path: "/api-reference",
    locked: true
  },
  {
    icon: <BsGift />,
    name: "What's new?",
    path: "/whats-new",
    locked: true
  },
]

export const accountMenu: IMenuItem[] = [
  {
    icon: <BsPerson />,
    name: "Profile",
    path: "/profile",
    locked: true
  },
  {
    icon: <BsGearFill />,
    name: "Settings",
    path: "/settings",
    locked: true
  },
]

export const pageNotFound: IMenuItem = { icon: null, name: "Page not found", path: "/404" }

export const ALL_MENUS = [...primerMenu, ...supportMenu, ...accountMenu]
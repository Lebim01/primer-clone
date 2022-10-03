import { ALL_MENUS, pageNotFound } from "@src/constans/menu";
import { useRouter } from "next/router";
import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from "react";

type Props = {
  children: ReactNode;
}

interface IHeaderContext {
  path: IMenuItem[];
  setPath: (path: IMenuItem[]) => void;

  actionButtons: ReactNode;
  setActionButtons: (ActionButtons: ReactNode) => void;
}

const HeaderContext = createContext<IHeaderContext>({
  path: [],
  setPath: () => {},
  actionButtons: null,
  setActionButtons: () => {}
})

const HeaderContextProvider = (props: Props) => {
  const router = useRouter()
  const menu = useMemo(() => ALL_MENUS.find(m => m.path == router.pathname), [router.pathname])
  const [customPath, setCustomPath] = useState<IMenuItem[] | null>(null)
  const [actionButtons, setActionButtons] = useState<ReactNode | null>(null)

  useEffect(() => {
    if(router.pathname != "/workflows/[uuid]")
      setCustomPath(null)
  }, [router.pathname])

  const setPath = (path: IMenuItem[]) => {
    setCustomPath(path)
  }

  return (
    <HeaderContext.Provider 
      value={{
        actionButtons,
        setActionButtons,
        setPath,
        path: 
          customPath !== null
            ? customPath 
            : menu
              ? [menu]
              : [pageNotFound]
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}

export default HeaderContextProvider
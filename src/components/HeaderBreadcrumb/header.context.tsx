import { ALL_MENUS, pageNotFound } from "@src/constans/menu";
import { useRouter } from "next/router";
import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from "react";

type Props = {
  children: ReactNode;
}

interface IHeaderContext {
  path: IMenuItem[];
  setPath: (path: IMenuItem[]) => void;
}

const HeaderContext = createContext<IHeaderContext>({
  path: [],
  setPath: () => {}
})

const HeaderContextProvider = (props: Props) => {
  const router = useRouter()
  const menu = useMemo(() => ALL_MENUS.find(m => m.path == router.pathname), [router.pathname])
  const [customPath, setCustomPath] = useState<IMenuItem[] | null>(null)

  useEffect(() => {
    setCustomPath(null)
  }, [router.pathname])

  const setPath = (path: IMenuItem[]) => {
    setCustomPath(path)
  }

  return (
    <HeaderContext.Provider value={{
      setPath,
      path: 
        customPath !== null
          ? customPath 
          : menu
            ? [menu]
            : [pageNotFound]
    }}>
      {props.children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}

export default HeaderContextProvider
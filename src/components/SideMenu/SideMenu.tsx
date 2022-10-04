/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { accountMenu, primerMenu, supportMenu } from "@src/constans/menu"
import MenuSeparator from "./SubMenu/MenuSeparator"
import SubMenu from "./SubMenu/SubMenu"
import useCollapse from "./useCollapse"

const SideMenu = () => {
  const collapse = useCollapse()

  return (
    <div className={`min-h-full ${collapse ? "w-[80px]" : "w-[250px]"} border-r-2 border-gray-100 py-8 transition-width dark:border-r dark:border-zinc-500`}>
      <div className="mb-8 px-4">
        <img src={"/logo.svg"} className="h-[50px] object-contain" />
      </div>

      <SubMenu 
        title="PRIMER"
        menus={primerMenu}
      />
      {!collapse &&
        <>
          <MenuSeparator />
          <SubMenu 
            title="SUPPORT" 
            menus={supportMenu} 
          />
          <MenuSeparator />
          <SubMenu 
            title="ACCOUNT" 
            menus={accountMenu} 
          /> 
        </>
      }
    </div>
  )
}

export default SideMenu
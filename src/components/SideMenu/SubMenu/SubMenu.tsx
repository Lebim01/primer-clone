import useCollapse from "../useCollapse";
import ItemMenu from "./ItemMenu";

type Props = {
  title: string;
  menus: IMenuItem[];
}

const SubMenu = (props: Props) => {
  const collapse = useCollapse()

  return (
    <div className={collapse ? "flex justify-center" : "px-4"}>
      {!collapse && <div className="mb-2 text-sm font-bold dark:text-neutral-300">{props.title}</div>}
      <div className={`flex flex-col ${collapse ? "gap-y-6" : "gap-y-2"}`}>
        {props.menus.map((item, index) => 
          <ItemMenu {...item} key={index} />
        )}
      </div>
    </div>
  )
}

export default SubMenu
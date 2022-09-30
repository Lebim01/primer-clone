import ItemMenu from "./ItemMenu";

type Props = {
  title: string;
  menus: IMenuItem[];
}

const SubMenu = (props: Props) => {
  return (
    <div className="px-4">
      <div className="mb-2 text-xxs font-bold">{props.title}</div>
      <div className="flex flex-col gap-y-2">
        {props.menus.map((item, index) => 
          <ItemMenu {...item} key={index} />
        )}
      </div>
    </div>
  )
}

export default SubMenu
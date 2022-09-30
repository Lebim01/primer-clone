const ItemMenu = (props: IMenuItem) => {
  return (
    <div className="flex items-center gap-4 rounded px-4 py-1 font-medium text-neutral-400 hover:cursor-pointer hover:bg-neutral-100 hover:text-black">
      {props.icon}
      <span>{props.name}</span>
    </div>
  )
}

export default ItemMenu
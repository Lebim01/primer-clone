type Props = {
  value?: string;
}

const Select = (props: Props) => {
  return (
    <div className="h-4 w-full rounded border">
      { props.value }
    </div>
  )
}

export default Select
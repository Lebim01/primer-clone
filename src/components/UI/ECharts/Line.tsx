import EChartsWrapper from "./Wrapper"

type Props = {
  id: string;
  options: echarts.EChartsOption;
  className?: string;
}

const LineChart = ({ className = "h-80", ...props }: Props) => {
  return (
    <EChartsWrapper id={props.id} options={props.options} className={className} />
  )
}

export default LineChart
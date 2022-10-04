import { useCallback, useRef } from "react"
import * as echarts from "echarts";

type Props = {
  id: string;
  options: echarts.EChartsOption;
  className: string;
}

const EChartsWrapper = ({ className, ...props }: Props) => {
  const instance = useRef<any>(null);

  const reloadInstance = () => {
    const chartDom: HTMLElement = document.getElementById(props.id)!;
    const myChart = echarts.getInstanceByDom(chartDom) ?? echarts.init(chartDom);
    myChart.clear();

    myChart.setOption(props.options);

    instance.current = myChart;
  }

  const renderChart = useCallback(() => {
    reloadInstance()
  }, [props.options]);

  return (
    <div ref={renderChart} id={props.id} className={`w-full ${className}`}></div>
  )
}

export default EChartsWrapper
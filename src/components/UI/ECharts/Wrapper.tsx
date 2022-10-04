import { useCallback, useEffect, useRef } from "react"
import * as echarts from "echarts";
import useWindowSize from "@src/hooks/useWindowSize";
import useInspectElementSize from "@src/hooks/useInspectElementSize";

type Props = {
  id: string;
  options: echarts.EChartsOption;
  className: string;
}

const EChartsWrapper = ({ className, ...props }: Props) => {
  const instance = useRef<any>(null);
  const element = useRef<any>(null)
  const { width: elementWidth } = useInspectElementSize(element)

  const reloadInstance = () => {
    const chartDom: HTMLElement = document.getElementById(props.id)!;
    const myChart = echarts.getInstanceByDom(chartDom) ?? echarts.init(chartDom);
    myChart.clear();

    myChart.setOption(props.options);

    instance.current = myChart;
    instance.current.resize()
  }

  const renderChart = useCallback((ref: any) => {
    reloadInstance()
    element.current = ref
  }, [props.options]);

  useEffect(() => {
    if(instance.current){
      instance.current.resize()
    }
  }, [elementWidth])

  return (
    <div ref={renderChart} id={props.id} className={`w-full max-w-full ${className}`}></div>
  )
}

export default EChartsWrapper
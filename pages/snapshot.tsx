import Counter from "@src/components/UI/Counter"
import { BsCurrencyEuro, BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import LineChart from "@src/components/UI/ECharts/Line"
import { randomNumber } from "@src/utils/number"
import EChartsWrapper from "@src/components/UI/ECharts/Wrapper"
import Tabs from "@src/components/UI/Tabs"

const TabItem = ({ title, percent, diff, icon }: any) => (
  <div className="flex items-center gap-2 border-b pb-3 text-xs">
    <span className="flex-1">{title}</span>
    <span className="font-bold">
      {percent}%
    </span>
    <div className="flex items-center gap-1 rounded bg-gray-200 px-1 text-xs">
      {icon} {diff}%
    </div>
  </div>
)

const Snapshot = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-8 p-10 lg:grid-cols-3" style={{ gridTemplateRows: "max-content" }}>

      <div className="flex h-96 flex-col gap-4 rounded bg-primary-thin p-6 text-white shadow">
        <span className="text-xl">Sales</span>
        <div className="flex flex-col">
          <span className="text-sm">Total sales volume</span>
          <div className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center text-3xl">
              <BsCurrencyEuro />
              <Counter className="" from={0} to={1.2} />
              k
            </span>
            <span className="flex items-center text-3xl text-gray-300 text-opacity-80">
              <BsCurrencyEuro />
              <Counter className="" from={0} to={1} />
              k
            </span>
            <span className="flex flex-1 justify-end">
              <div className="flex h-8 items-center gap-1 rounded bg-violet-800/30 px-2 text-xs">
                <BsFillCaretUpFill /> 25%
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Average payment</span>
          <div className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center text-3xl">
              <BsCurrencyEuro />
              <Counter className="" from={0} to={5} />
            </span>
            <span className="flex items-center text-3xl text-gray-300 text-opacity-80">
              <BsCurrencyEuro />
              <Counter className="" from={0} to={4} />
            </span>
            <span className="flex flex-1 justify-end">
              <div className="flex h-8 items-center gap-1 rounded bg-violet-800/30 px-2 text-xs">
                <BsFillCaretUpFill /> 20%
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-96 flex-col rounded bg-gray-100/50 shadow lg:col-span-2">
        <div className="flex px-4 pt-4">
          <div className="flex-1">
            <span className="font-semibold">Daily sales</span>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col text-primary-thin">
              <span className="flex justify-end text-xs">
                Avg/day
              </span>
              <span className="flex items-center text-2xl font-bold">
                <BsCurrencyEuro />
                65
              </span>
            </div>
            <div className="flex flex-col text-gray-400">
              <span className="flex justify-end text-xs">
                Avg/day
              </span>
              <span className="flex items-center text-2xl font-bold">
                <BsCurrencyEuro />
                52
              </span>
            </div>
            <div></div>
          </div>
        </div>
        <LineChart 
          id="chart-daily-sales"
          options={{
            xAxis: {
              type: 'category',
              data: new Array(25).fill(1),
              show: false
            },
            yAxis: {
              type: 'value',
              scale: true,
              min: 0
            },
            grid: {
              bottom: "10%",
              left: "8%",
              right: "5%",
              top: "5%"
            },
            series: [
              {
                data: new Array(25).fill(1).map(() => randomNumber(50, 90)),
                type: 'line',
                lineStyle: {
                  width: 5
                },
                symbol: "none"
              },
              {
                data: new Array(25).fill(1).map(() => randomNumber(50, 90)),
                type: 'line',
                lineStyle: {
                  width: 5,
                  color: "#9ca3af"
                },
                symbol: "none"
              }
            ],
          }}
        />
      </div>

      <div className="flex h-96 flex-col gap-4 overflow-hidden rounded bg-gray-100/50 p-6 shadow">
        <span className="text-xl">Declines</span>
        <Tabs 
          className="gap-5 border-b"
          tabs={[
            {
              label: "Total",
              children: (
                <EChartsWrapper 
                  id="chart-total-declines" 
                  className="h-60"
                  options={{
                    series: [
                      {
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        pointer: {
                          show: false
                        },
                        progress: {
                          show: true,
                          overlap: false,
                          roundCap: true,
                          clip: false,
                          itemStyle: {
                            borderWidth: 1,
                          }
                        },
                        axisLine: {
                          lineStyle: {
                            width: 10,
                            color: [[1, '#fee2e2']],
                            shadowColor: '#fee2e2',
                          },
                        },
                        splitLine: {
                          show: false,
                          distance: 0,
                          length: 10,
                        },
                        axisTick: {
                          show: false
                        },
                        axisLabel: {
                          show: false,
                          distance: 50,
                        },
                        itemStyle: {
                          color: "rgb(239 68 68)",
                        },
                        data: [
                          {
                            value: 10,
                            name: '▼ 5%',
                            title: {
                              offsetCenter: ['0%', '-25%'],
                              color: "#f87171"
                            },
                            detail: {
                              valueAnimation: true,
                              offsetCenter: ['0%', '-0%'],
                              color: "black"
                            }
                          }
                        ],
                        title: {
                          fontSize: 14
                        },
                        detail: {
                          width: 50,
                          height: 14,
                          fontSize: 14,
                          color: 'auto',
                          backgroundColor: "#eee",
                          borderRadius: 5,
                          borderWidth: 1,
                          formatter: '{value}%'
                        },
                      }
                    ]
                  }}
                />
              )
            },
            {
              label: "Top 5 reasons",
              children: (
                <div className="flex flex-col gap-3">
                  <TabItem 
                    title="Suspected fraud"
                    percent={49}
                    diff={1}
                    icon={<BsFillCaretUpFill className="text-green-500" />}
                  />
                  <TabItem 
                    title="Expired card"
                    percent={24}
                    diff={1}
                    icon={<BsFillCaretDownFill className="text-red-500" />}
                  />
                  <TabItem 
                    title="Lost or stolen card"
                    percent={11}
                    diff={1}
                    icon={<BsFillCaretDownFill className="text-red-500" />}
                  />
                  <TabItem 
                    title="Invalid card number"
                    percent={11}
                    diff={1}
                    icon={<BsFillCaretDownFill className="text-red-500" />}
                  />
                  <TabItem 
                    title="Insufficient funds"
                    percent={5}
                    diff={4}
                    icon={<BsFillCaretUpFill className="text-green-500" />}
                  />
                </div>
              )
            },
          ]}
        />
      </div>

      <div className="flex h-96 flex-col gap-4 rounded bg-gray-100/50 p-6 shadow">
        <span className="text-xl">Authorizations</span>
        <EChartsWrapper 
          id="chart-authorization" 
          className="h-full"
          options={{
            series: [
              {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                  show: false
                },
                progress: {
                  show: true,
                  overlap: false,
                  roundCap: true,
                  clip: false,
                  itemStyle: {
                    borderWidth: 1,
                    
                  }
                },
                axisLine: {
                  lineStyle: {
                    width: 10,
                    color: [[1, '#bbf7d0']],
                    shadowColor: '#bbf7d0',
                  }
                },
                splitLine: {
                  show: false,
                  distance: 0,
                  length: 10
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false,
                  distance: 50
                },
                itemStyle: {
                  color: "#22c55e",
                },
                data: [
                  {
                    value: 74,
                    name: '▼ 2%',
                    title: {
                      offsetCenter: ['0%', '-25%'],
                      color: "#f87171"
                    },
                    detail: {
                      valueAnimation: true,
                      offsetCenter: ['0%', '-0%'],
                      color: "black"
                    }
                  }
                ],
                title: {
                  fontSize: 14
                },
                detail: {
                  width: 50,
                  height: 14,
                  fontSize: 14,
                  color: 'auto',
                  backgroundColor: "#eee",
                  borderRadius: 5,
                  borderWidth: 1,
                  formatter: '{value}%'
                },
              }
            ]
          }}
        />
      </div>

      <div className="flex h-96 flex-col gap-4 rounded bg-gray-100/50 p-6 shadow">
        <span className="text-xl">Conversions</span>
        <EChartsWrapper 
          id="chart-conversions" 
          className="h-full"
          options={{
            series: [
              {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                  show: false
                },
                progress: {
                  show: true,
                  overlap: false,
                  roundCap: true,
                  clip: false,
                  itemStyle: {
                    borderWidth: 1,
                  }
                },
                axisLine: {
                  lineStyle: {
                    width: 10,
                    color: [[1, '#bbf7d0']],
                    shadowColor: '#bbf7d0',
                  }
                },
                splitLine: {
                  show: false,
                  distance: 0,
                  length: 10
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false,
                  distance: 50
                },
                data: [
                  {
                    value: 88,
                    name: '▲ 10%',
                    title: {
                      offsetCenter: ['0%', '-25%'],
                      color: "#16a34a"
                    },
                    detail: {
                      valueAnimation: true,
                      offsetCenter: ['0%', '-0%'],
                      color: "black"
                    }
                  }
                ],
                itemStyle: {
                  color: "#22c55e",
                },
                title: {
                  fontSize: 14
                },
                detail: {
                  width: 50,
                  height: 14,
                  fontSize: 14,
                  color: 'auto',
                  backgroundColor: "#eee",
                  borderRadius: 5,
                  borderWidth: 1,
                  formatter: '{value}%'
                },
              }
            ]
          }}
        />
      </div>

    </div>
  )
}

const Container = () => (
  <Snapshot />
)

export default Container
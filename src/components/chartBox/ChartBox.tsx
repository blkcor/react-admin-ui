import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import "./chartbox.scss"

type ChartBoxProps = {
  icon: string,
  title: string,
  number: number | string,
  color: string,
  percentage: number,
  chartData: object[],
  dataKey: string
};


const ChartBox: React.FC<ChartBoxProps> = (props: ChartBoxProps) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{
          color: props.color
        }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none"
                }}
                labelStyle={{
                  display: "none"
                }}
                position={{
                  x: 10,
                  y: 60
                }}
              />
              <Line
                type={'monotone'}
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}

              />

            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{
            color: props.percentage < 0 ? "tomato" : "limegreen"
          }}>{props.percentage}%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}
export default ChartBox;

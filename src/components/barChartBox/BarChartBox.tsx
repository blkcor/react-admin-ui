import React from 'react';
import "./barChartBox.scss"
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
type BarChartBoxProps = {
  title: string,
  color: string,
  dataKey: string,
  chartData: object[],
};



const BarChartBox: React.FC<BarChartBoxProps> = (props) => {

  return (
    <div className='barChartBox'>
      <h1>{props.title}</h1>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#2a3447",
              borderRadius: "5px",
            }}
            labelStyle={{
              display: "none",
            }}
            cursor={{
              fill: "rgba(255, 255, 255, 0.1)",
            }}

          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default BarChartBox;

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './DashboardChart.css'

const data = [
  { month: 'Jan', 2022: 40, 2023: 50, 2024: 70 },
  { month: 'Feb', 2022: 30, 2023: 20, 2024: 40 },
  { month: 'Mar', 2022: 25, 2023: 30, 2024: 50 },
  { month: 'Apr', 2022: 35, 2023: 40, 2024: 60 },
  { month: 'May', 2022: 40, 2023: 50, 2024: 70 },
  { month: 'Jun', 2022: 70, 2023: 60, 2024: 80 },
  { month: 'Jul', 2022: 65, 2023: 70, 2024: 90 },
  { month: 'Aug', 2022: 55, 2023: 60, 2024: 70 },
  { month: 'Sep', 2022: 50, 2023: 65, 2024: 75 },
  { month: 'Oct', 2022: 40, 2023: 60, 2024: 70 },
  { month: 'Nov', 2022: 30, 2023: 60, 2024: 80 },
  { month: 'Dec', 2022: 20, 2023: 55, 2024: 85 },
];

const DasboardChart = () => {
  return (
    <div>
      <AreaChart className='areaChart'
        width={900}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 14 }}
          interval={0} 
        />
        <YAxis 
          domain={[0, 100]} 
          ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} 
          tick={{ fontSize: 14 }} 
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="2022"
          stroke="#8884d8"
          fill="#e6e2ff"
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="2023"
          stroke="#ff928a"
          fill="#f9dcda"
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="2024"
          stroke="#3cc3df"
          fill="#DBFFDF"
          fillOpacity={0.3}
        />
      </AreaChart>
    </div>
  );
};

export default DasboardChart;




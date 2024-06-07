import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 90%;
  height: 400px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

interface ActivityChartProps {
  data: any[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="commits" stroke="#8884d8" />
          <Line type="monotone" dataKey="pullRequests" stroke="#82ca9d" />
          <Line type="monotone" dataKey="merges" stroke="#ffc658" />
          <Line type="monotone" dataKey="meetings" stroke="#ff7300" />
          <Line type="monotone" dataKey="documentation" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ActivityChart;


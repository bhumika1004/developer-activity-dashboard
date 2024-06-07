import React, { useEffect, useState } from 'react';
import Header from './Header';
import ActivityChart from './ActivityChart';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 20px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
`;

const mockData = [
  {
    "day": "Monday",
    "commits": 10,
    "pullRequests": 5,
    "merges": 3,
    "meetings": 2,
    "documentation": 7
  },
  {
    "day": "Tuesday",
    "commits": 12,
    "pullRequests": 4,
    "merges": 5,
    "meetings": 3,
    "documentation": 6
  },
  {
    "day": "Wednesday",
    "commits": 8,
    "pullRequests": 6,
    "merges": 4,
    "meetings": 2,
    "documentation": 5
  },
  {
    "day": "Thursday",
    "commits": 14,
    "pullRequests": 5,
    "merges": 3,
    "meetings": 1,
    "documentation": 8
  },
  {
    "day": "Friday",
    "commits": 11,
    "pullRequests": 3,
    "merges": 2,
    "meetings": 2,
    "documentation": 6
  },
  {
    "day": "Saturday",
    "commits": 7,
    "pullRequests": 2,
    "merges": 1,
    "meetings": 1,
    "documentation": 4
  },
  {
    "day": "Sunday",
    "commits": 6,
    "pullRequests": 1,
    "merges": 1,
    "meetings": 0,
    "documentation": 3
  }
];

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  return (
    <DashboardContainer>
      <Header />
      <ActivityChart data={data} />
    </DashboardContainer>
  );
};

export default Dashboard;


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const data = [
        {
            name: "Assignment 1",
            marks: 28
        },
        {
            name: "Assignment 2",
            marks: 55
        },
        {
            name: "Assignment 3",
            marks: 54
        },
        {
            name: "Assignment 4",
            marks: 55
        },
        {
            name: "Assignment 5",
            marks: 54
        },
        {
            name: "Assignment 6",
            marks: 60
        },
        {
            name: "Assignment 7",
            marks: 60
        }
    ];

    return (
        <div>
            <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="marks"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
    </LineChart>
        </div>
    );
};

export default Statistics;
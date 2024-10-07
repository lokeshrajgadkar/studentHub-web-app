import React, { useState } from "react";
import {
  LineChart,
  AreaChart, Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    semester: "Sem",
    gpa: 2.3,
  },
  {
    semester: "Sem-1",
    gpa: 3.3,
  },
  {
    semester: "Sem-2",
    gpa: 2.9,
  },
  {
    semester: "Sem-3",
    gpa: 3.8,
  },
  {
    semester: "Sem-4",
    gpa: 1.8,
  },
  {
    semester: "Sem-5",
    gpa: 3.6,
  },
  {
    semester: "Sem-6",
    gpa: 3.4,
  },
];

const AreaChartGraph = () => {
  const [opacity, setOpacity] = useState({
    gpa: 1,
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div className="max-w-[35rem] h-[20rem] bg-white rounded-lg border shadow-lg p-3">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis />
          <Tooltip />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Area type="monotone" dataKey="gpa" stackId="1" stroke="#008fb3" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartGraph;

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const skillsData = [
  { name: 'Project 1', frontend: 15000, backend: 8000, design: 5000, other: 17000 },
  { name: 'Project 2', frontend: 8000, backend: 5000, design: 3000, other: 8000 },
  { name: 'Project 3', frontend: 25000, backend: 8000, design: 6000, other: 17000 },
  { name: 'Project 4', frontend: 6000, backend: 3000, design: 2000, other: 3000 },
  { name: 'Project 5', frontend: 10000, backend: 5000, design: 3000, other: 3000 },
  { name: 'Project 6', frontend: 12000, backend: 6000, design: 4000, other: 6000 },
  { name: 'Project 7', frontend: 15000, backend: 6000, design: 4000, other: 6000 },
  { name: 'Project 8', frontend: 18000, backend: 8000, design: 5000, other: 7000 },
  { name: 'Project 9', frontend: 20000, backend: 8000, design: 5000, other: 6000 },
];

const frontendData = [
  { name: 'Done', value: 53, color: '#ff6b6b' },
  { name: 'On Progress', value: 17, color: '#4ecdc4' },
  { name: 'Not Started 1', value: 30, color: '#ffd93d' },
  { name: 'Not Started 2', value: 30, color: '#74b9ff' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Skills Bar Chart */}
        <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/20 shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl font-bold text-white">Skills</h1>
          </div>
          <div className="w-full border-t-2 border-white/80 mb-8" />
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                barCategoryGap="15%"
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  tickFormatter={(value) => `${value.toLocaleString()}`}
                />
                <Bar dataKey="frontend" stackId="a" fill="#ffd93d" />
                <Bar dataKey="backend" stackId="a" fill="#4ecdc4" />
                <Bar dataKey="design" stackId="a" fill="#ff6b6b" />
                <Bar dataKey="other" stackId="a" fill="#ffffff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Frontend Development Progress */}
        <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/20 shadow-xl">
          <div className="flex items-start mb-8">
            <h2 className="text-3xl font-bold text-white">
              Frontend
              <br />
              <span className="text-2xl">Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frontendData.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { value: item.value },
                          { value: 100 - item.value },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={60}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                      >
                        <Cell fill={item.color} />
                        <Cell fill="#1e293b" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{item.value}%</span>
                  </div>
                </div>
                <h3 className="text-white font-medium text-center leading-tight">
                  {(item.name === 'Not Started 1' || item.name === 'Not Started 2')
                    ? 'Not Started'
                    : item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20 shadow-xl">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-400 rounded" />
              <span className="text-slate-300 text-sm">Frontend</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-teal-400 rounded" />
              <span className="text-slate-300 text-sm">Backend</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-400 rounded" />
              <span className="text-slate-300 text-sm">Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-white rounded" />
              <span className="text-slate-300 text-sm">Other</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

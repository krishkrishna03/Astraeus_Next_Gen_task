import { useState } from 'react'
import KPICard from '../components/dashboard/KPICard'
import AIInsightsCard from '../components/dashboard/AIInsightsCard'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart'
import BarChart from '../components/charts/BarChart'

import { 
  kpiData, 
  salesData, 
  demographicsData, 
  trafficSourcesData,
  userActivityData,
  aiInsights
} from '../services/mockData'

function Dashboard() {
  const [timeRange, setTimeRange] = useState('30d')

  const handleTimeRangeChange = (range) => {
    setTimeRange(range)
    // In a real app, this would trigger data refetching for the new range
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <div className="mt-3 sm:mt-0 bg-white dark:bg-slate-800 rounded-lg shadow-sm p-1 inline-flex">
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '7d' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
            onClick={() => handleTimeRangeChange('7d')}
          >
            7d
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '30d' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
            onClick={() => handleTimeRangeChange('30d')}
          >
            30d
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '90d' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
            onClick={() => handleTimeRangeChange('90d')}
          >
            90d
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeRange === '1y' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
            onClick={() => handleTimeRangeChange('1y')}
          >
            1y
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi) => (
          <KPICard 
            key={kpi.id} 
            title={kpi.name} 
            value={kpi.value} 
            change={kpi.change} 
            trend={kpi.trend} 
          />
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <LineChart 
            data={salesData} 
            title="Sales Performance"
            lines={[
              { dataKey: 'sales', name: 'Sales', color: '#2563EB' },
              { dataKey: 'target', name: 'Target', color: '#10B981' }
            ]}
            xAxisKey="name"
          />
        </div>
        <div>
          <AIInsightsCard insights={aiInsights} />
        </div>
      </div>

      {/* Secondary Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div>
          <PieChart 
            data={demographicsData} 
            title="User Demographics"
          />
        </div>
        <div>
          <PieChart 
            data={trafficSourcesData} 
            title="Traffic Sources"
          />
        </div>
        <div>
          <BarChart 
            data={userActivityData} 
            title="User Activity by Hour"
            bars={[
              { dataKey: 'users', name: 'Active Users' }
            ]}
            xAxisKey="hour"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
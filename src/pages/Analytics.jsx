import { useState } from 'react'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import PieChart from '../components/charts/PieChart'
import { 
  salesData, 
  demographicsData, 
  productCategoriesData, 
  trafficSourcesData 
} from '../services/mockData'

function Analytics() {
  const [activeTab, setActiveTab] = useState('sales')
  
  const handleExport = () => {
    // In a real app, this would generate and download a report
    const data = {
      sales: salesData,
      demographics: demographicsData,
      products: productCategoriesData,
      traffic: trafficSourcesData
    }
    
    const jsonString = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'analytics-report.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'sales':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LineChart 
                data={salesData} 
                title="Sales Over Time"
                lines={[
                  { dataKey: 'sales', name: 'Sales', color: '#3B82F6' },
                  { dataKey: 'target', name: 'Target', color: '#10B981' }
                ]}
                xAxisKey="name"
                height={350}
              />
              <BarChart 
                data={salesData} 
                title="Sales vs Target"
                bars={[
                  { dataKey: 'sales', name: 'Sales', color: '#3B82F6' },
                  { dataKey: 'target', name: 'Target', color: '#10B981' }
                ]}
                xAxisKey="name"
                height={350}
              />
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-100 p-4 rounded-lg border border-dark-200">
                  <div className="text-sm text-dark-500 mb-1">Total Sales</div>
                  <div className="text-2xl font-semibold text-white">$857,429</div>
                  <div className="mt-2 text-sm text-success-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>8.3% vs previous period</span>
                  </div>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg border border-dark-200">
                  <div className="text-sm text-dark-500 mb-1">Avg. Order Value</div>
                  <div className="text-2xl font-semibold text-white">$125.42</div>
                  <div className="mt-2 text-sm text-success-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>3.2% vs previous period</span>
                  </div>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg border border-dark-200">
                  <div className="text-sm text-dark-500 mb-1">Conversion Rate</div>
                  <div className="text-2xl font-semibold text-white">4.7%</div>
                  <div className="mt-2 text-sm text-error-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>2.1% vs previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'customers':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PieChart 
                data={demographicsData} 
                title="Customer Age Demographics"
                height={350}
              />
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-dark-600">Customer Satisfaction</span>
                      <span className="text-sm font-medium text-dark-600">92%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-dark-600">Customer Retention</span>
                      <span className="text-sm font-medium text-dark-600">78%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-dark-600">New Customer Acquisition</span>
                      <span className="text-sm font-medium text-dark-600">54%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2.5">
                      <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '54%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-dark-600">Customer Lifetime Value</span>
                      <span className="text-sm font-medium text-dark-600">67%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2.5">
                      <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'products':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PieChart 
                data={productCategoriesData} 
                title="Product Categories"
                height={350}
              />
              <BarChart 
                data={productCategoriesData} 
                title="Product Category Performance"
                bars={[
                  { dataKey: 'value', name: 'Sales %' }
                ]}
                xAxisKey="name"
                height={350}
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-white">Advanced Analytics</h1>
        <button className="btn btn-primary" onClick={handleExport}>
          Export Report
        </button>
      </div>

      <div className="mb-6">
        <div className="bg-dark-100 rounded-lg shadow-sm border border-dark-200 overflow-hidden">
          <div className="flex">
            <button 
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'sales' ? 'text-primary-400 border-b-2 border-primary-500' : 'text-dark-500 hover:text-dark-400'}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales Analysis
            </button>
            <button 
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'customers' ? 'text-primary-400 border-b-2 border-primary-500' : 'text-dark-500 hover:text-dark-400'}`}
              onClick={() => setActiveTab('customers')}
            >
              Customer Insights
            </button>
            <button 
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'products' ? 'text-primary-400 border-b-2 border-primary-500' : 'text-dark-500 hover:text-dark-400'}`}
              onClick={() => setActiveTab('products')}
            >
              Product Performance
            </button>
          </div>
        </div>
      </div>

      {renderContent()}
    </div>
  )
}

export default Analytics
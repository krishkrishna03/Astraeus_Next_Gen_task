import { useState } from 'react'
import { dataSources } from '../services/mockData'
import { CheckCircleIcon, ExclamationIcon } from '../components/icons/Icons'

function DataSources() {
  const [activeTab, setActiveTab] = useState('connected')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSources = dataSources.filter(source => 
    source.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || 
     (activeTab === 'connected' && source.status === 'connected') ||
     (activeTab === 'error' && source.status === 'error'))
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Data Sources</h1>
        <button className="mt-4 md:mt-0 btn btn-primary">
          + Connect New Source
        </button>
      </div>

      <div className="card overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search data sources..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === 'all' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600'}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'connected' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-y border-r border-slate-300 dark:border-slate-600'}`}
              onClick={() => setActiveTab('connected')}
            >
              Connected
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === 'error' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-y border-r border-slate-300 dark:border-slate-600'}`}
              onClick={() => setActiveTab('error')}
            >
              Error
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Last Sync
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Records
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
              {filteredSources.map((source) => (
                <tr key={source.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{source.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-600 dark:text-slate-300">{source.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      source.status === 'connected' 
                        ? 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-300' 
                        : 'bg-error-50 text-error-700 dark:bg-error-900/30 dark:text-error-300'
                    }`}>
                      {source.status === 'connected' ? (
                        <CheckCircleIcon className="w-3 h-3 mr-1" />
                      ) : (
                        <ExclamationIcon className="w-3 h-3 mr-1" />
                      )}
                      <span className="capitalize">{source.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-600 dark:text-slate-300">{formatDate(source.lastSync)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-600 dark:text-slate-300">{new Intl.NumberFormat().format(source.recordCount)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                      Refresh
                    </button>
                    <button className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredSources.length === 0 && (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400">
              No data sources found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataSources
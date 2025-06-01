import { useState } from 'react'
import { LightbulbIcon, ExclamationIcon, CheckCircleIcon } from '../icons/Icons'

function AIInsightsCard({ insights }) {
  const [expandedInsight, setExpandedInsight] = useState(null)

  const toggleInsight = (id) => {
    setExpandedInsight(expandedInsight === id ? null : id)
  }

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'high':
        return <ExclamationIcon className="w-4 h-4 text-error-500" />
      case 'medium':
        return <ExclamationIcon className="w-4 h-4 text-warning-500" />
      case 'low':
        return <CheckCircleIcon className="w-4 h-4 text-success-500" />
      default:
        return <LightbulbIcon className="w-4 h-4 text-primary-500" />
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'anomaly':
        return 'bg-error-50 text-error-700 dark:bg-error-900/30 dark:text-error-300'
      case 'opportunity':
        return 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-300'
      case 'correlation':
        return 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
      case 'prediction':
        return 'bg-warning-50 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300'
      default:
        return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    }
  }

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
    <div className="card overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="flex items-center">
          <LightbulbIcon className="w-5 h-5 mr-2" />
          <h3 className="font-semibold">AI Insights</h3>
        </div>
      </div>
      
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {insights.map((insight) => (
          <div 
            key={insight.id}
            className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 cursor-pointer"
            onClick={() => toggleInsight(insight.id)}
          >
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                {getSeverityIcon(insight.severity)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900 dark:text-white">{insight.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(insight.category)} capitalize`}>
                    {insight.category}
                  </span>
                </div>
                
                <div className={`mt-1 text-sm text-slate-600 dark:text-slate-400 overflow-hidden transition-all duration-300 ${expandedInsight === insight.id ? 'max-h-40' : 'max-h-0'}`}>
                  <p>{insight.description}</p>
                </div>
                
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{formatDate(insight.timestamp)}</span>
                  <span className="underline">
                    {expandedInsight === insight.id ? 'Show less' : 'Show more'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIInsightsCard
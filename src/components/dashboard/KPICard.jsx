import { CheckCircleIcon, ExclamationIcon } from '../icons/Icons'

function KPICard({ title, value, change, trend }) {
  // Format value based on type
  const formatValue = (value) => {
    if (typeof value === 'number') {
      // Format as currency if title contains 'Revenue'
      if (title.toLowerCase().includes('revenue')) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(value)
      }
      // Format as percentage if title contains 'Rate'
      else if (title.toLowerCase().includes('rate')) {
        return `${value}%`
      }
      // Format time in minutes:seconds if title contains 'Time'
      else if (title.toLowerCase().includes('time')) {
        const minutes = Math.floor(value / 60)
        const seconds = value % 60
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
      }
      // Format with comma separator for large numbers
      else if (value >= 1000) {
        return new Intl.NumberFormat('en-US').format(value)
      }
    }
    return value
  }

  return (
    <div className="card p-4 transition-all duration-300 hover:shadow-md">
      <h3 className="text-sm text-slate-500 dark:text-slate-400 font-medium">{title}</h3>
      <div className="mt-1 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-slate-900 dark:text-white">
          {formatValue(value)}
        </p>
        <div 
          className={`
            px-2 py-1 rounded-full text-xs font-medium flex items-center
            ${trend === 'up' 
              ? change > 0 
                ? 'bg-success-50 text-success-700' 
                : 'bg-error-50 text-error-700'
              : change > 0 
                ? 'bg-error-50 text-error-700' 
                : 'bg-success-50 text-success-700'
            }
          `}
        >
          {trend === 'up' ? (
            change > 0 ? (
              <CheckCircleIcon className="w-3 h-3 mr-1" />
            ) : (
              <ExclamationIcon className="w-3 h-3 mr-1" />
            )
          ) : (
            change > 0 ? (
              <ExclamationIcon className="w-3 h-3 mr-1" />
            ) : (
              <CheckCircleIcon className="w-3 h-3 mr-1" />
            )
          )}
          <span>{change > 0 ? '+' : ''}{change}%</span>
        </div>
      </div>
    </div>
  )
}

export default KPICard
import { NavLink } from 'react-router-dom'
import { 
  DashboardIcon, 
  DataSourceIcon, 
  AnalyticsIcon, 
  GeoIcon, 
  GraphIcon, 
  CollaborationIcon, 
  ChevronLeftIcon,
  ChevronRightIcon
} from '../icons/Icons'

function Sidebar({ isOpen, toggleSidebar }) {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <DashboardIcon className="w-5 h-5" /> },
    { name: 'Data Sources', path: '/data-sources', icon: <DataSourceIcon className="w-5 h-5" /> },
    { name: 'Analytics', path: '/analytics', icon: <AnalyticsIcon className="w-5 h-5" /> },
    { name: 'Geo Analysis', path: '/geo-analysis', icon: <GeoIcon className="w-5 h-5" /> },
    { name: 'Knowledge Graph', path: '/knowledge-graph', icon: <GraphIcon className="w-5 h-5" /> },
    { name: 'Collaboration', path: '/collaboration', icon: <CollaborationIcon className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200 dark:border-slate-700">
            <div className="text-xl font-bold text-primary-600 dark:text-primary-400 flex items-center">
              <span className="text-primary-500">Data</span>
              <span className="text-accent-500">Vision</span>
              <span className="text-secondary-500">AI</span>
            </div>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-3 py-2 rounded-lg transition-colors duration-200
                   ${isActive 
                    ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                   }`
                }
              >
                <span className={`mr-3`}>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
          
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-primary-700 dark:text-primary-300">Pro Tips</h4>
              <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                Use the AI assistant to analyze your data faster. Press Ctrl+K to search.
              </p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Collapse button for large screens */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex fixed left-64 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-r-md p-1 shadow-md z-10"
      >
        {isOpen ? (
          <ChevronLeftIcon className="w-4 h-4 text-slate-500" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-slate-500" />
        )}
      </button>
    </>
  )
}

export default Sidebar
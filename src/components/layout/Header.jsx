import { useState } from 'react'
import { BellIcon, SearchIcon, MenuIcon } from '../icons/Icons'
import SearchModal from './SearchModal'

function Header({ sidebarOpen, toggleSidebar }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-dark-100/80 backdrop-blur-sm border-b border-dark-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-3 lg:hidden text-dark-500 hover:text-dark-400 focus:outline-none"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-primary-400">
            DataVision<span className="text-accent-400">AI</span>
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full hover:bg-dark-200 text-dark-500"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-full hover:bg-dark-200 text-dark-500"
              aria-label="Notifications"
            >
              <div className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></div>
              <BellIcon className="w-5 h-5" />
            </button>
            
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-dark-100 rounded-lg shadow-lg py-2 border border-dark-200 animate-fade-in">
                <div className="px-4 py-2 border-b border-dark-200">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-dark-200 border-l-4 border-primary-500">
                    <p className="text-sm font-medium text-white">New data source connected</p>
                    <p className="text-xs text-dark-500">2 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-dark-200">
                    <p className="text-sm font-medium text-white">AI detected an anomaly in sales data</p>
                    <p className="text-xs text-dark-500">1 hour ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-dark-200">
                    <p className="text-sm font-medium text-white">Weekly report generated</p>
                    <p className="text-xs text-dark-500">5 hours ago</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-dark-200">
                  <button className="text-sm text-primary-400 hover:text-primary-300">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-800">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="User profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-2 text-sm font-medium hidden md:block text-white">Krishna</span>
          </div>
        </div>
      </div>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  )
}

export default Header
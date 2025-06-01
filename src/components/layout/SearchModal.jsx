import { useRef, useEffect, useState } from 'react'
import { SearchIcon } from '../icons/Icons'

function SearchModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const inputRef = useRef(null)
  const modalRef = useRef(null)

  const mockResults = [
    { type: 'dashboard', title: 'Main Dashboard', path: '/' },
    { type: 'visualization', title: 'Sales Performance Chart', path: '/analytics' },
    { type: 'dataset', title: 'Customer Demographics', path: '/data-sources' },
    { type: 'report', title: 'Q2 Financial Report', path: '/analytics' },
    { type: 'map', title: 'Customer Distribution Map', path: '/geo-analysis' },
  ]

  useEffect(() => {
    // Focus the input on modal open
    inputRef.current?.focus()

    // Handle escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    // Simple search filtering
    if (searchTerm.trim() === '') {
      setSearchResults([])
      return
    }

    const filtered = mockResults.filter(result => 
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filtered)
  }, [searchTerm])

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 flex items-start justify-center pt-16 px-4">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full animate-slide-up"
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center">
          <SearchIcon className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for dashboards, reports, data sources..."
            className="w-full bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex ml-2 items-center px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded">
            Esc
          </kbd>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {searchResults.length > 0 ? (
            <div className="space-y-1">
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg cursor-pointer"
                  onClick={onClose}
                >
                  <div className="flex items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 capitalize">
                      {result.type}
                    </span>
                    <h4 className="ml-2 font-medium">{result.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm ? (
            <div className="p-4 text-center text-slate-500 dark:text-slate-400">
              No results found for "{searchTerm}"
            </div>
          ) : (
            <div className="p-4 text-center text-slate-500 dark:text-slate-400">
              Start typing to search...
            </div>
          )}
        </div>

        <div className="p-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
          <p>
            Pro tip: Use <kbd className="px-1 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">Tab</kbd> to navigate and <kbd className="px-1 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">Enter</kbd> to select
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
import { useState } from 'react'
import { usStatesData } from '../services/mockData'

function GeoAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [viewMode, setViewMode] = useState('heatmap')

  // In a real app, this would come from topojson-client and actual map data
  // For this mock version, we'll use a simplified approach
  const getStateColor = (stateId) => {
    const stateData = usStatesData.find(state => state.id === stateId)
    if (!stateData) return '#e5e7eb'
    
    // Value is between 0-100, map to color intensity
    const value = stateData.value
    
    if (value >= 75) return '#2563eb' // highest intensity primary
    if (value >= 50) return '#60a5fa'
    if (value >= 25) return '#93c5fd'
    return '#dbeafe' // lowest intensity primary
  }

  const getRegionDetails = (regionId) => {
    return usStatesData.find(state => state.id === regionId) || null
  }

  // Mocked function to simulate map click
  const handleRegionClick = (stateId) => {
    setSelectedRegion(getRegionDetails(stateId))
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Geospatial Analysis</h1>
        <div className="mt-3 sm:mt-0 flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
            <span>View mode:</span>
            <select 
              className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md px-2 py-1"
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
            >
              <option value="heatmap">Heatmap</option>
              <option value="markers">Markers</option>
              <option value="regions">Regions</option>
            </select>
          </div>
          <button className="btn btn-primary">
            Export Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card p-4 h-full">
            <h3 className="text-lg font-semibold mb-4">Customer Distribution Map</h3>
            <div className="relative h-[500px] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
              {/* This would be a real map component in production */}
              <div className="text-center p-8">
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Map visualization would appear here using D3 geo projection with topojson.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                  {/* Sample states for interaction */}
                  {['CA', 'TX', 'NY', 'FL', 'IL', 'PA'].map(stateId => (
                    <button
                      key={stateId}
                      className="px-4 py-2 rounded-md text-white font-medium transition-all"
                      style={{ backgroundColor: getStateColor(stateId) }}
                      onClick={() => handleRegionClick(stateId)}
                    >
                      {stateId}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <div className="bg-white dark:bg-slate-700 shadow-md rounded-md p-2 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#dbeafe' }}></div>
                      <span className="text-xs">0-25</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#93c5fd' }}></div>
                      <span className="text-xs">25-50</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#60a5fa' }}></div>
                      <span className="text-xs">50-75</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563eb' }}></div>
                      <span className="text-xs">75-100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card h-full flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold">Region Details</h3>
            </div>
            
            {selectedRegion ? (
              <div className="p-4 flex-1">
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white">{selectedRegion.state}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Region ID: {selectedRegion.id}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Performance Score</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{selectedRegion.value}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-primary-500 h-2.5 rounded-full" 
                        style={{ width: `${selectedRegion.value}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Customers</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {Math.floor(selectedRegion.value * 547)}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Revenue</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        ${Math.floor(selectedRegion.value * 12546).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Growth</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {(selectedRegion.value / 10).toFixed(1)}%
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Conversion</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {(selectedRegion.value / 20 + 2).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-medium mb-2">Top Products in Region</h5>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                        <span className="text-sm">Product A</span>
                        <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                          ${Math.floor(selectedRegion.value * 420).toLocaleString()}
                        </span>
                      </li>
                      <li className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                        <span className="text-sm">Product B</span>
                        <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                          ${Math.floor(selectedRegion.value * 350).toLocaleString()}
                        </span>
                      </li>
                      <li className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                        <span className="text-sm">Product C</span>
                        <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                          ${Math.floor(selectedRegion.value * 280).toLocaleString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center">
                <div className="text-slate-500 dark:text-slate-400">
                  <p className="mb-2">No region selected</p>
                  <p className="text-sm">Click on a region in the map to view detailed information</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeoAnalysis
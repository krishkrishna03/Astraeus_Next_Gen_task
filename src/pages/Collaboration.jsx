import { useState } from 'react'
import { teamMembers, sharedDashboards } from '../services/mockData'

function Collaboration() {
  const [activeTab, setActiveTab] = useState('team')

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date)
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Collaboration</h1>
        <div className="mt-3 sm:mt-0 space-x-3">
          <button className="btn btn-secondary">
            Schedule Meeting
          </button>
          <button className="btn btn-primary">
            Create Dashboard
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="flex">
            <button 
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'team' ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              onClick={() => setActiveTab('team')}
            >
              Team Members
            </button>
            <button 
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'dashboards' ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              onClick={() => setActiveTab('dashboards')}
            >
              Shared Dashboards
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'team' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="card overflow-hidden">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold">Team Members</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-slate-900 dark:text-white">{member.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-600 dark:text-slate-300">{member.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            member.status === 'active' 
                              ? 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-300' 
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}>
                            <span className={`w-2 h-2 rounded-full mr-1.5 ${
                              member.status === 'active' ? 'bg-success-500' : 'bg-slate-400'
                            }`}></span>
                            <span className="capitalize">{member.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-600 dark:text-slate-300">{formatTime(member.lastActive)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                            Message
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="card overflow-hidden h-full">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold">Recent Activity</h3>
              </div>
              <div className="p-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 mx-auto"></div>
                  </div>
                  <div className="relative z-0 space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 ring-8 ring-white dark:ring-slate-800">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 ml-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Sophia Martinez</span> created a new dashboard
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">10 minutes ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-300 ring-8 ring-white dark:ring-slate-800">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 ml-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">James Wilson</span> viewed the Marketing Performance dashboard
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">25 minutes ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-300 ring-8 ring-white dark:ring-slate-800">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 ml-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Emma Thompson</span> shared a dashboard with the team
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">1 hour ago</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-300 ring-8 ring-white dark:ring-slate-800">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 ml-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Robert Johnson</span> commented on a data analysis
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sharedDashboards.map((dashboard) => (
              <div key={dashboard.id} className="card card-hover overflow-hidden">
                <div className={`h-2 ${dashboard.status === 'published' ? 'bg-success-500' : 'bg-warning-500'}`}></div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{dashboard.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Created by {dashboard.creator}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${dashboard.status === 'published' ? 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-300' : 'bg-warning-50 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300'}`}>
                      {dashboard.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex justify-between">
                      <span>Created</span>
                      <span>{formatDate(dashboard.createdAt)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Last modified</span>
                      <span>{formatDate(dashboard.lastModified)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Shared with</div>
                    <div className="flex -space-x-2">
                      {dashboard.shared.slice(0, 3).map((memberId) => {
                        const member = teamMembers.find(m => m.id === memberId)
                        return (
                          <div key={memberId} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden">
                            <img src={member?.avatar} alt={member?.name} className="h-full w-full object-cover" />
                          </div>
                        )
                      })}
                      {dashboard.shared.length > 3 && (
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300">
                          +{dashboard.shared.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                    <button className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      View
                    </button>
                    <button className="text-sm text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card p-0 overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold">Recent Comments</h3>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              <div className="p-4">
                <div className="flex">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={teamMembers[1].avatar} alt={teamMembers[1].name} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">{teamMembers[1].name}</h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Yesterday</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      Great insights on the customer segmentation! I think we should focus more on the high-value segment for our next campaign.
                    </p>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      On <span className="text-primary-600 dark:text-primary-400">Marketing Performance</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={teamMembers[2].avatar} alt={teamMembers[2].name} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">{teamMembers[2].name}</h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">2 days ago</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      I've added more detailed analysis on the customer behavior patterns. Check out the new visualization I created.
                    </p>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      On <span className="text-primary-600 dark:text-primary-400">Customer Behavior Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={teamMembers[0].avatar} alt={teamMembers[0].name} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">{teamMembers[0].name}</h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">3 days ago</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      The sales forecast looks promising. I've shared this with the executive team and they're impressed with the accuracy of our predictions.
                    </p>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      On <span className="text-primary-600 dark:text-primary-400">Sales Forecast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Collaboration
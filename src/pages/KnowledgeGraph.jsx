import { useState, useEffect, useRef } from 'react'
import { knowledgeGraphData } from '../services/mockData'

function KnowledgeGraph() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [nodeTypes, setNodeTypes] = useState({
    customer: true,
    product: true,
    campaign: true,
    location: true
  })
  const graphContainerRef = useRef(null)

  // In a real app, we would initialize a force-directed graph here using react-force-graph
  // For this demo, we'll create a simplified visualization
  
  // Function to get node color based on group
  const getNodeColor = (group) => {
    switch(group) {
      case 'customer': return '#2563EB' // primary
      case 'product': return '#0D9488' // secondary
      case 'campaign': return '#8B5CF6' // accent
      case 'location': return '#F59E0B' // warning
      default: return '#6B7280' // gray
    }
  }

  // Simulate selecting a node
  const handleNodeClick = (nodeId) => {
    const node = knowledgeGraphData.nodes.find(n => n.id === nodeId)
    setSelectedNode(node)
  }

  // Toggle node type visibility
  const toggleNodeType = (type) => {
    setNodeTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  // Filter nodes based on selected types
  const visibleNodes = knowledgeGraphData.nodes.filter(
    node => nodeTypes[node.group]
  )

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Knowledge Graph</h1>
        <div className="mt-3 sm:mt-0">
          <button className="btn btn-primary">
            Export Graph
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="card p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Entity Relationship Graph</h3>
              <div className="flex space-x-2">
                <button 
                  className={`px-2 py-1 text-xs rounded-md ${nodeTypes.customer ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
                  onClick={() => toggleNodeType('customer')}
                >
                  Customers
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded-md ${nodeTypes.product ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
                  onClick={() => toggleNodeType('product')}
                >
                  Products
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded-md ${nodeTypes.campaign ? 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
                  onClick={() => toggleNodeType('campaign')}
                >
                  Campaigns
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded-md ${nodeTypes.location ? 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
                  onClick={() => toggleNodeType('location')}
                >
                  Locations
                </button>
              </div>
            </div>
            
            <div 
              ref={graphContainerRef}
              className="relative h-[500px] bg-slate-50 dark:bg-slate-800/50 rounded-lg overflow-hidden"
            >
              {/* This would be a real force-directed graph in production */}
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-slate-500 dark:text-slate-400 mb-6">
                    Force-directed graph visualization would appear here using react-force-graph.
                  </p>
                  
                  <div className="inline-flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                    {visibleNodes.map(node => (
                      <button
                        key={node.id}
                        className="px-3 py-2 rounded-md text-white font-medium transition-all hover:opacity-90"
                        style={{ backgroundColor: getNodeColor(node.group) }}
                        onClick={() => handleNodeClick(node.id)}
                      >
                        {node.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <div className="bg-white dark:bg-slate-700 shadow-md rounded-md p-3 inline-flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getNodeColor('customer') }}></div>
                        <span className="text-xs">Customer</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getNodeColor('product') }}></div>
                        <span className="text-xs">Product</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getNodeColor('campaign') }}></div>
                        <span className="text-xs">Campaign</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getNodeColor('location') }}></div>
                        <span className="text-xs">Location</span>
                      </div>
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
              <h3 className="font-semibold">Entity Details</h3>
            </div>
            
            {selectedNode ? (
              <div className="p-4 flex-1">
                <div 
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: getNodeColor(selectedNode.group) }}
                >
                  {selectedNode.name.charAt(0)}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white">{selectedNode.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">{selectedNode.group}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Connected Entities</h5>
                  <div className="space-y-2">
                    {knowledgeGraphData.links
                      .filter(link => link.source === selectedNode.id || link.target === selectedNode.id)
                      .slice(0, 5)
                      .map((link, index) => {
                        const isSource = link.source === selectedNode.id
                        const connectedNodeId = isSource ? link.target : link.source
                        const connectedNode = knowledgeGraphData.nodes.find(n => n.id === connectedNodeId)
                        
                        return (
                          <div key={index} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                            <div className="flex items-center">
                              <div 
                                className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs"
                                style={{ backgroundColor: getNodeColor(connectedNode.group) }}
                              >
                                {connectedNode.name.charAt(0)}
                              </div>
                              <span className="text-sm">{connectedNode.name}</span>
                            </div>
                            <span className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full capitalize">
                              {isSource ? link.type : `is ${link.type}`}
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Entity Metrics</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Connections</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {knowledgeGraphData.links.filter(link => link.source === selectedNode.id || link.target === selectedNode.id).length}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Centrality</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {(Math.random() * 0.7 + 0.3).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center">
                <div className="text-slate-500 dark:text-slate-400">
                  <p className="mb-2">No entity selected</p>
                  <p className="text-sm">Click on an entity in the graph to view detailed information</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeGraph
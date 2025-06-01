// Mock data for various charts and visualizations

// Dashboard KPIs
export const kpiData = [
  { id: 1, name: 'Total Users', value: 32748, change: 12.5, trend: 'up' },
  { id: 2, name: 'Revenue', value: 857429, change: 8.3, trend: 'up' },
  { id: 3, name: 'Conversion Rate', value: 4.7, change: -2.1, trend: 'down' },
  { id: 4, name: 'Avg. Session Time', value: 287, change: 15.2, trend: 'up' }, // in seconds
]

// Sales over time
export const salesData = [
  { name: 'Jan', sales: 4000, target: 3800 },
  { name: 'Feb', sales: 3500, target: 3900 },
  { name: 'Mar', sales: 5000, target: 4000 },
  { name: 'Apr', sales: 4500, target: 4100 },
  { name: 'May', sales: 5500, target: 4200 },
  { name: 'Jun', sales: 6000, target: 4300 },
  { name: 'Jul', sales: 5500, target: 4400 },
  { name: 'Aug', sales: 6500, target: 4500 },
  { name: 'Sep', sales: 7000, target: 4600 },
  { name: 'Oct', sales: 6500, target: 4700 },
  { name: 'Nov', sales: 7500, target: 4800 },
  { name: 'Dec', sales: 9000, target: 4900 },
]

// User demographics
export const demographicsData = [
  { name: '18-24', value: 18 },
  { name: '25-34', value: 32 },
  { name: '35-44', value: 27 },
  { name: '45-54', value: 14 },
  { name: '55+', value: 9 },
]

// Traffic sources
export const trafficSourcesData = [
  { name: 'Direct', value: 30 },
  { name: 'Organic Search', value: 25 },
  { name: 'Paid Search', value: 15 },
  { name: 'Social Media', value: 20 },
  { name: 'Referral', value: 10 },
]

// User activity by hour
export const userActivityData = Array.from({ length: 24 }, (_, i) => {
  // Simulate higher traffic during business hours
  let baseValue = 100
  if (i >= 9 && i <= 17) {
    baseValue = 400
  } else if ((i >= 7 && i < 9) || (i > 17 && i <= 20)) {
    baseValue = 250
  }
  
  return {
    hour: i,
    users: Math.floor(baseValue + Math.random() * baseValue * 0.5),
  }
})

// Product categories
export const productCategoriesData = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Home & Garden', value: 20 },
  { name: 'Sports', value: 15 },
  { name: 'Books', value: 5 },
]

// Mock data sources
export const dataSources = [
  { 
    id: 1, 
    name: 'CRM Database', 
    type: 'SQL Database', 
    status: 'connected', 
    lastSync: '2025-04-12T14:30:00Z',
    recordCount: 54892,
    fields: 38,
  },
  { 
    id: 2, 
    name: 'Web Analytics', 
    type: 'API', 
    status: 'connected', 
    lastSync: '2025-04-12T13:45:00Z',
    recordCount: 982731,
    fields: 52,
  },
  { 
    id: 3, 
    name: 'Marketing Campaign Data', 
    type: 'CSV Import', 
    status: 'connected', 
    lastSync: '2025-04-11T09:15:00Z',
    recordCount: 3782,
    fields: 24,
  },
  { 
    id: 4, 
    name: 'Social Media Metrics', 
    type: 'API', 
    status: 'error', 
    lastSync: '2025-04-10T18:20:00Z',
    recordCount: 48192,
    fields: 31,
  },
  { 
    id: 5, 
    name: 'Customer Feedback', 
    type: 'MongoDB', 
    status: 'connected', 
    lastSync: '2025-04-12T10:00:00Z',
    recordCount: 8271,
    fields: 19,
  },
]

// AI insights
export const aiInsights = [
  {
    id: 1,
    title: 'Sales Anomaly Detected',
    description: 'Unusual spike in product category "Electronics" detected on April 10th, 2025. Sales increased by 237% compared to previous 30-day average.',
    severity: 'high',
    timestamp: '2025-04-12T08:32:17Z',
    category: 'anomaly',
  },
  {
    id: 2,
    title: 'Customer Segmentation Opportunity',
    description: 'Analysis suggests creating a new customer segment for "High-Value Seasonal Shoppers" could increase retention by 12-15%.',
    severity: 'medium',
    timestamp: '2025-04-11T14:18:45Z',
    category: 'opportunity',
  },
  {
    id: 3,
    title: 'Correlation Found',
    description: 'Strong correlation (r=0.87) discovered between website page load times and conversion rates. 100ms improvement predicts 2.3% conversion increase.',
    severity: 'medium',
    timestamp: '2025-04-10T11:05:32Z',
    category: 'correlation',
  },
  {
    id: 4,
    title: 'Predicted Inventory Shortage',
    description: 'Based on current sales velocity, product SKU-7782 is predicted to stock out in 8.2 days, 12 days before next scheduled shipment.',
    severity: 'high',
    timestamp: '2025-04-12T09:45:21Z',
    category: 'prediction',
  },
]

// Geo data for US states
export const usStatesData = [
  { id: 'AL', state: 'Alabama', value: 48 },
  { id: 'AK', state: 'Alaska', value: 19 },
  { id: 'AZ', state: 'Arizona', value: 73 },
  { id: 'AR', state: 'Arkansas', value: 32 },
  { id: 'CA', state: 'California', value: 95 },
  { id: 'CO', state: 'Colorado', value: 65 },
  { id: 'CT', state: 'Connecticut', value: 54 },
  { id: 'DE', state: 'Delaware', value: 27 },
  { id: 'FL', state: 'Florida', value: 85 },
  { id: 'GA', state: 'Georgia', value: 76 },
  { id: 'HI', state: 'Hawaii', value: 41 },
  { id: 'ID', state: 'Idaho', value: 29 },
  { id: 'IL', state: 'Illinois', value: 67 },
  { id: 'IN', state: 'Indiana', value: 52 },
  { id: 'IA', state: 'Iowa', value: 38 },
  { id: 'KS', state: 'Kansas', value: 34 },
  { id: 'KY', state: 'Kentucky', value: 42 },
  { id: 'LA', state: 'Louisiana', value: 45 },
  { id: 'ME', state: 'Maine', value: 25 },
  { id: 'MD', state: 'Maryland', value: 63 },
  { id: 'MA', state: 'Massachusetts', value: 71 },
  { id: 'MI', state: 'Michigan', value: 58 },
  { id: 'MN', state: 'Minnesota', value: 52 },
  { id: 'MS', state: 'Mississippi', value: 31 },
  { id: 'MO', state: 'Missouri', value: 47 },
  { id: 'MT', state: 'Montana', value: 23 },
  { id: 'NE', state: 'Nebraska', value: 36 },
  { id: 'NV', state: 'Nevada', value: 49 },
  { id: 'NH', state: 'New Hampshire', value: 33 },
  { id: 'NJ', state: 'New Jersey', value: 68 },
  { id: 'NM', state: 'New Mexico', value: 35 },
  { id: 'NY', state: 'New York', value: 83 },
  { id: 'NC', state: 'North Carolina', value: 72 },
  { id: 'ND', state: 'North Dakota', value: 21 },
  { id: 'OH', state: 'Ohio', value: 61 },
  { id: 'OK', state: 'Oklahoma', value: 39 },
  { id: 'OR', state: 'Oregon', value: 56 },
  { id: 'PA', state: 'Pennsylvania', value: 64 },
  { id: 'RI', state: 'Rhode Island', value: 28 },
  { id: 'SC', state: 'South Carolina', value: 46 },
  { id: 'SD', state: 'South Dakota', value: 22 },
  { id: 'TN', state: 'Tennessee', value: 57 },
  { id: 'TX', state: 'Texas', value: 89 },
  { id: 'UT', state: 'Utah', value: 43 },
  { id: 'VT', state: 'Vermont', value: 18 },
  { id: 'VA', state: 'Virginia', value: 69 },
  { id: 'WA', state: 'Washington', value: 74 },
  { id: 'WV', state: 'West Virginia', value: 26 },
  { id: 'WI', state: 'Wisconsin', value: 53 },
  { id: 'WY', state: 'Wyoming', value: 17 },
]

// Knowledge graph data
export const knowledgeGraphData = {
  nodes: [
    { id: 1, name: 'Customer A', group: 'customer' },
    { id: 2, name: 'Customer B', group: 'customer' },
    { id: 3, name: 'Customer C', group: 'customer' },
    { id: 4, name: 'Product X', group: 'product' },
    { id: 5, name: 'Product Y', group: 'product' },
    { id: 6, name: 'Product Z', group: 'product' },
    { id: 7, name: 'Campaign 1', group: 'campaign' },
    { id: 8, name: 'Campaign 2', group: 'campaign' },
    { id: 9, name: 'Store Location A', group: 'location' },
    { id: 10, name: 'Store Location B', group: 'location' },
  ],
  links: [
    { source: 1, target: 4, value: 8, type: 'purchased' },
    { source: 1, target: 5, value: 5, type: 'purchased' },
    { source: 1, target: 7, value: 3, type: 'engaged' },
    { source: 1, target: 9, value: 6, type: 'visited' },
    { source: 2, target: 4, value: 4, type: 'purchased' },
    { source: 2, target: 6, value: 7, type: 'purchased' },
    { source: 2, target: 8, value: 5, type: 'engaged' },
    { source: 2, target: 10, value: 4, type: 'visited' },
    { source: 3, target: 5, value: 6, type: 'purchased' },
    { source: 3, target: 6, value: 3, type: 'purchased' },
    { source: 3, target: 7, value: 4, type: 'engaged' },
    { source: 3, target: 9, value: 5, type: 'visited' },
    { source: 7, target: 4, value: 8, type: 'promoted' },
    { source: 7, target: 5, value: 6, type: 'promoted' },
    { source: 8, target: 5, value: 5, type: 'promoted' },
    { source: 8, target: 6, value: 7, type: 'promoted' },
    { source: 9, target: 4, value: 4, type: 'sells' },
    { source: 9, target: 5, value: 5, type: 'sells' },
    { source: 10, target: 4, value: 3, type: 'sells' },
    { source: 10, target: 6, value: 6, type: 'sells' },
  ]
}

// Collaboration team members
export const teamMembers = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Data Analyst',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'active',
    lastActive: '2025-04-12T14:32:17Z',
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Marketing Director',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'inactive',
    lastActive: '2025-04-12T10:15:42Z',
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    role: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'active',
    lastActive: '2025-04-12T14:28:05Z',
  },
  {
    id: 4,
    name: 'Robert Johnson',
    role: 'CEO',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'inactive',
    lastActive: '2025-04-11T16:42:31Z',
  },
  {
    id: 5,
    name: 'Olivia Chen',
    role: 'Product Manager',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    status: 'active',
    lastActive: '2025-04-12T13:55:19Z',
  },
]

// Shared dashboards
export const sharedDashboards = [
  {
    id: 1,
    name: 'Executive Summary',
    creator: 'Emma Thompson',
    createdAt: '2025-03-25T09:32:17Z',
    lastModified: '2025-04-11T15:42:23Z',
    shared: [1, 2, 3, 4, 5],
    status: 'published',
  },
  {
    id: 2,
    name: 'Marketing Performance',
    creator: 'James Wilson',
    createdAt: '2025-04-02T11:15:42Z',
    lastModified: '2025-04-10T09:18:36Z',
    shared: [1, 2, 5],
    status: 'published',
  },
  {
    id: 3,
    name: 'Customer Behavior Analysis',
    creator: 'Sophia Martinez',
    createdAt: '2025-04-08T14:28:05Z',
    lastModified: '2025-04-12T08:45:12Z',
    shared: [1, 3, 5],
    status: 'draft',
  },
  {
    id: 4,
    name: 'Sales Forecast',
    creator: 'Emma Thompson',
    createdAt: '2025-03-18T10:42:31Z',
    lastModified: '2025-04-09T16:32:47Z',
    shared: [1, 4],
    status: 'published',
  },
]
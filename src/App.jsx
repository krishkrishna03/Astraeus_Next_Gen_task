import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Layout Components
import AppLayout from './layouts/AppLayout'

// Pages
import Dashboard from './pages/Dashboard'
import DataSources from './pages/DataSources'
import Analytics from './pages/Analytics'
import GeoAnalysis from './pages/GeoAnalysis'
import KnowledgeGraph from './pages/KnowledgeGraph'
import Collaboration from './pages/Collaboration'

function App() {
  const [darkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Routes>
        <Route path="/" element={<AppLayout darkMode={darkMode} />}>
          <Route index element={<Dashboard />} />
          <Route path="data-sources" element={<DataSources />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="geo-analysis" element={<GeoAnalysis />} />
          <Route path="knowledge-graph" element={<KnowledgeGraph />} />
          <Route path="collaboration" element={<Collaboration />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AragonClient from './layout/aragon_client'
import ExplorePage from './pages/explore'
import VotePage from './pages/vote'
import FinancePage from './pages/finance'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AragonClient />}>
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/finance" element={<FinancePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

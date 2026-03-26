import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import InstalledApps from './pages/InstalledApps'
import AppDetail from './pages/AppDetail'
import NotFound from './pages/NotFound'
import AppNotFound from './pages/AppNotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installed" element={<InstalledApps />} />
          <Route path="/app/:id" element={<AppDetail />} />
          <Route path="/app-not-found" element={<AppNotFound />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

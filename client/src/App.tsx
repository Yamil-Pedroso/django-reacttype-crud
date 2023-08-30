import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Aside from './components/dashboard/Aside'
import HomePage from './pages/HomePage'
import LoginFormSimulate from './components/authentication/login/LoginFormSimulate'
import AnaliticsPage from './pages/AnaliticsPage'
import TeamsPage from './pages/TeamsPage'
import DocumentsPage from './pages/DocumentsPage'
import SettingsPage from './pages/SettingsPage'
import TasksFormPage from './pages/TasksFormPage'
import { Toaster } from 'react-hot-toast'
import styled from 'styled-components'

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
`
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
    if (loggedIn) {
      setShowDashboard(true)
    }
  }, [setShowDashboard])

  return (
    <Router>
      <Container>
        <Aside setShowDashboard={setShowDashboard} />
        <div style={{ width: '100%' }}>
          <Routes>
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <LoginFormSimulate 
                    setShowDashboard={setShowDashboard} />
                  ) : (
                  <Navigate to="/profile" />
                )
              }
            />
            <Route
              path="/profile"
              element={
                <HomePage
                setShowDashboard={setShowDashboard} />
              }
            />
            {/*<Route path="/tasks" element={<TasksPage />} />*/}
            <Route
              path="/tasks/new"
              element={showDashboard ? <TasksFormPage /> : <Navigate to="/" />}
            />
            <Route
              path="/tasks/:id"
              element={showDashboard ? <TasksFormPage /> : <Navigate to="/" />}
            />
            <Route
              path="/analitics"
              element={showDashboard ? <AnaliticsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/teams"
              element={showDashboard ? <TeamsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/documents"
              element={showDashboard ? <DocumentsPage /> : <Navigate to="/" />}
            />
            <Route
              path="/settings"
              element={showDashboard ? <SettingsPage /> : <Navigate to="/" />}
            />
          </Routes>
          <Toaster />
        </div>
      </Container>
    </Router>
  )
}

export default App

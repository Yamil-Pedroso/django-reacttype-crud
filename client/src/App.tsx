import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Aside from './components/dashboard/Aside'
import HomePage from './pages/HomePage'
import LoginFormPage from './pages/LoginFormPage'
import LoginForm from './components/authentication/login/LoginForm'
import LoginFormSimulate from './components/authentication/login/LoginFormSimulate'
import TasksPage from './pages/TasksPage'
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
  const [showDashboard, setShowDashboard] = useState(true)

  return (
    <Router>
      <Container>
        <div style={{ width: '100%' }}>
          <Routes>
            <Route
              path="/"
              element={
                <LoginFormSimulate setShowDashboard={setShowDashboard} />
              }
            />
            <Route
              path="/profile"
              element={
                showDashboard ? (
                  <HomePage setShowDashboard={setShowDashboard} />
                ) : (
                  <Navigate to="/" />
                )
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

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Aside from './components/dashboard/Aside'
import HomePage from './pages/HomePage'
import LoginFormPage from './pages/LoginFormPage'
import TasksPage from './pages/TasksPage'
import AnaliticsPage from './pages/AnaliticsPage'
import TeamsPage from './pages/TeamsPage'
import DocumentsPage from './pages/DocumentsPage'
import SettingsPage from './pages/SettingsPage'
import TasksFormPage from './pages/TasksFormPage'
import Navigation from './components/create-tasks/Navigation'
import { Toaster } from 'react-hot-toast'
import styled from 'styled-components'

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Aside />
        <div style={{ width: "100%"}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/tasks" element={<TasksPage />} />*/}
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/tasks/new" element={<TasksFormPage />} />
            <Route path="/tasks/:id" element={<TasksFormPage />} /> 
            <Route path="/analitics" element={<AnaliticsPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
           </Routes>
          <Toaster />
        </div>
        </Container>
    </Router>
  )
}

export default App
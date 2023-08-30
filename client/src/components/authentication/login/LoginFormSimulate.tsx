import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  LoginSimulateContainer,
  FormWrapper,
  Form,
  LeftBoxLogin,
  BTNWrapper,
  BTNlogin,
  SignUpWrapper,
} from './styles'
import { toast } from 'react-hot-toast'
import images from '../../../assets/images'

const LoginFormSimulate = (
   { setShowDashboard, }: { setShowDashboard: React.Dispatch<React.SetStateAction<boolean>> }
   ) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowDashboard(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.error('Please fill in all fields', {
        duration: 3000,
        position: 'top-center',
        style: {
          padding: '16px',
          background: '#2a2a2a',
          color: '#fff',
        },
      })
      return
    }

    handleLogin()
    toast.success('Login successful', {
      duration: 3000,
      position: 'top-right',
      style: {
        padding: '16px',
        background: '#2a2a2a',
        color: '#fff',
      },
    })
  }

  return (
    <LoginSimulateContainer>
      {isLoggedIn ? (
        <>
          <Navigate to="/profile" />
        </>
      ) : (
        <>
          <FormWrapper>
            <LeftBoxLogin>
              <div>
                <h2>HELLO USER.</h2>
                <p className="welcome-back">
                  Welcome back! Please login to your account.
                </p>
                <SignUpWrapper>
                  <p>Don't have an account?</p>
                  <button>Sign up</button>
                </SignUpWrapper>
              </div>
            </LeftBoxLogin>
            <Form onSubmit={handleSubmit}>
              <img src={images.login} alt="login" width="140" />
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <BTNWrapper>
                <BTNlogin type="submit">Login</BTNlogin>
                <p>Forgot Password?</p>
              </BTNWrapper>
            </Form>
          </FormWrapper>
        </>
      )}
    </LoginSimulateContainer>
  )
}

export default LoginFormSimulate

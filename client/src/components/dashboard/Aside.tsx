import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  AsideWrapper,
  UlMenuWrapper,
  UlLogout,
  ContentMenuBox,
} from './styles'
import {
  MdDashboard,
  MdEqualizer,
  MdPeople,
  MdDescription,
  MdSettings,
} from 'react-icons/md'
import { toast } from 'react-hot-toast'
interface AsideProps {
  title: string
  icon: JSX.Element
}

const asideProps: AsideProps[] = [
  {
    title: 'Profile',
    icon: <MdDashboard size={28} />,
  },
  {
    title: 'Analitics',
    icon: <MdEqualizer size={28} />,
  },
  {
    title: 'Teams',
    icon: <MdPeople size={28} />,
  },
  {
    title: 'Documents',
    icon: <MdDescription size={28} />,
  },
  {
    title: 'Settings',
    icon: <MdSettings size={28} />,
  },
]

const Aside = ({ setShowDashboard, }: { setShowDashboard: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowDashboard(false)
    localStorage.removeItem('isLoggedIn')

    toast.success('Logout successful', {
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
    <>
      <Container>
        <AsideWrapper>
          <h2>Logo</h2>
          <UlMenuWrapper>
            {asideProps.map((item, index) => (
              <div key={index}>
                <ContentMenuBox>
                  <div>
                    <span>{item.icon}</span>
                    {item.title === 'Profile' ? (
                      <Link to="/profile">
                        <p>{item.title}</p>
                      </Link>
                    ) : item.title === 'Analitics' ? (
                      <Link to="/analitics">
                        <p>{item.title}</p>
                      </Link>
                    ) : item.title === 'Teams' ? (
                      <Link to="/teams">
                        <p>{item.title}</p>
                      </Link>
                    ) : item.title === 'Documents' ? (
                      <Link to="/documents">
                        <p>{item.title}</p>
                      </Link>
                    ) : item.title === 'Settings' ? (
                      <Link to="/settings">
                        <p>{item.title}</p>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                </ContentMenuBox>
              </div>
            ))}
          </UlMenuWrapper>

          <UlLogout>
            <div>
              {!isLoggedIn && (
                <Link to="/" onClick={handleLogout} style={{ cursor: "pointer"}}>
                  <p>Logout</p>
                </Link>
              )}
            </div>
          </UlLogout>
        </AsideWrapper>
      </Container>
    </>
  )
}

export default Aside

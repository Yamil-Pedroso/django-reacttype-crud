import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'
import UserList from '../components/user/UserList'

// Styled Components
const Container = styled.div`
  padding: 5rem;

  h1 {
    color: #2f2f2f;
  }
`

const TeamsPage = () => {
  return (
    <>
      <Metadata title="Teams" />
      <Container>
        <h1>TeamsPage</h1>
        <UserList />
      </Container>
    </>
  )
}

export default TeamsPage
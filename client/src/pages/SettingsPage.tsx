import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'

// Styled Components
const Container = styled.div`
  display: flex;
  h1 {
    color: #2f2f2f;
  }
`

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" />
      <Container>
        <h1>SettingsPage</h1>
      </Container>
    </>
  )
}

export default SettingsPage
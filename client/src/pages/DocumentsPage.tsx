import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'

// Styled Components
const Container = styled.div`
  padding: 5rem;

  h1 {
    color: #2f2f2f;
  }
`

const DocumentsPage = () => {
  return (
    <>
      <Metadata title="Documents" />
      <Container>
        <h1>DocumentsPage</h1>
      </Container>
    </>
  )
}

export default DocumentsPage
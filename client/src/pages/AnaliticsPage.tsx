import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'
import Aside from '../components/dashboard/Aside'

// Styled Components
const Container = styled.div`
  padding: 5rem;

  h1 {
    color: #2f2f2f;
  }
`

const AnaliticsPage = () => {
  return (
    <>
      <Metadata title="Analitics" />
      <Aside />
      <Container>
        <h1>AnaliticsPage</h1>
      </Container>
    </>
  )
}

export default AnaliticsPage

import styled from 'styled-components'
import Metadata from '../components/metadata/Metadata'

// Styled Components
const Container = styled.div`
  display: flex;

  h1 {
    color: #2f2f2f;
  }
`

const AnaliticsPage = () => {
  return (
    <>
      <Metadata title="Analitics" />
      <Container>
        <h1>AnaliticsPage</h1>
      </Container>
    </>
  )
}

export default AnaliticsPage

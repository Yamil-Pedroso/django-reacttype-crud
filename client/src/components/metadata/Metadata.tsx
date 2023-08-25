import { Helmet }from 'react-helmet'

interface MetadataProps {
    title?: string
    
}

const Metadata = ({ title }: MetadataProps) => {
  
  return (
    <>
        <Helmet>
            <title>{`Tasks App | ${title}`}</title>
        </Helmet>
    </>
  )
}

export default Metadata
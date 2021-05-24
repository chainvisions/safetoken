import React from 'react'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={"🛡"}
        title="SafeToken"
        subtitle="Create your own Safe version of your favorite tokens!"
      />
    </Page>
  )
}

export default Home
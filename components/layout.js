import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { defaultSeo } from 'next-seo.config'
// import Footer from '@/components/footer'
import HeaderV2 from '../components/AppHeader/AppHeader'
import AppFooter from '../components/AppFooter/AppFooter'

import { Cell, Grid, Row, styled } from '@matthill8286/atomic-ui'

const StyledCell = styled(Cell)`
  margin-top: 80px;
`

function Layout({ children, footer, navigation }) {
  console.log('>> logging', { navigation })
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSeo} />
      <HeaderV2 {...navigation} />
      <Grid>
        <Row>
          <StyledCell columns={12}>{children}</StyledCell>
        </Row>
      </Grid>
      {/* <Footer {...footer} /> */}
      <AppFooter
        logoUrl="https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324"
        instagramLink={'instagram.com'}
        twitterLink={'twitter.co.uk'}
        facebookLink={'facebook.com'}
        youtubeLink={'youtube.co.uk'}
        text="Saiyan Motorsport"
        links={[...footer.categories, ...footer.collections]}
      />
    </React.Fragment>
  )
}

export default Layout

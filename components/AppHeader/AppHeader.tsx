import React from 'react'
// import { useCart } from 'react-use-cart'
import { Divider, Link } from '@matthill8286/atomic-ui'
import {
  StyledActionItems,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledSection
} from './AppHeader.styled'
import { GraphCMSSVG } from '@/svgs'

function HeaderV2({ pages = [] }) {
  return (
    <StyledSection>
      <Divider color="primary" height="xs" />
      <StyledHeaderWrapper paddingString="sm md">
        <Link href="/">
          <GraphCMSSVG />
        </Link>
        <StyledActionItems>
          {pages.length &&
            pages.map((page: any) => (
              <StyledItemWrapper>
                <Link
                  key={page?.id}
                  inline
                  scale="small"
                  underline={false}
                  href={`/${page.type.toLowerCase()}/${page.slug}`}
                >
                  {page?.name}
                </Link>
              </StyledItemWrapper>
            ))}
        </StyledActionItems>
      </StyledHeaderWrapper>
    </StyledSection>
  )
}

export default HeaderV2

import React from 'react'
import {
  Divider,
  Picture,
  CopyText,
  FlexBox,
  Row,
  GroupedActionLinks,
  useTheme
} from '@matthill8286/atomic-ui'
import { AppFooterProps } from './AppFooter.interface'
import {
  StyledCopyText,
  StyledPicture,
  StyledFooterWrapper,
  StyledGroupedActionLinksWrapper,
  StyledGroupedActionLinks
} from './AppFooter.styled'

const AppFooter: React.FC<AppFooterProps> = ({
  logoUrl,
  altText,
  links = [],
  text,
  socialIcons
}): JSX.Element => {
  // const { breakpoint: currentBreakpoint } = useWindowDimensions()
  // const { footer } = useTheme()
  // const isMobile = currentBreakpoint < breakpoints.md

  return (
    <StyledFooterWrapper>
      <Row noMargin>
        <StyledPicture
          colsXl={3}
          colsLg={6}
          colsMd={8}
          colsSm={8}
          colsXs={4}
          align="middle"
        >
          <FlexBox justifyContent="space-between">
            <Picture
              src={logoUrl}
              alt={altText}
              width="107px"
              height="64px"
              objectFit="contain"
            />
            {socialIcons}
          </FlexBox>
        </StyledPicture>
        <StyledGroupedActionLinksWrapper
          colsXl={6}
          colsLg={6}
          colsMd={8}
          colsSm={8}
          colsXs={4}
          align="middle"
        >
          <StyledGroupedActionLinks>
            {links && (
              <GroupedActionLinks
                links={links.map((link) => ({
                  actionLabel: link.name,
                  href: `/${link.type.toLowerCase()}/${link.slug}`
                }))}
              />
            )}
          </StyledGroupedActionLinks>
        </StyledGroupedActionLinksWrapper>
        <StyledCopyText
          colsXl={3}
          colsLg={12}
          colsMd={8}
          colsSm={8}
          colsXs={4}
          align="middle"
        >
          <CopyText tag="span" fontSize={'xs'}>
            {text}
          </CopyText>
        </StyledCopyText>
      </Row>
    </StyledFooterWrapper>
  )
}

export default AppFooter

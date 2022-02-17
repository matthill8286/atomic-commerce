import {
  Cell,
  FlexBox,
  media,
  styled,
  css,
  padding,
  BoxDimensions
} from '@matthill8286/atomic-ui'

export const StyledPicture = styled(Cell)`
  ${media.xs} {
    width: 100%;
  }

  ${media.lg} {
    justify-self: flex-start;
    width: 100%;
  }
`

export const StyledCopyText = styled(Cell)`
  ${media.xs} {
    justify-self: flex-start;
    padding-left: ${({ theme }) => theme.spacing.base.sm};
  }

  ${media.lg} {
    justify-self: center;
  }

  ${media.xl} {
    justify-self: flex-end;
  }
`

export const StyledGroupedActionLinksWrapper = styled(Cell)`
  ${media.xs} {
    justify-self: flex-start;
  }

  ${media.lg} {
    justify-self: center;
  }
`

export const StyledFooterWrapper = styled.div<{ padding2?: BoxDimensions }>(
  ({ theme, padding2 }) => css`
    ${padding ? `${padding({ theme, padding: padding2 }) || 0};` : ''}
    background: ${({ theme }) => theme.color[theme.header.topBar]};
  `
)

export const StyledGroupedActionLinks = styled(FlexBox)`
  ${media.xs} {
    justify-content: flex-start;
    flex-direction: column;
  }

  ${media.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`

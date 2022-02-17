import { FlexItemProps } from '@/components/Helper/FlexBox'
import { QuickAction } from '@/components/Molecules/ActionLink'

export interface AppFooterProps extends FlexItemProps {
  links?: QuickAction[]
  logoUrl: string
  altText?: string
  twitterLink?: string
  instagramLink?: string
  facebookLink?: string
  youtubeLink?: string
  text?: string
  padding?: boolean
  socialIcons?: JSX.Element
}

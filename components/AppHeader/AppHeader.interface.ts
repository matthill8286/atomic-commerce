import { QuickAction, Image } from '@matthill8286/atomic-ui'
import React from 'react'

export type HeaderContent = {
  id: string | number
  links?: QuickAction[]
  searchEnabled?: boolean
  searchLabel?: string
}

export interface AppHeaderProps {
  headerContent: HeaderContent
  searchQuery?: string
  renderSearchBar?: JSX.Element | null
  logo: Image
  onLogoClick?: (event?: React.MouseEvent) => void
}

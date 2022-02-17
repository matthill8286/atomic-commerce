import Link from 'next/link'
import Image from 'next/image'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { useSettingsContext } from '@/context/settings'
import { Card, Cell, CopyText, Picture, Typo } from '@matthill8286/atomic-ui'

function ProductCard({ id, images, name, price, slug }) {
  const { activeCurrency } = useSettingsContext()

  const [primaryImage] = images

  return (
    <Cell columns={4}>
      <Card padding="sm" key={id}>
        <Link href={`/products/${slug}`}>
          <a className="group no-underline w-full h-full flex">
            <div className="bg-gray-50 rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
              {primaryImage ? (
                <Picture
                  src={primaryImage.url}
                  alt={name}
                  title={name}
                  height="300px"
                />
              ) : null}

              <div className="pt-3 md:pt-6 text-center">
                <CopyText className="text-gray-800 font-semibold text-lg group-hover:text-indigo-600 mb-1">
                  {name}
                </CopyText>
                <CopyText display="flex">
                  {formatCurrencyValue({
                    currency: activeCurrency,
                    value: price
                  })}
                </CopyText>
              </div>
            </div>
          </a>
        </Link>
      </Card>
    </Cell>
  )
}

export default ProductCard
